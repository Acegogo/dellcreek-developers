import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { navItems, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-bg">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <img
              src="/logo.png"
              alt="Dellcreek Developers Limited"
              className="h-10 w-auto"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              We are engaged in the Real Estate business of buying and selling of
              properties, construction and selling of apartments to our consumers
              all around the country.
            </p>
          </div>

          <div>
            <div className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">
              Pages
            </div>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted hover:text-fg transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">
              Contact
            </div>
            <div className="mt-4 space-y-2 text-sm text-muted">
              <div>{site.contact.address}</div>
              <div>
                <a className="hover:text-fg transition" href={`mailto:${site.contact.email}`}>
                  {site.contact.email}
                </a>
              </div>
              {site.contact.phones.map((p) => (
                <div key={p}>
                  <a
                    className="hover:text-fg transition"
                    href={`tel:${p.replaceAll(" ", "")}`}
                  >
                    {p}
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-xs text-muted ring-1 ring-border">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {site.tagline}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-8 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} Dellcreek Developers Limited. All rights
            reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>{site.location}</span>
            <span className="text-muted-2">•</span>
            <span>Built with Next.js</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

