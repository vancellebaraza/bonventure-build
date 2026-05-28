import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, FadeIn, WHATSAPP_NUMBER } from "@/components/SiteLayout";
import hero from "@/assets/hero-construction.jpg";
import projectModern from "@/assets/project-modern-house.jpg";
import projectBungalow from "@/assets/project-bungalow.jpg";
import projectWall from "@/assets/project-perimeter-wall.jpg";
import { ArrowRight, Building2, HardHat, Wrench, Zap, Shield, Ruler, Star, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Build With Bonventure — Engineering in Kenya" },
      { name: "description", content: "Trusted civil & structural engineering, construction and maintenance across Kenya. Affordable building contractors delivering precision and professionalism." },
      { name: "keywords", content: "civil engineer Kenya, structural engineer Kenya, construction services Kenya, building contractor Kenya, affordable construction Kenya" },
      { property: "og:title", content: "Build With Bonventure — Engineering Trust" },
      { property: "og:description", content: "Professional civil & structural engineering services in Kenya." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "GeneralContractor",
        name: "Build With Bonventure",
        description: "Civil & structural engineering, construction and maintenance services in Kenya.",
        telephone: "+254758477375",
        email: "buildwithbonventure@gmail.com",
        areaServed: "Kenya",
        sameAs: ["https://www.instagram.com/build_with_bonventure"],
      }),
    }],
  }),
  component: Home,
});

const FEATURED_SERVICES = [
  { icon: Building2, title: "Civil & Structural Engineering", desc: "Sound, code-compliant designs for residential and commercial structures." },
  { icon: HardHat, title: "Building Works", desc: "Turnkey construction from foundation to finishes." },
  { icon: Zap, title: "Electrical & Plumbing", desc: "Safe, efficient electrical and plumbing installations." },
  { icon: Shield, title: "CCTV & Electric Fence", desc: "Modern security installations for homes and businesses." },
];

function Home() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--charcoal)] text-white">
        <img
          src={hero}
          alt="Civil engineering construction site at sunset"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--charcoal)]/95 via-[var(--charcoal)]/70 to-transparent" />
        <span className="bg-blob bg-[var(--teal)] h-96 w-96 -top-20 -right-20" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-24 pb-28 sm:pt-32 sm:pb-36">
          <FadeIn delay={60}>
            <h1 className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl leading-[1.05]">
              Professional Civil & Structural <span className="text-[var(--teal)]">Engineering Services</span> in Kenya
            </h1>
          </FadeIn>
          <FadeIn delay={220}>
            <p className="mt-6 text-lg text-white/75 max-w-2xl">
              Delivering trusted construction, engineering, maintenance, and infrastructure solutions with precision and professionalism.
            </p>
          </FadeIn>
          <FadeIn delay={320}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[var(--teal)] hover:bg-[var(--teal-deep)] text-white font-semibold shadow-[var(--shadow-card)] transition-colors">
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/projects" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-white/25 text-white hover:bg-white/5 font-semibold transition-colors">
                View Projects
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={500}>
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl">
              {[
                ["120+", "Projects Delivered"],
                ["95%", "Repeat Clients"],
                ["8+ yrs", "Field Experience"],
                ["24/7", "Site Support"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-2xl sm:text-3xl font-bold text-[var(--teal)]">{n}</div>
                  <div className="text-xs sm:text-sm text-white/60 mt-1">{l}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About the engineer (for SEO indexing) */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pt-16 sm:pt-20">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-10 grid md:grid-cols-[auto,1fr] gap-6 items-center">
          <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-[var(--teal)]/10 grid place-items-center text-[var(--teal-deep)] font-display font-bold text-2xl">
            BO
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--teal-deep)] font-semibold">Lead Engineer</div>
            <h2 className="mt-1 font-display text-2xl sm:text-3xl font-bold">Bonventure</h2>
            <p className="mt-3 text-muted-foreground max-w-3xl">
              Bonventure is a qualified civil and structural engineer based in Kenya, founder of Build With Bonventure. With years of hands-on field experience, he leads every project personally — combining sound engineering, transparent quotations and reliable site delivery for homes, commercial buildings and infrastructure across the country.
            </p>
          </div>
        </div>
      </section>

      {/* Featured services */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.25em] text-[var(--teal-deep)] font-semibold">What we do</div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">Engineering services built on precision</h2>
          <p className="mt-4 text-muted-foreground">From structural design to finishes and maintenance — we manage every stage of your project with care.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURED_SERVICES.map(({ icon: Icon, title, desc }, i) => (
            <FadeIn key={title} delay={i * 80}>
              <div className="group relative rounded-xl border border-border bg-card p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)] hover:border-[var(--teal)]/40">
                <div className="h-11 w-11 rounded-lg bg-[var(--teal)]/10 grid place-items-center text-[var(--teal-deep)] group-hover:bg-[var(--teal)] group-hover:text-white transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display font-semibold text-lg">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--teal-deep)] hover:gap-3 transition-all">
            See all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Project previews */}
      <section className="bg-secondary/60 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.25em] text-[var(--teal-deep)] font-semibold">Recent work</div>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">Selected projects</h2>
            </div>
            <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--teal-deep)]">View all <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {[
              { img: projectModern, title: "Modern Residence", cat: "Building Works" },
              { img: projectBungalow, title: "3-Bedroom Bungalow", cat: "Structural" },
              { img: projectWall, title: "Precast Perimeter Wall", cat: "Civil Works" },
            ].map((p, i) => (
              <FadeIn key={p.title} delay={i * 100}>
                <article className="group rounded-xl overflow-hidden bg-card border border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-5">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-[var(--teal-deep)] font-semibold">{p.cat}</div>
                    <h3 className="mt-1.5 font-display font-semibold text-lg">{p.title}</h3>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--teal-deep)] font-semibold">Why clients choose us</div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">Built on engineering integrity</h2>
            <p className="mt-4 text-muted-foreground">We combine technical rigour with transparent project management. Every job is led by a qualified engineer with end-to-end accountability.</p>
            <ul className="mt-6 space-y-3">
              {[
                "Qualified civil & structural engineer on every project",
                "Transparent quotations, no hidden costs",
                "On-time, on-budget delivery you can verify",
                "Post-handover maintenance & support",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[var(--teal-deep)] mt-0.5 shrink-0" />
                  <span className="text-sm">{t}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="rounded-2xl bg-[var(--charcoal)] text-white p-8 relative overflow-hidden">
              <span className="bg-blob bg-[var(--teal)] h-64 w-64 -bottom-20 -right-10" />
              <div className="relative">
                <Star className="h-6 w-6 text-[var(--teal)]" />
                <p className="mt-4 text-lg leading-relaxed">
                  "Bonventure delivered our home on schedule with workmanship we are genuinely proud of. Honest, communicative and skilled."
                </p>
                <div className="mt-6 text-sm">
                  <div className="font-semibold">A. Mwangi</div>
                  <div className="text-white/60">Homeowner, Nairobi</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-20">
        <div className="rounded-2xl bg-gradient-to-br from-[var(--teal)] to-[var(--teal-deep)] text-white p-10 sm:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold">Have a project in mind?</h2>
            <p className="mt-2 text-white/85">Get a free, no-obligation consultation today.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-white text-[var(--teal-deep)] font-semibold hover:bg-white/90">Request a Quote</Link>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-white/40 hover:bg-white/10 font-semibold">Chat on WhatsApp</a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
