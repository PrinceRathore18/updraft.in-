import { ArrowUpRight, ArrowDown } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

const VOLUNTEER_URL = "https://forms.gle/AdFdnL1QG9v7sQF58";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] w-full items-end overflow-hidden"
    >
      {/* Background image */}
      <img
        src={heroImg}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1280}
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-55"
      />
      {/* Gradients */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      <div
        className="absolute -top-32 left-1/4 -z-10 h-[60vh] w-[60vh] rounded-full blur-3xl animate-[glow_10s_ease-in-out_infinite]"
        style={{ background: "var(--color-accent-glow)" }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-32 lg:px-10 lg:pb-32">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground animate-[fade-in_1s_ease-out_both]">
          <span className="h-px w-8 bg-accent" />
          A Youth-Led Organization · India
        </div>

        <h1 className="mt-8 max-w-5xl font-display text-5xl leading-[1.02] text-balance text-foreground sm:text-7xl lg:text-[8rem] animate-[fade-up_1.2s_cubic-bezier(0.22,1,0.36,1)_both]">
          Lifting youth.
          <br />
          <span className="text-muted-foreground">Elevating</span>{" "}
          <span className="italic text-accent">communities.</span>
        </h1>

        <p
          className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg animate-[fade-up_1.2s_cubic-bezier(0.22,1,0.36,1)_0.2s_both]"
        >
          Updraft equips India's next generation with the 21st century skills
          their classrooms forgot — confidence, voice, leadership — regardless
          of background.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4 animate-[fade-up_1.2s_cubic-bezier(0.22,1,0.36,1)_0.35s_both]">
          <a
            href="#program"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-accent hover:text-accent-foreground"
          >
            Confidence Building Bootcamp
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href={VOLUNTEER_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-accent hover:text-accent"
          >
            Volunteer with us
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:max-w-2xl sm:grid-cols-3">
          {[
            { k: "100", v: "Seats this cohort" },
            { k: "2 days", v: "Live transformation" },
            { k: "Free", v: "Always, for every youth" },
          ].map((s) => (
            <div key={s.v} className="bg-background/80 p-5 backdrop-blur">
              <div className="font-display text-2xl text-foreground sm:text-3xl">
                {s.k}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
