import { profile, projects } from "../data/profile";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section id="projects" label="03 / PROJECTS" title="Selected work" alt>
      <p className="mt-4 max-w-2xl text-muted">
        Production-style Spring Boot backends with security, persistence, tests, and API documentation.
      </p>
      <div className="mt-6 flex justify-end">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-accent hover:underline"
        >
          All repositories on GitHub ↗
        </a>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-1">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className="group relative overflow-hidden rounded-xl border border-border bg-bg p-6 transition-all duration-300 hover:border-accent/35 hover:shadow-[0_12px_40px_rgb(0_0_0/0.35)] md:p-8"
          >
            <div
              className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/5 blur-2xl transition-opacity group-hover:opacity-100 opacity-60"
              aria-hidden
            />
            <div className="relative flex flex-wrap items-start justify-between gap-4">
              <div>
                <span className="font-mono text-xs text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-xl font-semibold tracking-tight md:text-2xl">
                  {project.title}
                </h3>
              </div>
              <span className="rounded-full border border-accent/30 bg-accent/5 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wide text-accent">
                {project.badge}
              </span>
            </div>

            <p className="relative mt-4 max-w-3xl text-muted">{project.summary}</p>

            <ul className="relative mt-4 list-disc space-y-2 pl-5 text-sm text-[#c0c8d2]">
              {project.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <div className="relative mt-6 flex flex-wrap items-end justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-border bg-surface px-2 py-0.5 font-mono text-[10px] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer" : undefined}
                    className="inline-flex items-center gap-1 rounded-lg border border-accent/30 px-3 py-1.5 text-sm font-medium text-accent transition-colors hover:bg-accent/10"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
