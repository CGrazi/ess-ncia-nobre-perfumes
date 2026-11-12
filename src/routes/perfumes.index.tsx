import { createFileRoute, Link } from "@tanstack/react-router";

import { PerfumeCard } from "@/components/site/PerfumeCard";
import { cn } from "@/lib/utils";
import { categories, getCategory, isCategoryId, perfumesByCategory, type CategoryId } from "@/lib/perfumes";

export const Route = createFileRoute("/perfumes/")({
  validateSearch: (search: Record<string, unknown>): { categoria?: CategoryId } =>
    isCategoryId(search["categoria"]) ? { categoria: search["categoria"] } : {},
  head: () => ({
    meta: [
      { title: "Perfumes — Essência Nobre" },
      {
        name: "description",
        content: "Conheça nossos perfumes amadeirados, florais e cítricos. Fragrâncias de nicho criadas em São Paulo.",
      },
      { property: "og:title", content: "Perfumes — Essência Nobre" },
      {
        property: "og:description",
        content: "Perfumes amadeirados, florais e cítricos de nicho, criados em São Paulo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PerfumesPage,
});

function PerfumesPage() {
  const { categoria } = Route.useSearch();
  const list = perfumesByCategory(categoria);
  const active = categoria ? getCategory(categoria) : null;

  return (
    <div className="mx-auto max-w-7xl px-6 pb-28 pt-40 lg:px-10">
      <div className="text-center">
        <p className="eyebrow">A coleção</p>
        <h1 className="mt-4 text-5xl md:text-6xl">{active ? active.name : "Todos os perfumes"}</h1>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          {active
            ? active.description
            : "Nove fragrâncias autorais, divididas em três famílias olfativas. Encontre a sua assinatura."}
        </p>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-2 border-b border-border/60 pb-8">
        <FilterLink label="Todos" active={!categoria} />
        {categories.map((c) => (
          <FilterLink key={c.id} label={c.name} id={c.id} active={categoria === c.id} />
        ))}
      </div>

      <div className="mt-16 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <PerfumeCard key={p.slug} perfume={p} />
        ))}
      </div>
    </div>
  );
}

function FilterLink({ label, id, active }: { label: string; id?: CategoryId; active: boolean }) {
  return (
    <Link
      to="/perfumes"
      search={id ? { categoria: id } : {}}
      className={cn(
        "px-5 py-2.5 text-xs uppercase tracking-[0.25em] transition-luxe",
        active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-primary",
      )}
    >
      {label}
    </Link>
  );
}
