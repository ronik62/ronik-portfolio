import { education } from "../data/profile";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education" label="05 / EDUCATION" title="Education" alt>
      <div className="mt-10 rounded-xl border border-border bg-bg p-6 md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <h3 className="text-xl font-semibold">{education.degree}</h3>
            <p className="mt-1 text-muted">{education.school}</p>
            <p className="mt-3 inline-flex rounded-full border border-accent/25 bg-accent/5 px-3 py-1 text-sm font-medium text-accent">
              {education.detail}
            </p>
          </div>
          <time className="font-mono text-sm text-muted whitespace-nowrap">{education.period}</time>
        </div>
      </div>
    </Section>
  );
}
