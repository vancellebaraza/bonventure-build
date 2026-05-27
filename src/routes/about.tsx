import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader, FadeIn } from "@/components/SiteLayout";
import about from "@/assets/about-engineer.jpg";
import { Compass, ShieldCheck, Target, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Build With Bonventure" },
      { name: "description", content: "Qualified civil & structural engineer delivering trusted construction, maintenance and infrastructure services across Kenya." },
      { property: "og:title", content: "About Build With Bonventure" },
      { property: "og:description", content: "Qualified civil & structural engineer serving Kenya." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const VALUES = [
  { icon: ShieldCheck, title: "Integrity", desc: "Honest pricing, transparent timelines and engineering you can verify." },
  { icon: Target, title: "Precision", desc: "Code-compliant designs and meticulous on-site execution." },
  { icon: Compass, title: "Accountability", desc: "A qualified engineer leads every project end-to-end." },
  { icon: Sparkles, title: "Craft", desc: "Finishes and details handled with genuine pride of work." },
];

function About() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="About us" title="Engineering trust, one project at a time." subtitle="Build With Bonventure is led by a qualified civil and structural engineer, delivering full-spectrum construction and maintenance services across Kenya." />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 grid lg:grid-cols-2 gap-12 items-start">
        <FadeIn>
          <img src={about} alt="Civil engineer reviewing blueprints on site" loading="lazy" width={1200} height={1200} className="rounded-2xl object-cover w-full aspect-[5/6] shadow-[var(--shadow-card)]" />
        </FadeIn>
        <FadeIn delay={120}>
          <div className="text-xs uppercase tracking-[0.25em] text-[var(--teal-deep)] font-semibold">Our story</div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">A practice founded on engineering principles.</h2>
          <p className="mt-5 text-muted-foreground">
            Bonventure brings hands-on experience across building works, structural engineering, electrical and plumbing installations, landscaping, interior design, CCTV and electric fence security, repairs and routine maintenance. Every project is treated as a long-term commitment, not a transaction.
          </p>
          <div className="mt-8 rounded-xl border border-border bg-card p-6">
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--teal-deep)] font-semibold">Mission</div>
            <p className="mt-2 text-lg font-display font-semibold">To deliver safe, dependable and beautifully executed structures that stand the test of time.</p>
          </div>
          <div className="mt-4 rounded-xl border border-border bg-card p-6">
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--teal-deep)] font-semibold">Philosophy</div>
            <p className="mt-2 text-muted-foreground">Engineering is the discipline of turning trust into measurable outcomes. We design conservatively, build carefully, and communicate clearly.</p>
          </div>
        </FadeIn>
      </section>

      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold max-w-2xl">Our values</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map(({ icon: Icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 80}>
                <div className="rounded-xl bg-card border border-border p-6 h-full hover:border-[var(--teal)]/40 transition-colors">
                  <div className="h-11 w-11 rounded-lg bg-[var(--teal)]/10 grid place-items-center text-[var(--teal-deep)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="mt-14 rounded-2xl bg-[var(--charcoal)] text-white p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl font-bold">Ready to build with confidence?</h3>
              <p className="mt-2 text-white/70">Let's discuss your project — design, build, or maintenance.</p>
            </div>
            <Link to="/contact" className="px-6 py-3.5 rounded-md bg-[var(--teal)] hover:bg-[var(--teal-deep)] font-semibold transition-colors">Start a conversation</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}