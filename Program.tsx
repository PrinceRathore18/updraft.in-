import { Instagram } from "lucide-react";
import { Wordmark } from "@/components/Wordmark";

const LINKS = [
  { href: "#mission", label: "Mission" },
  { href: "#program", label: "Program" },
  { href: "#team", label: "Team" },
  { href: "#involved", label: "Get Involved" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Wordmark className="text-3xl" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A youth-led movement equipping India's next generation with the
              skills their classrooms forgot.
            </p>
          </div>

          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Explore
            </div>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-foreground/80 transition-colors hover:text-accent"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Follow
            </div>
            <a
              href="https://instagram.com/updraft.india"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-accent"
            >
              <Instagram className="h-4 w-4" />
              @updraft.india
            </a>
            <div className="mt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Based in
            </div>
            <div className="mt-2 text-sm text-foreground/80">India</div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Updraft. Lifting youth. Elevating communities.</div>
          <div>Made by young people. For young people.</div>
        </div>
      </div>
    </footer>
  );
}
