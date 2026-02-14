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

export function getCartTotal(cart: CartItem[]): number {
  const count = cart.length;
  if (count === 0) return 0;
  if (count === 1) return 10;
  if (count === 2) return 15;
  if (count <= 4) return 15 + (count - 2) * 8;
  // 5+ = army pricing
  return 40 + (count - 5) * 7;
}
