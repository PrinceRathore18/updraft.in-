import { Reveal } from "@/components/Reveal";

export function Mission() {
  return (
    <section id="mission" className="relative py-32 lg:py-48">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="h-px w-8 bg-accent" />
              Our Mission
            </div>
            <h2 className="mt-6 font-display text-3xl leading-tight text-foreground sm:text-4xl">
              Skills they were never taught. Confidence they always had.
            </h2>
          </Reveal>

          <div className="lg:col-span-8">
            <Reveal>
              <blockquote className="font-display text-3xl leading-[1.15] text-balance text-foreground sm:text-5xl lg:text-6xl">
                "Education taught them to memorize.{" "}
                <span className="text-accent italic">We teach them to lead.</span>"
              </blockquote>
            </Reveal>

            <Reveal delay={150} className="mt-12 grid gap-8 sm:grid-cols-2">
              <p className="text-base leading-relaxed text-muted-foreground">
                Updraft is a youth-led nonprofit working to inculcate 21st
                century skills in India's youth — regardless of their
                socioeconomic, educational, or cultural background.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                We build programs that meet teenagers where they are, then move
                them somewhere they never imagined they could go: a stage, a
                room, a conversation, a leadership seat.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
