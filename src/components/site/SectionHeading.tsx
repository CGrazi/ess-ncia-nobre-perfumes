import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-4xl leading-tight md:text-5xl">{title}</h2>
      {children && <p className="mt-5 text-base leading-relaxed text-muted-foreground">{children}</p>}
    </div>
  );
}
