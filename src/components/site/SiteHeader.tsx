import { Link } from "@tanstack/react-router";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";

import { useCart } from "@/lib/cart";

const nav = [
  { to: "/perfumes", label: "Perfumes" },
  { to: "/historia", label: "Nossa História" },
] as const;

export function SiteHeader() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link to="/" className="group flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl tracking-wide text-foreground">
            Essência <span className="text-gold">Nobre</span>
          </span>
          <span className="mt-1 text-[0.55rem] uppercase tracking-[0.45em] text-muted-foreground">
            Perfumaria de nicho · São Paulo
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/carrinho"
            aria-label={`Sacola, ${count} itens`}
            className="relative flex h-10 w-10 items-center justify-center text-foreground transition-colors hover:text-primary"
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.4} />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[0.65rem] font-medium text-primary-foreground">
                {count}
              </span>
            )}
          </Link>
          <button
            type="button"
            aria-label="Menu"
            className="flex h-10 w-10 items-center justify-center md:hidden"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" strokeWidth={1.4} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="flex flex-col gap-6 border-t border-border/60 bg-background px-6 py-8 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="font-display text-2xl text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
