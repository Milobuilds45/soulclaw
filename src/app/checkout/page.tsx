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
      setError('We need your email to send the download link!');
      return;
    }
    if (cart.length === 0) {
      setError('Cart is empty — go pick some agents first!');
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
        setError(data.error || 'Checkout failed. Try again?');
      }
    } catch {
      setError('Something broke. Try again.');
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <div className="text-6xl mb-6">🦞</div>
        <h1 className="font-fun text-4xl font-bold mb-4">Cart is Empty</h1>
        <p className="font-hand text-2xl text-[#6b6b6b] mb-8">You gotta pick some agents first!</p>
        <a href="/catalog" className="bg-[#FF6B6B] text-white px-8 py-3 rounded-full font-fun font-bold hover:bg-[#e85a5a] transition-all shadow-[3px_3px_0px_#1a1a1a]">
          Browse Catalog
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="font-fun text-4xl font-bold mb-2">Checkout</h1>
      <p className="font-hand text-xl text-[#6b6b6b] mb-8">almost there...</p>

      {/* Cart Items */}
      <div className="space-y-3 mb-8">
        {cart.map((item) => {
          const agent = AGENTS.find(a => a.id === item.agentId);
          return (
            <div key={item.agentId} className="bg-white border-2 border-[#1a1a1a] rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                {agent && (
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold font-fun shrink-0 border-2 border-[#1a1a1a]"
                    style={{ backgroundColor: agent.avatarColor + '22', color: agent.avatarColor }}
                  >
                    {agent.initials}
                  </div>
                )}
                <div>
                  <div className="font-fun font-bold">{item.name}</div>
                  <div className="text-xs text-[#6b6b6b]">Personality Kit</div>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item.agentId)}
                className="font-hand text-lg text-[#FF6B6B] hover:underline"
              >
                remove
              </button>
            </div>
          );
        })}
      </div>

      {/* Total */}
      <div className="bg-white border-3 border-[#1a1a1a] rounded-2xl p-6 mb-8 tilt-slight" style={{ borderWidth: '3px', boxShadow: '5px 5px 0px #4ECDC4' }}>
        <div className="flex justify-between text-sm text-[#6b6b6b] mb-2">
          <span>{cart.length} agent{cart.length !== 1 ? 's' : ''} at $10 each</span>
          <span>${cart.length * 10}</span>
        </div>
        {cart.length >= 2 && (
          <div className="flex justify-between text-sm mb-2">
            <span className="font-hand text-lg text-[#4ECDC4]">Bundle savings!</span>
            <span className="text-[#4ECDC4] font-bold">-${(cart.length * 10) - total}</span>
          </div>
        )}
        <div className="border-t-2 border-[#e8e0d4] my-3" />
        <div className="flex justify-between items-center">
          <span className="font-fun font-bold text-lg">Total</span>
          <span className="font-fun text-3xl font-extrabold text-[#FF6B6B]">${total}</span>
        </div>
      </div>

      {/* Email */}
      <div className="mb-6">
        <label className="font-fun font-bold text-sm block mb-2">Email (for your download link)</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full bg-white border-2 border-[#1a1a1a] rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[#FF6B6B] focus:shadow-[3px_3px_0px_#FF6B6B44] transition-all"
        />
      </div>

      {error && (
        <div className="font-hand text-lg text-[#FF6B6B] mb-4">{error}</div>
      )}

      <button
        onClick={handleCheckout}
        disabled={loading}
        className="w-full bg-[#FF6B6B] text-white py-4 rounded-full font-fun font-bold text-lg hover:bg-[#e85a5a] transition-all shadow-[4px_4px_0px_#1a1a1a] hover:shadow-[2px_2px_0px_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] disabled:opacity-50"
      >
        {loading ? 'Sending you to Stripe...' : `Pay $${total} 🦞`}
      </button>

      <p className="font-hand text-base text-[#6b6b6b] text-center mt-4">
        Secure checkout via Stripe. You get a download link right after.
      </p>
    </div>
  );
}
