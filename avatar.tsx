import { Reveal } from "@/components/Reveal";

const TEAM = [
  { name: "Prince Rathore", role: "Founder" },
  { name: "Aanya Mishra", role: "Programs" },
  { name: "Samyukta Sharma", role: "Outreach" },
  { name: "Tvisha Malhotra", role: "Operations" },
  { name: "Shaurya Jain", role: "Partnerships" },
  { name: "Maira Rajput", role: "Community" },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
}

export function Team() {
  return (
    <section id="team" className="border-t border-border py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-3xl">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span className="h-px w-8 bg-accent" />
            The People Behind Updraft
          </div>
          <h2 className="mt-6 font-display text-4xl leading-tight text-balance text-foreground sm:text-6xl">
            Young people, building for young people.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 80}>
              <div className="group flex flex-col items-center text-center">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent/40 to-transparent opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-accent/30 bg-gradient-to-br from-surface-elevated to-surface font-display text-2xl text-foreground ring-1 ring-inset ring-white/5 sm:h-28 sm:w-28">
                    {initials(m.name)}
                  </div>
                </div>
                <div className="mt-4 text-sm font-medium text-foreground">
                  {m.name}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {m.role}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
