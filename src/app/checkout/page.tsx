'use client';

import { useState, useEffect } from 'react';
import { getCart, removeFromCart, getCartTotal, type CartItem } from '@/lib/cart';
import { AGENTS } from '@/lib/agents';

export default function CheckoutPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setCart(getCart());
    const handler = () => setCart(getCart());
    window.addEventListener('cart-updated', handler);
    return () => window.removeEventListener('cart-updated', handler);
  }, []);

  const total = getCartTotal(cart);

  const handleRemove = (agentId: string) => {
    removeFromCart(agentId);
  };

  const handleCheckout = async () => {
    if (!email.trim()) {
      setError('Email is required for delivery');
      return;
    }
    if (cart.length === 0) {
      setError('Cart is empty');
      return;
    }
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), items: cart }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || 'Checkout failed');
      }
    } catch {
      setError('Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <h1 className="font-display text-3xl font-bold tracking-tight uppercase mb-4">Cart is Empty</h1>
        <p className="text-[#A3A3A3] mb-8">Pick some agents from the catalog first.</p>
        <a href="/catalog" className="bg-amber-500 text-black px-8 py-3 rounded-lg font-bold hover:bg-amber-400 transition-colors">
          Browse Catalog
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="font-display text-3xl font-bold tracking-tight uppercase mb-8">Checkout</h1>

      {/* Cart Items */}
      <div className="space-y-3 mb-8">
        {cart.map((item) => {
          const agent = AGENTS.find(a => a.id === item.agentId);
          return (
            <div key={item.agentId} className="bg-[#111111] border border-[#262626] rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                {agent && (
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold shrink-0"
                    style={{ backgroundColor: agent.avatarColor + '22', color: agent.avatarColor, border: `2px solid ${agent.avatarColor}44` }}
                  >
                    {agent.initials}
                  </div>
                )}
                <div>
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-xs text-[#737373]">Agent Personality Kit</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-amber-500">${item.price}</span>
                <button
                  onClick={() => handleRemove(item.agentId)}
                  className="text-[#737373] hover:text-red-400 text-sm transition-colors"
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pricing Breakdown */}
      <div className="bg-[#111111] border border-[#262626] rounded-xl p-6 mb-8">
        <div className="flex justify-between text-sm text-[#A3A3A3] mb-2">
          <span>{cart.length} agent{cart.length !== 1 ? 's' : ''}</span>
          <span>${cart.length * 10}</span>
        </div>
        {cart.length >= 2 && (
          <div className="flex justify-between text-sm text-emerald-400 mb-2">
            <span>Bundle discount</span>
            <span>-${(cart.length * 10) - total}</span>
          </div>
        )}
        <div className="border-t border-[#262626] my-3" />
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span className="font-mono text-xl text-amber-500">${total}</span>
        </div>
      </div>

      {/* Email */}
      <div className="mb-6">
        <label className="block text-sm font-semibold mb-2">Email (for delivery)</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full bg-[#111111] border border-[#262626] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors"
        />
      </div>

      {error && (
        <div className="text-red-400 text-sm mb-4">{error}</div>
      )}

      {/* Pay Button */}
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="w-full bg-amber-500 text-black py-4 rounded-lg font-bold text-base hover:bg-amber-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Processing...' : `Pay $${total}`}
      </button>

      <p className="text-xs text-[#737373] text-center mt-4">
        Secure checkout powered by Stripe. You&apos;ll receive a download link after payment.
      </p>
    </div>
  );
}
