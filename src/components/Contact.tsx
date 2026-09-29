import { useState } from "react";
import { profile } from "../data/profile";
import { Section } from "./Section";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const phoneHref = `tel:${profile.phone.replace(/\s/g, "")}`;

  return (
    <Section id="contact" label="06 / CONTACT" title="Let’s connect">
      <p className="mt-4 max-w-xl text-muted">
        I’m interested in Java Backend, Java Developer, and Software Engineer roles. Reach me by
        email or phone, or connect on LinkedIn and GitHub.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <a
          href={`mailto:${profile.email}?subject=Opportunity%20%E2%80%94%20Ronik%20Kumbhar`}
          className="flex flex-col rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/40"
        >
          <span className="font-mono text-xs text-accent">Email</span>
          <span className="mt-2 font-medium break-all">{profile.email}</span>
          <span className="mt-2 text-sm text-muted">Preferred for recruiters</span>
        </a>

        <a
          href={phoneHref}
          className="flex flex-col rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/40"
        >
          <span className="font-mono text-xs text-accent">Phone</span>
          <span className="mt-2 font-medium">{profile.phone}</span>
          <span className="mt-2 text-sm text-muted">Pune, India (IST)</span>
        </a>

        <button
          type="button"
          onClick={copyEmail}
          className="flex flex-col rounded-xl border border-border bg-surface p-5 text-left transition-colors hover:border-accent/40"
        >
          <span className="font-mono text-xs text-accent">Quick copy</span>
          <span className="mt-2 font-medium">{copied ? "Copied to clipboard ✓" : "Copy email address"}</span>
          <span className="mt-2 text-sm text-muted">For ATS or email client</span>
        </button>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/40"
        >
          <span className="font-mono text-xs text-accent">LinkedIn</span>
          <span className="mt-2 font-medium break-all text-sm">linkedin.com/in/ronik-kumbhar-95236218a</span>
          <span className="mt-2 text-sm text-muted">View profile ↗</span>
        </a>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={profile.resumeHref}
          download="Ronik_Kumbhar_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-bg"
        >
          Download resume (PDF)
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium"
        >
          GitHub ↗
        </a>
        <a
          href={profile.portfolio}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium"
        >
          Portfolio ↗
        </a>
      </div>
    </Section>
  );
}
