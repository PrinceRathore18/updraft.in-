import {
  MessageSquare,
  Compass,
  Sparkles,
  Users,
  Lightbulb,
  Brain,
  Laptop,
  Heart,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

const SKILLS = [
  { icon: Compass, title: "Leadership", body: "Owning a room, a decision, a moment." },
  { icon: MessageSquare, title: "Communication", body: "Saying what you mean — clearly, calmly." },
  { icon: Sparkles, title: "Confidence", body: "Trusting your voice before others do." },
  { icon: Users, title: "Teamwork", body: "Building with people unlike yourself." },
  { icon: Lightbulb, title: "Creativity", body: "Seeing the question before the answer." },
  { icon: Brain, title: "Critical Thinking", body: "Not believing the first thing you read." },
  { icon: Laptop, title: "Digital Literacy", body: "Using the internet on purpose, not by reflex." },
  { icon: Heart, title: "Emotional Intelligence", body: "Reading the room. Reading yourself." },
];

export function Skills() {
  return (
    <section id="skills" className="relative border-t border-border bg-surface/30 py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-3xl">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span className="h-px w-8 bg-accent" />
            The 21st Century Curriculum
          </div>
          <h2 className="mt-6 font-display text-4xl leading-tight text-balance text-foreground sm:text-6xl">
            Eight skills no exam will ever ask for.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 60}>
              <div className="group relative h-full bg-background p-8 transition-colors hover:bg-surface-elevated">
                <Icon className="h-6 w-6 text-accent transition-transform duration-500 group-hover:-translate-y-1" />
                <h3 className="mt-6 font-display text-2xl text-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
