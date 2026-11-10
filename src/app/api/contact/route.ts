import { NextResponse } from "next/server";

export const runtime = "nodejs";

const limits = { name: 120, email: 200, company: 160, industry: 80, interest: 80, message: 4000 } as const;
type Field = keyof typeof limits;

// Small in-memory rate limit (per server instance) as a first line of spam defence.
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;

function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_HITS;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never fill this in. Pretend success so bots move on.
  if (typeof body.website === "string" && body.website.trim()) {
    return NextResponse.json({ ok: true });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (limited(ip)) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

  const enquiry = {} as Record<Field, string>;
  for (const key of Object.keys(limits) as Field[]) {
    const value = typeof body[key] === "string" ? (body[key] as string).trim() : "";
    if (!value) return NextResponse.json({ error: "Please complete all fields." }, { status: 400 });
    if (value.length > limits[key]) return NextResponse.json({ error: "One of the fields is too long." }, { status: 400 });
    enquiry[key] = value;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(enquiry.email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const payload = { ...enquiry, source: "cogninova-website", submittedAt: new Date().toISOString() };
  const webhook = process.env.CONTACT_WEBHOOK_URL;

  if (!webhook) {
    if (process.env.NODE_ENV === "production") {
      // Never claim success when the enquiry has nowhere to go.
      console.error("[contact] CONTACT_WEBHOOK_URL is not set; enquiry not delivered.");
      return NextResponse.json({ error: "Our enquiry form is temporarily unavailable." }, { status: 503 });
    }
    console.info("[contact] (dev, no webhook configured)", payload);
    return NextResponse.json({ ok: true });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
  } catch (err) {
    console.error("[contact] delivery failed", err);
    return NextResponse.json({ error: "We couldn't send your enquiry just now." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
