import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader, FadeIn } from "@/components/SiteLayout";
import { Star, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Build With Bonventure" },
      { name: "description", content: "What clients say about Build With Bonventure's engineering and construction services." },
      { property: "og:title", content: "Client Testimonials" },
      { property: "og:description", content: "Trust-building testimonials from satisfied clients." },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: Testimonials,
});

const REVIEWS = [
  { name: "A. Mwangi", role: "Homeowner, Nairobi", text: "Bonventure delivered our home on schedule with workmanship we are genuinely proud of. Honest, communicative and skilled." },
  { name: "S. Otieno", role: "Developer, Kisumu", text: "Their structural drawings sailed through approval. Site execution was equally professional from day one." },
  { name: "J. Kamau", role: "Business Owner, Machakos", text: "The electric fence and CCTV installation gave us real peace of mind. Clean cabling, neat finish, on time." },
  { name: "L. Wairimu", role: "Client, Thika", text: "From foundation to handover, the communication was outstanding. Will work with the team again." },
  { name: "P. Njoroge", role: "Landlord, Nairobi", text: "Routine maintenance has saved us costly repairs. Reliable team, fair pricing." },
  { name: "M. Achieng", role: "Client, Nakuru", text: "The interior finishes exceeded our expectations. Beautifully done." },
];

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const dur = 1200; const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

function Testimonials() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Testimonials" title="Trusted by clients across Kenya." subtitle="Real feedback from homeowners, developers and businesses we have served." />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { n: 120, s: "+", l: "Projects Completed" },
            { n: 95, s: "%", l: "Satisfied Clients" },
            { n: 8, s: "+", l: "Years Experience" },
            { n: 47, s: "", l: "Counties Served" },
          ].map((s) => (
            <div key={s.l} className="rounded-xl bg-card border border-border p-6 text-center">
              <div className="font-display text-3xl sm:text-4xl font-bold text-[var(--teal-deep)]">
                <Counter to={s.n} suffix={s.s} />
              </div>
              <div className="mt-1 text-xs sm:text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <FadeIn key={r.name} delay={(i % 3) * 80}>
              <figure className="rounded-xl bg-card border border-border p-7 h-full hover:border-[var(--teal)]/40 transition-colors">
                <Quote className="h-6 w-6 text-[var(--teal)]" />
                <blockquote className="mt-4 text-foreground/85 leading-relaxed">{r.text}</blockquote>
                <div className="mt-5 flex items-center gap-1 text-[var(--teal-deep)]">
                  {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                </div>
                <figcaption className="mt-3 text-sm">
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-muted-foreground">{r.role}</div>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}