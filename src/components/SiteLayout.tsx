import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.jpg";
import { Menu, X, Phone, Mail, Instagram } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;

export const WHATSAPP_NUMBER = "254758477375";
export const EMAIL = "buildwithbonventure@gmail.com";
export const INSTAGRAM = "https://www.instagram.com/build_with_bonventure";
export const TIKTOK = "https://www.tiktok.com/@build_with_bonventure";

/** Authentic WhatsApp glyph (official mark, simplified path). */
export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="currentColor">
      <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.78 3.41 4.74 4.426.616.33 2.123 1.044 2.808 1.044.515 0 2.06-.387 2.06-1.823 0-.115 0-.252-.043-.36-.115-.288-1.964-1.21-2.336-1.21Zm-2.95 7.376c-1.747.024-3.45-.493-4.89-1.467l-3.41 1.097 1.116-3.302a8.617 8.617 0 0 1-1.546-4.97c0-4.798 3.93-8.7 8.73-8.7 4.799 0 8.7 3.901 8.7 8.7 0 4.79-3.901 8.642-8.7 8.642Zm0-19.066c-5.74 0-10.424 4.683-10.424 10.424a10.31 10.31 0 0 0 1.523 5.39L5 27l5.85-1.553a10.395 10.395 0 0 0 5.31 1.453h.014c5.74 0 10.46-4.692 10.46-10.433 0-2.78-1.106-5.397-3.084-7.368a10.36 10.36 0 0 0-7.376-3.057Z" />
    </svg>
  );
}

export function TikTokIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.83a8.16 8.16 0 0 0 4.77 1.52V6.89a4.85 4.85 0 0 1-1.84-.2Z"/>
    </svg>
  );
}

function Navbar({ onOpenWhatsApp }: { onOpenWhatsApp: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-[var(--shadow-soft)]"
          : "bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src={logo} alt="Build With Bonventure logo" className="h-10 w-10 rounded-md object-cover" />
          <div className="leading-tight">
            <div className="font-display font-bold text-[15px] tracking-tight">Build With Bonventure</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--teal-deep)] font-medium">Engineering Trust</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3.5 py-2 text-sm font-medium text-foreground/75 hover:text-foreground rounded-md transition-colors"
              activeProps={{ className: "px-3.5 py-2 text-sm font-semibold text-[var(--teal-deep)] rounded-md" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <button
            onClick={onOpenWhatsApp}
            className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[var(--charcoal)] text-[var(--charcoal-foreground)] text-sm font-semibold hover:bg-[var(--teal-deep)] transition-colors"
          >
            <Phone className="h-4 w-4" /> Get a Quote
          </button>
        </nav>

        <button
          className="lg:hidden p-2 -mr-2 rounded-md hover:bg-secondary"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden border-border bg-background transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] grid ${
          open ? "grid-rows-[1fr] opacity-100 border-t" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <nav className="px-5 py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-md text-foreground/80 hover:bg-secondary font-medium"
                activeProps={{ className: "px-3 py-3 rounded-md bg-secondary text-[var(--teal-deep)] font-semibold" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <button
              onClick={() => { setOpen(false); onOpenWhatsApp(); }}
              className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-[var(--charcoal)] text-[var(--charcoal-foreground)] font-semibold"
            >
              <Phone className="h-4 w-4" /> Get a Quote
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-24 bg-[var(--charcoal)] text-[var(--charcoal-foreground)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Build With Bonventure" className="h-12 w-12 rounded-md object-cover" />
            <div>
              <div className="font-display font-bold">Build With Bonventure</div>
              <div className="text-xs uppercase tracking-[0.2em] text-[var(--teal)]">Engineering Trust</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/70 max-w-md">
            Professional civil & structural engineering, construction, and maintenance services delivered with precision across Kenya.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-[var(--teal)] transition-colors">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-[var(--teal)]" /> 0758 477 375</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-[var(--teal)]" /> {EMAIL}</li>
            <li className="flex items-center gap-2"><Instagram className="h-4 w-4 text-[var(--teal)]" />
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="hover:text-[var(--teal)]">@build_with_bonventure</a>
            </li>
            <li className="flex items-center gap-2 opacity-60"><span className="h-4 w-4 grid place-items-center text-[10px] font-bold">in</span> LinkedIn — coming soon</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-5 text-xs text-white/50 flex flex-col sm:flex-row gap-2 justify-between">
          <span>© {new Date().getFullYear()} Build With Bonventure. All rights reserved.</span>
          <span>Civil & Structural Engineering • Kenya</span>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_-6px_rgba(37,211,102,0.55)] hover:scale-105 transition-transform"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </button>
  );
}

const SERVICES = [
  "Civil & Structural Engineering","Building Works","Electrical & Plumbing","Interior Designs","Landscaping","CCTV & Electric Fence","Architectural & Structural Drawings","Tank Cleaning","Repairs & Maintenance","Other",
];

export function WhatsAppModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({ name: "", phone: "", service: SERVICES[0], location: "", message: "" });

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

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
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6 transition-opacity duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      <button onClick={onClose} aria-label="Close" className="absolute inset-0 bg-black/55 backdrop-blur-sm" />
      <div
        className={`relative w-full sm:max-w-lg bg-card text-foreground rounded-t-2xl sm:rounded-2xl shadow-2xl border border-border transition-all duration-300 ${
          open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <div className="flex items-center gap-3 px-6 pt-5 pb-3 border-b border-border">
          <span className="grid place-items-center h-9 w-9 rounded-full bg-[#25D366] text-white"><WhatsAppIcon className="h-5 w-5" /></span>
          <div>
            <div className="font-display font-bold">Chat on WhatsApp</div>
            <div className="text-xs text-muted-foreground">Fill in once — we open WhatsApp with your message ready.</div>
          </div>
          <button onClick={onClose} className="ml-auto p-1.5 rounded-md hover:bg-secondary" aria-label="Close">
            <X className="h-5 w-5" />
          </button>
        </div>
        <form onSubmit={onSubmit} className="px-6 py-5 grid sm:grid-cols-2 gap-4 max-h-[75vh] overflow-y-auto">
          <label className="block">
            <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">Full name</span>
            <input required maxLength={100} value={form.name} onChange={update("name")} className="bwb-mod-input" placeholder="Your name" />
          </label>
          <label className="block">
            <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">Phone</span>
            <input required maxLength={20} type="tel" value={form.phone} onChange={update("phone")} className="bwb-mod-input" placeholder="07XX XXX XXX" />
          </label>
          <label className="block">
            <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">Service</span>
            <select required value={form.service} onChange={update("service")} className="bwb-mod-input">
              {SERVICES.map((s) => <option key={s}>{s}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">Location</span>
            <input required maxLength={120} value={form.location} onChange={update("location")} className="bwb-mod-input" placeholder="Town / county" />
          </label>
          <label className="block sm:col-span-2">
            <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">Message</span>
            <textarea required maxLength={1500} rows={4} value={form.message} onChange={update("message")} className="bwb-mod-input resize-none" placeholder="Tell us about your project..." />
          </label>
          <button type="submit" className="sm:col-span-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-[#25D366] hover:bg-[#1ebe5b] text-white font-semibold transition-colors">
            <WhatsAppIcon className="h-5 w-5" /> Open WhatsApp
          </button>
        </form>
        <style>{`
          .bwb-mod-input { margin-top: .4rem; width: 100%; border: 1px solid var(--border); background: var(--background); color: var(--foreground); border-radius: 0.5rem; padding: 0.65rem 0.85rem; font-size: 0.95rem; outline: none; transition: border-color .2s, box-shadow .2s; }
          .bwb-mod-input:focus { border-color: var(--teal); box-shadow: 0 0 0 3px color-mix(in oklab, var(--teal) 20%, transparent); }
        `}</style>
      </div>
    </div>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const [waOpen, setWaOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onOpenWhatsApp={() => setWaOpen(true)} />
      <main key={pathname} className="flex-1 page-transition">
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp onClick={() => setWaOpen(true)} />
      <WhatsAppModal open={waOpen} onClose={() => setWaOpen(false)} />
    </div>
  );
}

export function PageHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[var(--charcoal)] text-white">
      <span className="bg-blob bg-[var(--teal)] h-72 w-72 -top-20 -left-10" />
      <span className="bg-blob bg-white h-64 w-64 -bottom-24 right-0" style={{ opacity: 0.06 }} />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-24">
        {eyebrow && (
          <div className="text-xs uppercase tracking-[0.25em] text-[var(--teal)] font-semibold mb-3">{eyebrow}</div>
        )}
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold max-w-3xl">{title}</h1>
        {subtitle && <p className="mt-5 text-white/70 text-lg max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}

export function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  // Lightweight fade-in via CSS for performance
  return (
    <div
      className={`animate-in fade-in slide-in-from-bottom-3 duration-700 ${className}`}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "both" }}
    >
      {children}
    </div>
  );
}