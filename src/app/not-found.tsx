import { Button, Container, Eyebrow } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-28 text-center sm:py-40">
      <Eyebrow>404</Eyebrow>
      <h1 className="mt-4 text-4xl font-medium sm:text-6xl">This page doesn&apos;t exist.</h1>
      <p className="mx-auto mt-5 max-w-md text-lg text-muted">It may have moved, or the link may be out of date.</p>
      <Button href="/" className="mt-8">Back to home</Button>
    </Container>
  );
}
