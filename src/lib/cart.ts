// Simple cart state using localStorage
import { Agent } from './agents';

export interface CartItem {
  agentId: string;
  name: string;
  price: number;
  slug: string;
}

const CART_KEY = 'soulclaw-cart';

export function getCart(): CartItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function addToCart(agent: Agent): CartItem[] {
  const cart = getCart();
  if (cart.find(i => i.agentId === agent.id)) return cart;
  const updated = [...cart, { agentId: agent.id, name: agent.name, price: agent.price, slug: agent.slug }];
  localStorage.setItem(CART_KEY, JSON.stringify(updated));
  window.dispatchEvent(new Event('cart-updated'));
  return updated;
}

export function removeFromCart(agentId: string): CartItem[] {
  const cart = getCart().filter(i => i.agentId !== agentId);
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new Event('cart-updated'));
  return cart;
}

export function clearCart(): void {
  localStorage.removeItem(CART_KEY);
  window.dispatchEvent(new Event('cart-updated'));
}

// Derek-approved pricing tiers
const PRICE_TABLE: Record<number, number> = {
  1: 10,
  2: 17,
  3: 22,
  4: 27,
  5: 30,
};

export function getCartTotal(cart: CartItem[]): number {
  const count = cart.length;
  if (count === 0) return 0;
  if (count <= 5) return PRICE_TABLE[count];
  // 6+ = $30 base + $5 per extra
  return 30 + (count - 5) * 5;
}
