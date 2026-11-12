export interface CartLine {
  slug: string;
  quantity: number;
}

export const MAX_QUANTITY = 10;

export function addToCart(lines: CartLine[], slug: string, quantity = 1): CartLine[] {
  const existing = lines.find((l) => l.slug === slug);
  if (existing) {
    return lines.map((l) =>
      l.slug === slug ? { ...l, quantity: Math.min(MAX_QUANTITY, l.quantity + quantity) } : l,
    );
  }
  return [...lines, { slug, quantity: Math.min(MAX_QUANTITY, Math.max(1, quantity)) }];
}

export function setQuantity(lines: CartLine[], slug: string, quantity: number): CartLine[] {
  if (quantity <= 0) return lines.filter((l) => l.slug !== slug);
  return lines.map((l) => (l.slug === slug ? { ...l, quantity: Math.min(MAX_QUANTITY, quantity) } : l));
}

export function cartCount(lines: CartLine[]): number {
  return lines.reduce((sum, l) => sum + l.quantity, 0);
}

export function cartSubtotal(lines: CartLine[], priceOf: (slug: string) => number | undefined): number {
  return lines.reduce((sum, l) => sum + (priceOf(l.slug) ?? 0) * l.quantity, 0);
}
