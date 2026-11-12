import { Link } from "@tanstack/react-router";

import { formatPrice, getCategory, type Perfume } from "@/lib/perfumes";

export function PerfumeCard({ perfume }: { perfume: Perfume }) {
  return (
    <Link to="/perfumes/$slug" params={{ slug: perfume.slug }} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-card">
        <img
          src={perfume.image}
          alt={`Frasco do perfume ${perfume.name}`}
          loading="lazy"
          width={1024}
          height={1280}
          className="h-full w-full object-cover transition-luxe group-hover:scale-105"
        />
        <div className="absolute inset-0 border border-primary/0 transition-luxe group-hover:border-primary/40" />
        <span className="absolute left-4 top-4 bg-background/80 px-3 py-1 text-[0.6rem] uppercase tracking-[0.25em] text-primary backdrop-blur">
          {getCategory(perfume.category).name}
        </span>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl text-foreground transition-colors group-hover:text-primary">{perfume.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{perfume.short}</p>
        </div>
        <p className="shrink-0 pt-1 text-sm text-primary">{formatPrice(perfume.price)}</p>
      </div>
    </Link>
  );
}
