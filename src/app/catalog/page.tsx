'use client';

import { useState, useEffect } from 'react';
import { AGENTS, CATEGORIES, type Agent } from '@/lib/agents';
import { addToCart, getCart, removeFromCart, type CartItem } from '@/lib/cart';
import { VOICE_SAMPLES } from '@/lib/voice-samples';

const CARD_SHADOWS = ['#FF6B6B', '#4ECDC4', '#9B5DE5', '#00BBF9', '#FFE66D', '#F9A8D4', '#FF6B6B', '#4ECDC4', '#9B5DE5', '#00BBF9'];
const TILTS = ['tilt-left', 'tilt-right', 'tilt-slight', 'tilt-left', 'tilt-right', 'tilt-slight', 'tilt-right', 'tilt-left', 'tilt-slight', 'tilt-right'];

export default function CatalogPage() {
  const [category, setCategory] = useState('all');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [expandedSamples, setExpandedSamples] = useState<Set<string>>(new Set());

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

  const toggleSample = (id: string) => {
    setExpandedSamples(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const catColors: Record<string, string> = {
    all: '#1a1a1a',
    productivity: '#3B82F6',
    creative: '#9B5DE5',
    trading: '#22C55E',
    lifestyle: '#FF6B6B',
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="font-fun text-5xl md:text-6xl font-bold mb-2">Agent Catalog</h1>
        <p className="font-hand text-2xl text-[#6b6b6b]">10 personalities. Pick your squad. 🦞</p>
      </div>

      {/* Filter */}
      <div className="flex gap-3 mb-12 flex-wrap">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setCategory(cat.id)}
            className="font-fun text-sm font-bold px-5 py-2.5 rounded-full border-2 border-[#1a1a1a] transition-all"
            style={{
              backgroundColor: category === cat.id ? catColors[cat.id] : 'white',
              color: category === cat.id ? 'white' : '#1a1a1a',
              boxShadow: category === cat.id ? `3px 3px 0px ${catColors[cat.id]}66` : 'none',
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {filtered.map((agent) => {
          const added = inCart(agent.id);
          const origIdx = AGENTS.findIndex(a => a.id === agent.id);
          const shadow = CARD_SHADOWS[origIdx];
          const tilt = TILTS[origIdx];
          const sample = VOICE_SAMPLES[agent.id];
          const isExpanded = expandedSamples.has(agent.id);

          return (
            <div
              key={agent.id}
              id={agent.slug}
              className={`relative bg-white border-3 border-[#1a1a1a] rounded-2xl p-6 ${tilt} flex flex-col`}
              style={{ borderWidth: '3px', boxShadow: `6px 6px 0px ${shadow}` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-3">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-lg font-bold font-fun shrink-0 border-2 border-[#1a1a1a]"
                    style={{ backgroundColor: agent.avatarColor + '22', color: agent.avatarColor }}
                  >
                    {agent.initials}
                  </div>
                  <div>
                    <div className="font-fun text-xl font-bold">{agent.name}</div>
                    <div
                      className="inline-block text-xs font-fun font-bold px-2 py-0.5 rounded-full mt-0.5"
                      style={{ backgroundColor: agent.avatarColor + '22', color: agent.avatarColor }}
                    >
                      {agent.category}
                    </div>
                  </div>
                </div>
                <div className="font-fun text-2xl font-extrabold text-[#FF6B6B]">${agent.price}</div>
              </div>

              <p className="font-hand text-xl text-[#6b6b6b] mb-3">&ldquo;{agent.tagline}&rdquo;</p>
              <p className="text-sm text-[#6b6b6b] mb-4">{agent.description}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {agent.traits.map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-[#FFFBF5] text-[#6b6b6b] border border-[#e8e0d4] font-medium">{t}</span>
                ))}
              </div>

              {/* Voice Sample */}
              {sample && (
                <div className="mb-5 flex-1">
                  <button
                    onClick={() => toggleSample(agent.id)}
                    className="font-fun text-sm font-bold text-[#9B5DE5] hover:underline decoration-wavy mb-2 flex items-center gap-1"
                  >
                    {isExpanded ? '▼' : '▶'} See the difference
                  </button>

                  {isExpanded && (
                    <div className="space-y-3 mt-3">
                      <div className="text-xs font-fun font-bold text-[#6b6b6b] mb-1">
                        User: {sample.prompt}
                      </div>

                      {/* Generic */}
                      <div className="bg-[#FFF0F0] border border-[#FFB4B4] rounded-xl p-3">
                        <div className="text-xs font-fun font-bold text-[#FF6B6B] mb-1">❌ Generic AI:</div>
                        <p className="text-xs text-[#6b6b6b] leading-relaxed whitespace-pre-line">{sample.generic}</p>
                      </div>

                      {/* With Soul */}
                      <div className="bg-[#F0FFF4] border border-[#B4FFD0] rounded-xl p-3">
                        <div className="text-xs font-fun font-bold text-[#22C55E] mb-1">✅ With Soul:</div>
                        <p className="text-xs text-[#1a1a1a] leading-relaxed whitespace-pre-line font-medium">{sample.withSoul}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <button
                onClick={() => handleToggle(agent)}
                className={`w-full py-3 rounded-full font-fun font-bold text-sm transition-all border-2 border-[#1a1a1a] mt-auto ${
                  added
                    ? 'bg-[#4ECDC4] text-white shadow-[3px_3px_0px_#1a1a1a]'
                    : 'bg-[#FF6B6B] text-white shadow-[3px_3px_0px_#1a1a1a] hover:shadow-[1px_1px_0px_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px]'
                }`}
              >
                {added ? '✓ In Cart — Remove?' : 'Add to Cart'}
              </button>
            </div>
          );
        })}
      </div>

      {/* Floating Cart Bar */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t-3 border-[#1a1a1a] py-4 px-6 z-50" style={{ borderTopWidth: '3px' }}>
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="font-fun text-base">
              <span className="font-bold text-[#FF6B6B]">{cart.length}</span> agent{cart.length !== 1 ? 's' : ''} selected 🦞
            </div>
            <a
              href="/checkout"
              className="bg-[#FF6B6B] text-white px-8 py-3 rounded-full font-fun font-bold hover:bg-[#e85a5a] transition-all shadow-[3px_3px_0px_#1a1a1a] hover:shadow-[1px_1px_0px_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              Checkout &rarr;
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
