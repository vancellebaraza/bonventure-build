import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.jpg";
import { Menu, X, Phone, Mail, Instagram, MessageCircle } from "lucide-react";

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

function Navbar() {
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
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[var(--charcoal)] text-[var(--charcoal-foreground)] text-sm font-semibold hover:bg-[var(--teal-deep)] transition-colors"
          >
            <Phone className="h-4 w-4" /> Get a Quote
          </a>
        </nav>

        <button
          className="lg:hidden p-2 -mr-2 rounded-md hover:bg-secondary"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-in fade-in slide-in-from-top-2 duration-200">
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
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-[var(--charcoal)] text-[var(--charcoal-foreground)] font-semibold"
            >
              <Phone className="h-4 w-4" /> Get a Quote
            </a>
          </nav>
        </div>
      )}
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

function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Build With Bonventure, I'd like a quote.")}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] hover:scale-105 transition-transform"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-40 animate-ping" />
    </a>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingWhatsApp />
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