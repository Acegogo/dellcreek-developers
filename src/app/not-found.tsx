import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="py-20 md:py-28">
      <div className="rounded-3xl bg-card p-10 ring-1 ring-border">
        <div className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">
          404
        </div>
        <h1 className="mt-4 font-display text-3xl tracking-tight text-fg md:text-4xl">
          Page not found
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
          The page you’re looking for doesn’t exist. Head back home, or browse
          projects and land for sale.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/">Back to home</ButtonLink>
          <Link className="rounded-full px-5 py-3 text-sm text-muted hover:text-fg hover:bg-fg/5 transition" href="/projects">
            View projects
          </Link>
        </div>
      </div>
    </Container>
  );
}

