import { Mail, Phone, Instagram } from "lucide-react";

const Reveal = ({ children }: any) => <div>{children}</div>;

export function Contact() {
  return (
    <section id="contact" className="border-t border-border py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">

          <Reveal className="lg:col-span-7">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="h-px w-8 bg-accent" />
              Contact
            </div>

            <h2 className="mt-6 font-display text-4xl leading-[1.05] text-balance text-foreground sm:text-6xl lg:text-7xl">
              Let's build something{" "}
              <span className="italic text-accent">meaningful</span> together.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              We read every message. Usually replies within 24 hours.
            </p>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-5">
            <ul className="space-y-2">
              {[
                { icon: Mail, label: "updraft18@gmail.com", href: "mailto:updraft18@gmail.com" },
                { icon: Phone, label: "+91 92112 44089", href: "tel:+919211244089" },
                { icon: Instagram, label: "@updraft__", href: "https://www.instagram.com/updraft__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
              ].map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex items-center justify-between gap-4 border-b border-border py-5 transition-colors hover:border-accent/40"
                  >
                    <span className="flex items-center gap-4">
                      <Icon className="h-5 w-5 text-accent" />
                      <span className="text-base text-foreground transition-colors group-hover:text-accent">
                        {label}
                      </span>
                    </span>

                    <span className="text-xs uppercase tracking-wider text-muted-foreground">
                      Reach out
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

        </div>
      </div>
    </section>
  );
}