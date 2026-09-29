import { navLinks, profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-mono text-lg font-semibold">
              RK<span className="text-accent">.</span>
            </p>
            <p className="mt-2 max-w-xs text-sm text-muted">
              {profile.title} · {profile.location}
            </p>
            <p className="mt-1 text-sm text-muted">{profile.availability}</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm" aria-label="Footer">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} className="text-muted hover:text-accent">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-2 text-sm">
            <a href={`mailto:${profile.email}`} className="text-muted hover:text-text">
              {profile.email}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-muted hover:text-text">
              LinkedIn ↗
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-muted hover:text-text">
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span className="font-mono">Java · Spring Boot · PostgreSQL · Spring AI</span>
        </div>
      </div>
    </footer>
  );
}
