import { professionalSummary, profile, recruiterGlance } from "../data/profile";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" label="01 / ABOUT" title="Backend developer with a production mindset">
      <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-16">
        <div className="space-y-4 text-muted leading-relaxed">
          {professionalSummary.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>

        <div className="rounded-xl border border-border bg-elevated p-6">
          <h3 className="font-mono text-xs font-semibold tracking-wider text-accent">
            AT A GLANCE FOR RECRUITERS
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {recruiterGlance.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-accent">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:underline"
            >
              LinkedIn
            </a>
            {" · "}
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="hover:text-text"
            >
              {profile.phone}
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
}
