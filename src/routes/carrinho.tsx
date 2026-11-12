import { createFileRoute, Link } from "@tanstack/react-router";
import { Lock, Minus, Plus, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { MAX_QUANTITY } from "@/lib/cart-logic";
import { formatPrice, getPerfume } from "@/lib/perfumes";

export const Route = createFileRoute("/carrinho")({
  head: () => ({
    meta: [
      { title: "Sua sacola — Essência Nobre" },
      { name: "description", content: "Revise os perfumes escolhidos e finalize seu pedido na Essência Nobre." },
      { property: "og:title", content: "Sua sacola — Essência Nobre" },
      { property: "og:description", content: "Revise os perfumes escolhidos e finalize seu pedido." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { lines, subtotal, update, remove } = useCart();

  if (lines.length === 0) {
    return (
      <div className="mx-auto max-w-xl px-6 pb-28 pt-48 text-center">
        <p className="eyebrow">Sacola</p>
        <h1 className="mt-4 text-5xl">Sua sacola está vazia</h1>
        <p className="mt-5 text-muted-foreground">Descubra nossas fragrâncias e encontre a sua assinatura.</p>
        <Button asChild variant="gold" size="xl" className="mt-10">
          <Link to="/perfumes">Explorar perfumes</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-6 pb-28 pt-40 lg:px-10">
      <p className="eyebrow">Sacola</p>
      <h1 className="mt-4 text-5xl">Seu pedido</h1>

      <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_22rem]">
        <ul className="divide-y divide-border/60 border-y border-border/60">
          {lines.map((line) => {
            const p = getPerfume(line.slug);
            if (!p) return null;
            return (
              <li key={line.slug} className="flex gap-6 py-6">
                <Link to="/perfumes/$slug" params={{ slug: p.slug }} className="shrink-0">
                  <img src={p.image} alt={p.name} loading="lazy" width={1024} height={1280} className="h-32 w-24 object-cover" />
                </Link>
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Link to="/perfumes/$slug" params={{ slug: p.slug }} className="font-display text-2xl hover:text-primary">
                        {p.name}
                      </Link>
                      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        {p.concentration} · {p.volumeMl} ml
                      </p>
                    </div>
                    <button
                      type="button"
                      aria-label={`Remover ${p.name}`}
                      onClick={() => remove(p.slug)}
                      className="text-muted-foreground hover:text-destructive"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-4">
                    <div className="flex h-10 items-center border border-border">
                      <button
                        type="button"
                        aria-label="Diminuir quantidade"
                        className="flex h-full w-10 items-center justify-center text-muted-foreground hover:text-primary"
                        onClick={() => update(p.slug, line.quantity - 1)}
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-6 text-center text-sm tabular-nums">{line.quantity}</span>
                      <button
                        type="button"
                        aria-label="Aumentar quantidade"
                        disabled={line.quantity >= MAX_QUANTITY}
                        className="flex h-full w-10 items-center justify-center text-muted-foreground hover:text-primary disabled:opacity-30"
                        onClick={() => update(p.slug, line.quantity + 1)}
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <p className="text-primary">{formatPrice(p.price * line.quantity)}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <aside className="h-fit border border-border/60 bg-card p-8">
          <h2 className="text-2xl">Resumo</h2>
          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Subtotal</dt>
              <dd>{formatPrice(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Frete</dt>
              <dd className="text-muted-foreground">Calculado no pagamento</dd>
            </div>
          </dl>
          <div className="mt-6 flex justify-between border-t border-border/60 pt-6">
            <span className="text-xs uppercase tracking-[0.2em]">Total</span>
            <span className="font-display text-2xl text-gold">{formatPrice(subtotal)}</span>
          </div>
          <Button variant="gold" size="xl" className="mt-8 w-full" disabled>
            <Lock /> Finalizar pagamento
          </Button>
          <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
            O pagamento online está sendo ativado e estará disponível em breve.
          </p>
        </aside>
      </div>
    </div>
  );
}
