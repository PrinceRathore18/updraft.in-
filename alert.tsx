import {
  ArrowUpRight,
  Calendar,
  Video,
  Ticket,
  Users,
  Check,
  Award,
  FileText,
  Mic2,
  HeartHandshake,
  Trophy,
  Megaphone,
  BookOpen,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import programImg from "@/assets/program.jpg";

const APPLY_URL = "https://forms.gle/bmU5qMhLfNz7VA1z6";

const META = [
  { icon: Calendar, label: "19 & 20 June 2026" },
  { icon: Video, label: "Online · Google Meet" },
  { icon: Ticket, label: "Free to attend" },
  { icon: Users, label: "Only 100 seats" },
];

const LEARN = [
  "Public speaking & communication training",
  "Why we hesitate when we speak",
  "Tools to overcome speaking anxiety",
  "Interactive speaking activities",
  "Real confidence-building exercises",
  "Personal stories from trainers",
  "Practice, not lectures",
];

const GAINS = [
  { icon: BookOpen, t: "Confidence Cheat Sheet", s: "Exclusive to participants" },
  { icon: FileText, t: "Certificate of Participation", s: "For every attendee" },
  { icon: Award, t: "Certificate of Achievement", s: "For standout participants" },
  { icon: Mic2, t: "Letter of Recommendation", s: "For competition winners" },
  { icon: HeartHandshake, t: "3-Month Mentorship", s: "For winners" },
  { icon: Megaphone, t: "Social Media Recognition", s: "For winners" },
];

export function Program() {
  return (
    <section
      id="program"
      className="relative overflow-hidden border-t border-border py-32 lg:py-44"
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-32 h-[40rem] w-[40rem] rounded-full blur-3xl"
        style={{ background: "var(--color-accent-glow)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span className="h-px w-8 bg-accent" />
            Flagship Program · Open Now
          </div>
        </Reveal>

        {/* Oversized featured card */}
        <Reveal>
          <div className="mt-8 grid overflow-hidden rounded-3xl border border-border bg-surface/60 backdrop-blur-sm lg:grid-cols-12">
            {/* Image */}
            <div className="relative lg:col-span-5">
              <img
                src={programImg}
                alt="A young speaker on a TED-style stage with a single warm spotlight"
                loading="lazy"
                width={1600}
                height={1280}
                className="h-full min-h-[320px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent lg:bg-gradient-to-r" />
              <div className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-background/60 px-3 py-1 text-xs uppercase tracking-wider text-accent backdrop-blur">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                  Applications open
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="lg:col-span-7 lg:p-12">
              <div className="p-8 lg:p-0">
                <h2 className="font-display text-4xl leading-[1.05] text-balance text-foreground sm:text-5xl lg:text-6xl">
                  Confidence Building{" "}
                  <span className="italic text-accent">Bootcamp.</span>
                </h2>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  A practical, interactive, two-day experience designed to help
                  teenagers become more confident in speaking, leadership,
                  self-expression, and real-life communication.
                </p>

                {/* Meta row */}
                <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {META.map(({ icon: Icon, label }) => (
                    <li
                      key={label}
                      className="flex flex-col gap-2 rounded-xl border border-border bg-background/60 p-4"
                    >
                      <Icon className="h-4 w-4 text-accent" />
                      <span className="text-xs leading-snug text-foreground">
                        {label}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={APPLY_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-accent-foreground transition-all hover:shadow-[0_0_40px_var(--color-accent-glow)]"
                  >
                    Apply Now
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                  <span className="text-xs text-muted-foreground">
                    Seats fill on a rolling basis
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Two-day structure */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {[
            {
              tag: "Day 01",
              title: "Interactive Training Session",
              body:
                "Speak, stumble, recover, speak again. Live coaching from young trainers who've been exactly where you are.",
            },
            {
              tag: "Day 02",
              title: "Confidence Competition",
              body:
                "Take the stage. Get recognized. Walk out with proof — to yourself — that you can do this.",
              icon: Trophy,
            },
          ].map((d, i) => (
            <Reveal key={d.tag} delay={i * 100}>
              <div className="group h-full rounded-2xl border border-border bg-surface/40 p-8 transition-colors hover:border-accent/40 lg:p-10">
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm tracking-[0.3em] text-accent">
                    {d.tag}
                  </span>
                  {d.icon && <d.icon className="h-5 w-5 text-accent/70" />}
                </div>
                <h3 className="mt-4 font-display text-3xl text-foreground sm:text-4xl">
                  {d.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {d.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* What you'll learn + gain */}
        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="h-px w-8 bg-accent" />
              Inside the room
            </div>
            <h3 className="mt-4 font-display text-3xl text-foreground sm:text-4xl">
              What you'll actually do.
            </h3>
            <ul className="mt-8 space-y-3">
              {LEARN.map((l) => (
                <li key={l} className="flex items-start gap-3 text-sm text-foreground/90">
                  <Check className="mt-1 h-4 w-4 flex-none text-accent" />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                <span className="h-px w-8 bg-accent" />
                What you'll walk away with
              </div>
              <h3 className="mt-4 font-display text-3xl text-foreground sm:text-4xl">
                Real proof. Real practice.
              </h3>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {GAINS.map(({ icon: Icon, t, s }, i) => (
                <Reveal key={t} delay={i * 60}>
                  <div className="group flex items-start gap-4 rounded-xl border border-border bg-background/40 p-5 transition-all hover:border-accent/40 hover:bg-surface-elevated">
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">{t}</div>
                      <div className="mt-0.5 text-xs text-muted-foreground">{s}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={300}>
              <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
                Better public speaking. Sharper communication. Real confidence
                for MUNs, interviews, debates, presentations — and the rooms
                you haven't walked into yet.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
