import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { PerfumeCard } from "@/components/site/PerfumeCard";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { MAX_QUANTITY } from "@/lib/cart-logic";
import { formatPrice, getCategory, getPerfume, perfumesByCategory } from "@/lib/perfumes";

export const Route = createFileRoute("/perfumes/$slug")({
  loader: ({ params }) => {
    const perfume = getPerfume(params.slug);
    if (!perfume) throw notFound();
    return { perfume };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Perfume não encontrado — Essência Nobre" }, { name: "robots", content: "noindex" }] };
    }
    const { perfume } = loaderData;
    const title = `${perfume.name} — Essência Nobre`;
    return {
      meta: [
        { title },
        { name: "description", content: `${perfume.short} ${perfume.concentration} ${perfume.volumeMl} ml.` },
        { property: "og:title", content: title },
        { property: "og:description", content: perfume.short },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-6 pb-28 pt-48 text-center">
      <h1 className="text-4xl">Perfume não encontrado</h1>
      <Button asChild variant="luxe" size="lg" className="mt-8">
        <Link to="/perfumes">Ver coleção</Link>
      </Button>
    </div>
  ),
  component: PerfumePage,
});

function PerfumePage() {
  const { perfume } = Route.useLoaderData();
  const { add } = useCart();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const category = getCategory(perfume.category);
  const related = perfumesByCategory(perfume.category).filter((p) => p.slug !== perfume.slug);

  const pyramid = [
    { label: "Notas de topo", notes: perfume.notes.topo },
    { label: "Notas de coração", notes: perfume.notes.coracao },
    { label: "Notas de fundo", notes: perfume.notes.fundo },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 pb-28 pt-32 lg:px-10">
      <Link
        to="/perfumes"
        search={{ categoria: perfume.category }}
        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> {category.name}
      </Link>

      <div className="mt-8 grid gap-14 md:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden bg-card">
          <img
            src={perfume.image}
            alt={`Frasco do perfume ${perfume.name}`}
            width={1024}
            height={1280}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="eyebrow">{category.name} · {perfume.concentration}</p>
          <h1 className="mt-4 text-5xl md:text-6xl">{perfume.name}</h1>
          <p className="mt-4 text-2xl text-gold">{formatPrice(perfume.price)}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{perfume.volumeMl} ml</p>
          <p className="mt-8 leading-relaxed text-muted-foreground">{perfume.description}</p>

          <dl className="mt-10 divide-y divide-border/60 border-y border-border/60">
            {pyramid.map((row) => (
              <div key={row.label} className="grid grid-cols-[10rem_1fr] gap-4 py-4">
                <dt className="text-xs uppercase tracking-[0.2em] text-primary">{row.label}</dt>
                <dd className="text-sm text-foreground">{row.notes.join(" · ")}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <div className="flex h-14 items-center border border-border">
              <button
                type="button"
                aria-label="Diminuir quantidade"
                className="flex h-full w-12 items-center justify-center text-muted-foreground hover:text-primary"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-8 text-center tabular-nums">{qty}</span>
              <button
                type="button"
                aria-label="Aumentar quantidade"
                className="flex h-full w-12 items-center justify-center text-muted-foreground hover:text-primary"
                onClick={() => setQty((q) => Math.min(MAX_QUANTITY, q + 1))}
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <Button
              variant="gold"
              size="xl"
              className="flex-1"
              onClick={() => {
                add(perfume.slug, qty);
                toast.success(`${perfume.name} adicionado à sacola`, {
                  action: { label: "Ver sacola", onClick: () => navigate({ to: "/carrinho" }) },
                });
              }}
            >
              Adicionar à sacola
            </Button>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-32">
          <div className="ornament text-xs">
            <span className="eyebrow">Da mesma família</span>
          </div>
          <div className="mt-14 grid gap-10 sm:grid-cols-2">
            {related.map((p) => (
              <PerfumeCard key={p.slug} perfume={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
