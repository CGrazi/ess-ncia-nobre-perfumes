import { describe, expect, it } from "vitest";

import { addToCart, cartCount, cartSubtotal, setQuantity } from "@/lib/cart-logic";
import { getPerfume } from "@/lib/perfumes";

const price = (s: string) => getPerfume(s)?.price;

describe("cart", () => {
  it("adding the same perfume twice increases its quantity", () => {
    const lines = addToCart(addToCart([], "rosa-negra"), "rosa-negra");
    expect(lines).toEqual([{ slug: "rosa-negra", quantity: 2 }]);
    expect(cartCount(lines)).toBe(2);
  });

  it("subtotal multiplies each perfume price by its quantity", () => {
    const lines = addToCart(addToCart([], "rosa-negra", 2), "lima-verde");
    expect(cartSubtotal(lines, price)).toBe(820 * 2 + 560);
  });

  it("setting quantity to zero removes the perfume", () => {
    const lines = setQuantity([{ slug: "oud-imperial", quantity: 1 }], "oud-imperial", 0);
    expect(lines).toEqual([]);
  });
});
