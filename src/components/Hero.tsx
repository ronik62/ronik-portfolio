import { highlights, profile, terminalLines } from "../data/profile";
import { useTerminal } from "../hooks/useTerminal";

export function Hero() {
  const { display, currentPrompt, currentOutput, phase, done, lineIndex } =
    useTerminal(terminalLines);

  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="pointer-events-none absolute inset-0 grid-bg" aria-hidden />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[600px] -translate-x-1/2 rounded-full bg-accent-glow blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 text-xs font-medium text-accent font-mono tracking-wide">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            {profile.availability}
          </p>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
            {profile.name}
            <span className="mt-2 block text-2xl font-semibold text-muted sm:text-3xl">
              {profile.title}
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-lg text-muted leading-relaxed">
            Java backend developer at TCS building Spring Boot APIs with JPA, JWT, PostgreSQL and
            Oracle—and shipping AI-powered learning features with Spring AI. Production RMS debugging
            keeps my incident and SQL skills sharp.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
            >
              View projects
            </a>
            <a
              href={profile.resumeHref}
              download="Ronik_Kumbhar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent/40"
            >
              Download resume
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:text-text"
            >
              GitHub ↗
            </a>
          </div>

          <dl className="mt-12 grid gap-6 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.label} className="border-l-2 border-accent/40 pl-4">
                <dt className="text-xs font-mono uppercase tracking-wider text-muted">{item.label}</dt>
                <dd className="mt-1 text-lg font-semibold">{item.value}</dd>
                <dd className="text-xs text-muted">{item.detail}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 text-sm text-muted">
            <span className="font-medium text-text">{profile.location}</span>
            {" · "}
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="hover:text-text"
            >
              {profile.phone}
            </a>
            {" · "}
            <a
              href={`mailto:${profile.email}`}
              className="underline decoration-accent/40 underline-offset-2 hover:text-accent"
            >
              {profile.email}
            </a>
          </p>
        </div>

        <div className="terminal-float lg:justify-self-end w-full max-w-md lg:max-w-none">
          <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-[0_24px_80px_rgb(0_0_0/0.45)]">
            <div className="flex h-10 items-center gap-2 border-b border-border px-4">
              <span className="h-2.5 w-2.5 rounded-full bg-[#38414d]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#38414d]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#38414d]" />
              <span className="ml-2 font-mono text-[11px] text-muted">ronik@dev:~</span>
            </div>
            <div className="min-h-[280px] p-5 font-mono text-[13px] leading-relaxed text-[#c5cdd8]">
              {display.map((line) => (
                <div key={line.prompt} className="mb-3">
                  <p>
                    <span className="text-accent">$</span> {line.prompt}
                  </p>
                  <p className="pl-4 text-muted">{line.output}</p>
                </div>
              ))}
              {lineIndex < terminalLines.length && (
                <div className="mb-3">
                  <p>
                    <span className="text-accent">$</span> {currentPrompt}
                    {phase === "prompt" && <span className="cursor-blink text-accent">▌</span>}
                  </p>
                  {phase === "output" && (
                    <p className="pl-4 text-muted">
                      {currentOutput}
                      <span className="cursor-blink text-accent">▌</span>
                    </p>
                  )}
                </div>
              )}
              {done && (
                <p>
                  <span className="text-accent">$</span>{" "}
                  <span className="cursor-blink text-accent">▌</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
