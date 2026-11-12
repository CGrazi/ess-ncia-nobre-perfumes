import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

import { addToCart, cartCount, cartSubtotal, setQuantity, type CartLine } from "./cart-logic";
import { getPerfume } from "./perfumes";

const STORAGE_KEY = "essencia-nobre-cart";

interface CartContextValue {
  lines: CartLine[];
  count: number;
  subtotal: number;
  add: (slug: string, quantity?: number) => void;
  update: (slug: string, quantity: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartLine[];
        setLines(parsed.filter((l) => getPerfume(l.slug) && l.quantity > 0));
      }
    } catch {
      // ignore corrupted storage
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines, loaded]);

  const add = useCallback((slug: string, quantity = 1) => setLines((l) => addToCart(l, slug, quantity)), []);
  const update = useCallback((slug: string, quantity: number) => setLines((l) => setQuantity(l, slug, quantity)), []);
  const remove = useCallback((slug: string) => setLines((l) => setQuantity(l, slug, 0)), []);
  const clear = useCallback(() => setLines([]), []);

  const value = useMemo<CartContextValue>(
    () => ({
      lines,
      count: cartCount(lines),
      subtotal: cartSubtotal(lines, (s) => getPerfume(s)?.price),
      add,
      update,
      remove,
      clear,
    }),
    [lines, add, update, remove, clear],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
