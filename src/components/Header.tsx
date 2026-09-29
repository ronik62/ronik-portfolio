import { useEffect, useState } from "react";
import { navLinks, profile } from "../data/profile";
import { useActiveSection } from "../hooks/useActiveSection";

const sectionIds = navLinks.map((l) => l.id);

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const linkClass = (id: string) =>
    `text-sm transition-colors ${
      active === id ? "font-medium text-accent" : "text-muted hover:text-text"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-bg/90 shadow-[0_8px_30px_rgb(0_0_0/0.25)] backdrop-blur-md" : "bg-bg/40 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5">
        <a href="#top" className="font-mono text-lg font-semibold tracking-tight" onClick={closeMenu}>
          RK<span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} className={linkClass(link.id)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={profile.resumeHref}
            download="Ronik_Kumbhar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-accent/50 hover:text-accent"
          >
            Resume
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
          >
            Hire me
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border md:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-text transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`block h-0.5 w-5 bg-text transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span
              className={`block h-0.5 w-5 bg-text transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 top-[72px] z-40 bg-bg/95 backdrop-blur-sm md:hidden">
          <nav className="flex flex-col gap-1 p-5" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`rounded-lg px-4 py-3 text-lg font-medium ${
                  active === link.id ? "bg-accent/10 text-accent" : "hover:bg-elevated"
                }`}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.resumeHref}
              download="Ronik_Kumbhar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 rounded-lg border border-border px-4 py-3 text-center font-medium"
              onClick={closeMenu}
            >
              Download resume
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-lg bg-accent px-4 py-3 text-center font-semibold text-bg"
              onClick={closeMenu}
            >
              Email me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
