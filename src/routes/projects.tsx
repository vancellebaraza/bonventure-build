import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader, FadeIn } from "@/components/SiteLayout";
import p1 from "@/assets/project-modern-house.jpg";
import p2 from "@/assets/project-bungalow.jpg";
import p3 from "@/assets/project-perimeter-wall.jpg";
import p4 from "@/assets/project-electric-fence.jpg";
import p5 from "@/assets/project-floor-plan.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Build With Bonventure" },
      { name: "description", content: "Selected civil, structural and construction projects delivered by Build With Bonventure across Kenya." },
      { property: "og:title", content: "Projects & Portfolio" },
      { property: "og:description", content: "A portfolio of engineering and construction works." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

const PROJECTS = [
  { img: p1, title: "Modern Residence", cat: "Building Works", desc: "Contemporary 3-bedroom with feature stone cladding." },
  { img: p2, title: "Bungalow Build", cat: "Structural", desc: "Reinforced concrete frame with art-deco facade detail." },
  { img: p3, title: "Precast Perimeter Wall", cat: "Civil Works", desc: "Modular precast wall installation for a commercial site." },
  { img: p4, title: "Electric Fence & Razor Wire", cat: "Security", desc: "Perimeter security with electric fence and razor coil." },
  { img: p5, title: "Architectural Drawings", cat: "Drawings", desc: "Floor plans and structural drawings ready for approval." },
];

function Projects() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Portfolio" title="Selected projects" subtitle="A snapshot of recent civil, structural, security and construction work." />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {PROJECTS.map((p, i) => (
            <FadeIn key={p.title} delay={(i % 4) * 80}>
              <article className="mb-5 break-inside-avoid group rounded-xl overflow-hidden bg-card border border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all">
                <div className="overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" className="w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-5">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-[var(--teal-deep)] font-semibold">{p.cat}</div>
                  <h2 className="mt-1.5 font-display font-semibold text-lg">{p.title}</h2>
                  <p className="mt-1.5 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}