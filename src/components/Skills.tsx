import { useState } from "react";
import { skillGroups } from "../data/profile";
import { Section } from "./Section";

export function Skills() {
  const [active, setActive] = useState(skillGroups[0].name);

  const group = skillGroups.find((g) => g.name === active) ?? skillGroups[0];

  return (
    <Section id="skills" label="02 / SKILLS" title="Technical skills">
      <div className="mt-10 flex flex-wrap gap-2">
        {skillGroups.map((g) => (
          <button
            key={g.name}
            type="button"
            onClick={() => setActive(g.name)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
              active === g.name
                ? "border-accent bg-accent/10 text-accent"
                : "border-border text-muted hover:border-border hover:text-text"
            }`}
          >
            {g.name}
          </button>
        ))}
      </div>

      <div
        key={group.name}
        className="mt-8 rounded-xl border border-border bg-elevated p-6 md:p-8"
        role="tabpanel"
        aria-label={`${group.name} skills`}
      >
        <h3 className="font-mono text-sm text-muted">{group.name}</h3>
        <ul className="mt-4 flex flex-wrap gap-2">
          {group.skills.map((skill) => (
            <li
              key={skill}
              className="rounded-md border border-border bg-bg px-3 py-1.5 text-sm font-medium"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-8 text-sm text-muted">
        Aligned with resume: Java/Spring backend, Oracle & PostgreSQL, JWT security, testing with
        JUnit/Mockito, and tooling including Git, Maven, Docker and GitHub Actions.
      </p>
    </Section>
  );
}
