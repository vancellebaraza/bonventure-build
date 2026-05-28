import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader, FadeIn, WHATSAPP_NUMBER, EMAIL, INSTAGRAM } from "@/components/SiteLayout";
import { Phone, Mail, Instagram, MapPin, MessageCircle, Music2 } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Build With Bonventure" },
      { name: "description", content: "Talk to Build With Bonventure about your construction or engineering project. Phone, WhatsApp, email and social channels." },
      { property: "og:title", content: "Contact Build With Bonventure" },
      { property: "og:description", content: "Get in touch for quotes, consultations and site visits." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const SERVICES = [
  "Civil & Structural Engineering","Building Works","Electrical & Plumbing","Interior Designs","Landscaping","CCTV & Electric Fence","Architectural & Structural Drawings","Tank Cleaning","Repairs & Maintenance","Other",
];

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", service: SERVICES[0], location: "", message: "" });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      "*New Enquiry — Build With Bonventure*",
      "",
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      `*Service:* ${form.service}`,
      `*Location:* ${form.location}`,
      `*Message:* ${form.message}`,
    ].join("\n");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`, "_blank");
  };

  return (
    <SiteLayout>
      <PageHeader eyebrow="Contact" title="Let's build something dependable." subtitle="Tell us about your project and we'll get back within one business day." />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 grid lg:grid-cols-5 gap-10">
        <FadeIn className="lg:col-span-2">
          <h2 className="font-display text-2xl font-bold">Reach us directly</h2>
          <p className="mt-2 text-muted-foreground">Prefer to chat? WhatsApp is fastest.</p>

          <ul className="mt-8 space-y-5">
            <li className="flex items-start gap-4">
              <span className="h-10 w-10 rounded-lg bg-[var(--teal)]/10 grid place-items-center text-[var(--teal-deep)]"><Phone className="h-5 w-5" /></span>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">Phone / WhatsApp</div>
                <a className="font-semibold" href={`tel:+${WHATSAPP_NUMBER}`}>0758 477 375</a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="h-10 w-10 rounded-lg bg-[var(--teal)]/10 grid place-items-center text-[var(--teal-deep)]"><Mail className="h-5 w-5" /></span>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">Email</div>
                <a className="font-semibold break-all" href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="h-10 w-10 rounded-lg bg-[var(--teal)]/10 grid place-items-center text-[var(--teal-deep)]"><MapPin className="h-5 w-5" /></span>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">Service Area</div>
                <div className="font-semibold">Kenya — nationwide</div>
              </div>
            </li>
          </ul>

          <div className="mt-8">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">Follow</div>
            <div className="mt-3 flex gap-3">
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram"
                 className="h-11 w-11 rounded-lg border border-border grid place-items-center hover:bg-[var(--teal)] hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@build_with_bonventure" target="_blank" rel="noreferrer" aria-label="TikTok"
                 className="h-11 w-11 rounded-lg border border-border grid place-items-center hover:bg-[var(--teal)] hover:text-white transition-colors">
                <Music2 className="h-5 w-5" />
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" aria-label="WhatsApp"
                 className="h-11 w-11 rounded-lg border border-border grid place-items-center hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={120} className="lg:col-span-3">
          <form onSubmit={onSubmit} className="rounded-2xl bg-card border border-border p-6 sm:p-8 shadow-[var(--shadow-soft)]">
            <h2 className="font-display text-2xl font-bold">Request a quote</h2>
            <p className="mt-1 text-sm text-muted-foreground">Submitting opens WhatsApp with your details prefilled.</p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Field label="Full name">
                <input aria-label="Full name" required maxLength={100} value={form.name} onChange={update("name")} className="bwb-input" placeholder="Your name" />
              </Field>
              <Field label="Phone number">
                <input aria-label="Phone number" required maxLength={20} type="tel" value={form.phone} onChange={update("phone")} className="bwb-input" placeholder="07XX XXX XXX" />
              </Field>
              <Field label="Service needed">
                <select aria-label="Service needed" required value={form.service} onChange={update("service")} className="bwb-input">
                  {SERVICES.map((s) => <option key={s}>{s}</option>)}
                </select>
              </Field>
              <Field label="Location">
                <input aria-label="Location" required maxLength={120} value={form.location} onChange={update("location")} className="bwb-input" placeholder="Town / county" />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Message">
                  <textarea aria-label="Message" required maxLength={1500} rows={5} value={form.message} onChange={update("message")} className="bwb-input resize-none" placeholder="Tell us about your project..." />
                </Field>
              </div>
            </div>

            <button type="submit" className="mt-6 inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[var(--teal)] hover:bg-[var(--teal-deep)] text-white font-semibold transition-colors w-full sm:w-auto justify-center">
              <MessageCircle className="h-4 w-4" /> Send via WhatsApp
            </button>
          </form>
        </FadeIn>
      </section>

      <style>{`
        .bwb-input { width: 100%; border: 1px solid var(--border); background: var(--background); color: var(--foreground); border-radius: 0.5rem; padding: 0.65rem 0.85rem; font-size: 0.95rem; outline: none; transition: border-color .2s, box-shadow .2s; }
        .bwb-input:focus { border-color: var(--teal); box-shadow: 0 0 0 3px color-mix(in oklab, var(--teal) 20%, transparent); }
      `}</style>
    </SiteLayout>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground font-semibold">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}