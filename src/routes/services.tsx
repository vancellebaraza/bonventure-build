import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader, FadeIn } from "@/components/SiteLayout";
import { Building2, HardHat, Zap, Sofa, TreePine, Shield, Ruler, Droplets, Wrench, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Build With Bonventure" },
      { name: "description", content: "Civil & structural engineering, building works, electrical, plumbing, interior design, landscaping, CCTV, electric fence, drawings, repairs and tank cleaning." },
      { property: "og:title", content: "Engineering Services in Kenya" },
      { property: "og:description", content: "Full-spectrum construction and engineering services." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const SERVICES = [
  { icon: Building2, title: "Civil & Structural Engineering", desc: "Foundations, framing, and structural analysis designed to code." },
  { icon: HardHat, title: "Building Works", desc: "Turnkey construction — site preparation through final finishes." },
  { icon: Zap, title: "Electrical & Plumbing", desc: "Safe, efficient electrical wiring and plumbing installation." },
  { icon: Sofa, title: "Interior Designs", desc: "Functional, beautiful interiors aligned with your lifestyle." },
  { icon: TreePine, title: "Landscaping", desc: "Hardscapes, lawns and outdoor spaces that elevate your property." },
  { icon: Shield, title: "CCTV & Electric Fence", desc: "Modern security systems for homes, estates and businesses." },
  { icon: Ruler, title: "Architectural & Structural Drawings", desc: "Approved drawings ready for construction and permits." },
  { icon: Droplets, title: "Tank Cleaning", desc: "Professional water tank cleaning and sanitization." },
  { icon: Wrench, title: "Minor & Major Repairs", desc: "Reliable repair and maintenance for any structure." },
];

function Services() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Services" title="Engineering, construction & maintenance." subtitle="Choose from our full range of services — every job is delivered with the same engineering discipline." />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map(({ icon: Icon, title, desc }, i) => (
            <FadeIn key={title} delay={(i % 6) * 60}>
              <article className="group rounded-xl border border-border bg-card p-7 h-full transition-all duration-300 hover:-translate-y-1 hover:border-[var(--teal)]/40 hover:shadow-[var(--shadow-card)]">
                <div className="h-12 w-12 rounded-lg bg-[var(--teal)]/10 grid place-items-center text-[var(--teal-deep)] group-hover:bg-[var(--teal)] group-hover:text-white transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 font-display font-semibold text-lg">{title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                <Link to="/contact" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--teal-deep)] group-hover:gap-2.5 transition-all">
                  Request a quote <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}