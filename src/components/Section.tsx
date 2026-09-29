import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

type Props = {
  id: string;
  label: string;
  title?: string;
  children: ReactNode;
  alt?: boolean;
  className?: string;
};

export function Section({ id, label, title, children, alt, className = "" }: Props) {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      className={`scroll-mt-24 py-20 md:py-28 ${alt ? "border-y border-border bg-surface" : ""} ${className}`}
    >
      <div className={`reveal mx-auto max-w-6xl px-5 ${visible ? "visible" : ""}`}>
        <p className="font-mono text-xs font-semibold tracking-[0.14em] text-accent">{label}</p>
        {title && (
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
        )}
        {children}
      </div>
    </section>
  );
}
