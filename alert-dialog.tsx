import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Wordmark } from "@/components/Wordmark";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#mission", label: "Mission" },
  { href: "#skills", label: "Skills" },
  { href: "#program", label: "Program" },
  { href: "#team", label: "Team" },
  { href: "#involved", label: "Get Involved" },
  { href: "#contact", label: "Contact" },
];

const VOLUNTEER_URL = "https://forms.gle/bmU5qMhLfNz7VA1z6";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="flex items-center" aria-label="Updraft home">
          <Wordmark />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={VOLUNTEER_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-accent/40 bg-accent/10 px-5 py-2 text-sm font-medium text-foreground transition-all hover:bg-accent hover:text-accent-foreground lg:inline-flex"
          >
            Volunteer
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-md p-2 text-foreground lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-base text-foreground/90 hover:bg-surface-elevated"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={VOLUNTEER_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-2 block rounded-md bg-accent px-3 py-3 text-center text-base font-medium text-accent-foreground"
              >
                Volunteer
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
