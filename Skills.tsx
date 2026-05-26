import { ArrowUpRight, HandHeart, School, Handshake } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const VOLUNTEER_URL = "https://forms.gle/AdFdnL1QG9v7sQF58";

const WAYS = [
  {
    icon: HandHeart,
    title: "Volunteer",
    body: "Run sessions. Mentor. Build. Help us reach the next 10,000 students.",
    cta: "Apply to volunteer",
    href: VOLUNTEER_URL,
    external: true,
  },
  {
    icon: School,
    title: "School Partnership",
    body: "Bring Updraft programs to your school or college. We'll co-design it with you.",
    cta: "Partner with us",
    href: "mailto:updraft18@gmail.com",
    external: false,
  },
  {
    icon: Handshake,
    title: "Sponsor & Collaborate",
    body: "Fund a cohort. Sponsor a region. Help an entire generation find their voice. Organize with us",
    cta: "Start a conversation",
    href: "mailto:updraft18@gmail.com",
    external: false,
  },
];

export function GetInvolved() {
  return (
    <section
      id="involved"
      className="border-t border-border bg-surface/30 py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-3xl">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span className="h-px w-8 bg-accent" />
            Get Involved
          </div>
          <h2 className="mt-6 font-display text-4xl leading-tight text-balance text-foreground sm:text-6xl">
            Pick your way in.{" "}
            <span className="text-muted-foreground">There's no wrong door.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {WAYS.map(({ icon: Icon, title, body, cta, href, external }, i) => (
            <Reveal key={title} delay={i * 100}>
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="group flex h-full flex-col rounded-2xl border border-border bg-background/40 p-8 transition-all hover:border-accent/40 hover:bg-surface-elevated"
              >
                <Icon className="h-7 w-7 text-accent" />
                <h3 className="mt-6 font-display text-3xl text-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors group-hover:text-accent">
                  {cta}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
