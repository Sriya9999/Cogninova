"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "./Icon";

type Props = { industries: string[]; interests: string[]; defaultInterest?: string; defaultIndustry?: string; defaultMessage?: string; email: string };

const field =
  "mt-1.5 w-full rounded-xl border border-mist bg-white px-4 py-3 text-base text-ink placeholder:text-muted/70 transition-colors focus:border-violet focus:outline-none focus:ring-2 focus:ring-violet/25";
const labelCls = "block text-sm font-medium";

export function ContactForm({ industries, interests, defaultInterest, defaultIndustry, defaultMessage, email }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error || "Something went wrong.");
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-2xl border border-mist bg-white p-8 shadow-soft">
        <span className="inline-flex size-10 items-center justify-center rounded-full bg-violet/10 text-violet-deep">
          <Icon name="check" className="size-5" />
        </span>
        <h2 className="mt-4 text-2xl font-medium">Thank you. Your enquiry is with us.</h2>
        <p className="mt-2 text-muted">We&apos;ll review it and get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-mist bg-white p-6 shadow-soft sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelCls}>
          Full name
          <input name="name" required maxLength={120} autoComplete="name" className={field} />
        </label>
        <label className={labelCls}>
          Business email
          <input name="email" type="email" required maxLength={200} autoComplete="email" className={field} />
        </label>
        <label className={labelCls}>
          Company name
          <input name="company" required maxLength={160} autoComplete="organization" className={field} />
        </label>
        <label className={labelCls}>
          Industry
          <select name="industry" required defaultValue={defaultIndustry ?? ""} className={field}>
            <option value="" disabled>Select an industry</option>
            {[...industries, "Other"].map((i) => <option key={i}>{i}</option>)}
          </select>
        </label>
        <label className={`${labelCls} sm:col-span-2`}>
          Area of interest
          <select name="interest" required defaultValue={defaultInterest ?? ""} className={field}>
            <option value="" disabled>Select an area</option>
            {interests.map((i) => <option key={i}>{i}</option>)}
          </select>
        </label>
        <label className={`${labelCls} sm:col-span-2`}>
          Brief description of your requirements
          <textarea name="message" required rows={5} maxLength={4000} defaultValue={defaultMessage} className={field} />
        </label>
        {/* Honeypot: hidden from people, tempting for bots. */}
        <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
          <label>
            Website
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800">
          {error} You can also email us at <a className="underline" href={`mailto:${email}`}>{email}</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-ink px-6 text-sm font-medium text-white transition-colors hover:bg-violet-deep disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Let's Talk About Your AI Project"}
        <Icon name="arrow" className="size-4" />
      </button>
    </form>
  );
}
