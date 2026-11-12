import { Link } from "@tanstack/react-router";

import { categories } from "@/lib/perfumes";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4 lg:px-10">
        <div className="md:col-span-2">
          <p className="font-display text-3xl">
            Essência <span className="text-gold">Nobre</span>
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Perfumaria de nicho criada em São Paulo. Fragrâncias autorais, produzidas em pequenos lotes com matérias-primas raras.
          </p>
        </div>
        <div>
          <p className="eyebrow">Coleções</p>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {categories.map((c) => (
              <li key={c.id}>
                <Link to="/perfumes" search={{ categoria: c.id }} className="transition-colors hover:text-primary">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Maison</p>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/historia" className="transition-colors hover:text-primary">Nossa História</Link>
            </li>
            <li>
              <Link to="/carrinho" className="transition-colors hover:text-primary">Sacola</Link>
            </li>
            <li>São Paulo · Brasil</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
        © {new Date().getFullYear()} Essência Nobre
      </div>
    </footer>
  );
}
