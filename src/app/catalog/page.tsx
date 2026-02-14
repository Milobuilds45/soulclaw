'use client';

import { useState, useEffect } from 'react';
import { AGENTS, CATEGORIES, type Agent } from '@/lib/agents';
import { addToCart, getCart, removeFromCart, type CartItem } from '@/lib/cart';

export default function CatalogPage() {
  const [category, setCategory] = useState('all');
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    setCart(getCart());
    const handler = () => setCart(getCart());
    window.addEventListener('cart-updated', handler);
    return () => window.removeEventListener('cart-updated', handler);
  }, []);

  const filtered = category === 'all' ? AGENTS : AGENTS.filter(a => a.category === category);
  const inCart = (id: string) => cart.some(i => i.agentId === id);

  const handleToggle = (agent: Agent) => {
    if (inCart(agent.id)) {
      removeFromCart(agent.id);
    } else {
      addToCart(agent);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="font-display text-4xl font-bold tracking-tight uppercase mb-3">Agent Catalog</h1>
        <p className="text-[#A3A3A3]">10 pre-made personalities. Pick your team.</p>
      </div>

      {/* Filter */}
      <div className="flex gap-2 mb-10 flex-wrap">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setCategory(cat.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              category === cat.id
                ? 'bg-amber-500 text-black'
                : 'bg-[#111111] text-[#A3A3A3] border border-[#262626] hover:border-amber-500/30'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((agent) => {
          const added = inCart(agent.id);
          return (
            <div key={agent.id} id={agent.slug} className="bg-[#111111] border border-[#262626] rounded-xl p-6 card-glow flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-lg font-bold shrink-0"
                  style={{ backgroundColor: agent.avatarColor + '22', color: agent.avatarColor, border: `2px solid ${agent.avatarColor}44` }}
                >
                  {agent.initials}
                </div>
                <div className="font-mono text-xl font-bold text-amber-500">${agent.price}</div>
              </div>

              <div className="font-display text-xl font-bold mb-1">{agent.name}</div>
              <div className="text-xs text-amber-500 uppercase tracking-wide mb-3">{agent.category}</div>
              <p className="text-sm text-[#A3A3A3] italic mb-3">&ldquo;{agent.tagline}&rdquo;</p>
              <p className="text-sm text-[#737373] mb-4 flex-1">{agent.description}</p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {agent.traits.map((t) => (
                  <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-[#1A1A1A] text-[#737373] border border-[#262626]">{t}</span>
                ))}
              </div>

              <button
                onClick={() => handleToggle(agent)}
                className={`w-full py-3 rounded-lg font-semibold text-sm transition-all ${
                  added
                    ? 'bg-[#1A1A1A] text-amber-500 border border-amber-500/30'
                    : 'bg-amber-500 text-black hover:bg-amber-400'
                }`}
              >
                {added ? 'Remove from Cart' : 'Add to Cart'}
              </button>
            </div>
          );
        })}
      </div>

      {/* Floating Cart Bar */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#111111] border-t border-[#262626] py-4 px-6 z-50">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="text-sm text-[#A3A3A3]">
              <span className="text-white font-bold">{cart.length}</span> agent{cart.length !== 1 ? 's' : ''} in cart
            </div>
            <a
              href="/checkout"
              className="bg-amber-500 text-black px-8 py-3 rounded-lg font-bold text-sm hover:bg-amber-400 transition-colors"
            >
              Checkout
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
