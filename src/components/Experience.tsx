import { experience } from "../data/profile";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" label="04 / EXPERIENCE" title="Professional experience" alt>
      <div className="mt-10 rounded-xl border border-border bg-bg p-6 md:p-8">
        <div className="flex flex-col gap-4 border-b border-border pb-6 md:flex-row md:items-start md:justify-between">
          <div>
            <h3 className="text-xl font-semibold">{experience.role}</h3>
            <p className="mt-1 text-muted">
              {experience.company} · {experience.location}
            </p>
          </div>
          <time className="font-mono text-sm text-muted whitespace-nowrap">{experience.period}</time>
        </div>

        <ul className="mt-6 list-disc space-y-3 pl-5 text-muted">
          {experience.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>

      <blockquote className="mt-12 border-l-2 border-accent pl-6">
        <p className="text-lg leading-relaxed md:text-xl">
          “I don’t just want to know a technology. I want to build with it, break it, debug it, and
          understand why it works.”
        </p>
        <footer className="mt-3 text-sm text-muted">— Ronik</footer>
      </blockquote>
    </Section>
  );
}
