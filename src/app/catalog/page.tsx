'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { AGENTS, CATEGORIES, type Agent } from '@/lib/agents';
import { addToCart, getCart, removeFromCart, type CartItem } from '@/lib/cart';
import { VOICE_SAMPLES } from '@/lib/voice-samples';

const CARD_SHADOWS = ['#FF6B6B', '#4ECDC4', '#9B5DE5', '#00BBF9', '#FFE66D', '#F9A8D4', '#FF6B6B', '#4ECDC4', '#9B5DE5', '#00BBF9'];

export default function CatalogPage() {
  const [category, setCategory] = useState('all');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [expandedSamples, setExpandedSamples] = useState<Set<string>>(new Set());
  const [notifyEmail, setNotifyEmail] = useState('');
  const [notifySubmitted, setNotifySubmitted] = useState(false);

  useEffect(() => {
    setCart(getCart());
    const handler = () => setCart(getCart());
    window.addEventListener('cart-updated', handler);
    return () => window.removeEventListener('cart-updated', handler);
  }, []);

  const filtered = category === 'all' ? AGENTS : AGENTS.filter(a => a.category === category);
  const inCart = (id: string) => cart.some(i => i.agentId === id);

  const handleToggle = (agent: Agent) => {
    if (inCart(agent.id)) removeFromCart(agent.id);
    else addToCart(agent);
  };

  const toggleSample = (id: string) => {
    setExpandedSamples(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const catColors: Record<string, string> = {
    all: '#1a1a1a', productivity: '#3B82F6', creative: '#9B5DE5', trading: '#22C55E', lifestyle: '#FF6B6B',
  };

  const TV_SHOWS = [
    'Cast of: Suits', 'Cast of: The Office', 'Cast of: Billions', 'Cast of: Breaking Bad',
    'Cast of: Ted Lasso', 'Cast of: Peaky Blinders', 'Cast of: Friends', 'Cast of: Seinfeld',
  ];
  const CELEBRITIES = ['Elon Musk', 'Alex Hormozi', 'Joe Rogan', 'Gordon Ramsay', 'Snoop Dogg'];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-10">
        <h1 className="font-fun text-5xl md:text-6xl font-bold mb-2">Agent Catalog</h1>
        <p className="font-hand text-2xl text-[#6b6b6b]">10 personalities. Pick your squad. 🦞</p>
      </div>

      {/* Filter */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setCategory(cat.id)}
            className="font-fun text-xs font-bold px-4 py-2 rounded-full border-2 border-[#1a1a1a] transition-all"
            style={{
              backgroundColor: category === cat.id ? catColors[cat.id] : 'white',
              color: category === cat.id ? 'white' : '#1a1a1a',
              boxShadow: category === cat.id ? `2px 2px 0px ${catColors[cat.id]}66` : 'none',
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Agent Grid — compact cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((agent) => {
          const added = inCart(agent.id);
          const origIdx = AGENTS.findIndex(a => a.id === agent.id);
          const shadow = CARD_SHADOWS[origIdx];
          const sample = VOICE_SAMPLES[agent.id];
          const isExpanded = expandedSamples.has(agent.id);

          return (
            <div
              key={agent.id}
              id={agent.slug}
              className="relative bg-white border-2 border-[#1a1a1a] rounded-xl p-4 flex flex-col"
              style={{ boxShadow: `4px 4px 0px ${shadow}` }}
            >
              {/* Header row */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {agent.mascot ? (
                    <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 border-2 border-[#1a1a1a] bg-white">
                      <Image
                        src={agent.mascot}
                        alt={agent.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold font-fun shrink-0 border-2 border-[#1a1a1a]"
                      style={{ backgroundColor: agent.avatarColor + '22', color: agent.avatarColor }}
                    >
                      {agent.initials}
                    </div>
                  )}
                  <div>
                    <div className="font-fun text-base font-bold leading-tight">{agent.name}</div>
                    <div className="text-[10px] font-fun font-bold uppercase" style={{ color: agent.avatarColor }}>{agent.category}</div>
                  </div>
                </div>
                <div className="font-fun text-lg font-extrabold text-[#FF6B6B]">${agent.price}</div>
              </div>

              <p className="font-hand text-base text-[#6b6b6b] mb-2 leading-snug">&ldquo;{agent.tagline}&rdquo;</p>
              <p className="text-xs text-[#6b6b6b] mb-3 leading-relaxed">{agent.description}</p>

              <div className="flex flex-wrap gap-1 mb-3">
                {agent.traits.map((t) => (
                  <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-[#FFFBF5] text-[#6b6b6b] border border-[#e8e0d4]">{t}</span>
                ))}
              </div>

              {/* Voice Sample toggle */}
              {sample && (
                <div className="mb-3">
                  <button
                    onClick={() => toggleSample(agent.id)}
                    className="font-fun text-xs font-bold text-[#9B5DE5] hover:underline decoration-wavy flex items-center gap-1"
                  >
                    {isExpanded ? '▼' : '▶'} See the difference
                  </button>
                  {isExpanded && (
                    <div className="space-y-2 mt-2">
                      <div className="text-[10px] font-fun font-bold text-[#6b6b6b]">User: {sample.prompt}</div>
                      <div className="bg-[#FFF0F0] border border-[#FFB4B4] rounded-lg p-2">
                        <div className="text-[10px] font-fun font-bold text-[#FF6B6B] mb-0.5">❌ Generic:</div>
                        <p className="text-[11px] text-[#6b6b6b] leading-relaxed">{sample.generic}</p>
                      </div>
                      <div className="bg-[#F0FFF4] border border-[#B4FFD0] rounded-lg p-2">
                        <div className="text-[10px] font-fun font-bold text-[#22C55E] mb-0.5">✅ With Soul:</div>
                        <p className="text-[11px] text-[#1a1a1a] leading-relaxed font-medium whitespace-pre-line">{sample.withSoul}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <button
                onClick={() => handleToggle(agent)}
                className={`w-full py-2 rounded-full font-fun font-bold text-xs transition-all border-2 border-[#1a1a1a] mt-auto ${
                  added
                    ? 'bg-[#4ECDC4] text-white shadow-[2px_2px_0px_#1a1a1a]'
                    : 'bg-[#FF6B6B] text-white shadow-[2px_2px_0px_#1a1a1a] hover:shadow-[1px_1px_0px_#1a1a1a] hover:translate-x-[1px] hover:translate-y-[1px]'
                }`}
              >
                {added ? '✓ In Cart — Remove?' : 'Add to Cart'}
              </button>
            </div>
          );
        })}
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* COMING SOON */}
      {/* ═══════════════════════════════════════════ */}
      <div className="mt-24 mb-16">
        <div className="text-center mb-12">
          <h2 className="font-fun text-4xl md:text-5xl font-bold mb-2">Coming Soon</h2>
          <p className="font-hand text-2xl text-[#6b6b6b]">full cast packs and celebrity agents 🍿</p>
        </div>

        {/* TV Shows */}
        <div className="mb-12">
          <h3 className="font-fun text-2xl font-bold mb-6 flex items-center gap-2">
            📺 TV Show Cast Packs
            <span className="sticker bg-[#FFE66D] text-[#1a1a1a] text-xs">Coming Soon</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {TV_SHOWS.map((show) => (
              <div
                key={show}
                className="bg-white/60 border-2 border-[#e8e0d4] border-dashed rounded-xl p-4 text-center opacity-75"
              >
                <div className="font-fun text-sm font-bold text-[#6b6b6b]">{show}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Celebrities */}
        <div className="mb-12">
          <h3 className="font-fun text-2xl font-bold mb-6 flex items-center gap-2">
            ⭐ Celebrity Agents
            <span className="sticker bg-[#9B5DE5] text-white text-xs">Coming Soon</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {CELEBRITIES.map((name) => (
              <div
                key={name}
                className="bg-white/60 border-2 border-[#e8e0d4] border-dashed rounded-xl p-4 text-center opacity-75"
              >
                <div className="font-fun text-sm font-bold text-[#6b6b6b]">{name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Notify Me */}
        <div className="bg-white border-3 border-[#1a1a1a] rounded-2xl p-6 max-w-lg mx-auto text-center" style={{ borderWidth: '3px', boxShadow: '5px 5px 0px #9B5DE5' }}>
          <div className="font-fun text-xl font-bold mb-1">Get notified when these drop</div>
          <p className="font-hand text-lg text-[#6b6b6b] mb-4">be first in line 🦞</p>
          {notifySubmitted ? (
            <div className="font-hand text-xl text-[#4ECDC4]">You&apos;re on the list! We&apos;ll ping you. ✅</div>
          ) : (
            <div className="flex gap-2">
              <input
                type="email"
                value={notifyEmail}
                onChange={(e) => setNotifyEmail(e.target.value)}
                placeholder="you@example.com"
                className="flex-1 bg-[#FFFBF5] border-2 border-[#1a1a1a] rounded-full px-4 py-2 text-sm focus:outline-none focus:border-[#9B5DE5]"
              />
              <button
                onClick={() => {
                  if (notifyEmail.includes('@')) setNotifySubmitted(true);
                }}
                className="bg-[#9B5DE5] text-white px-6 py-2 rounded-full font-fun font-bold text-sm border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] hover:shadow-[1px_1px_0px_#1a1a1a] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
              >
                Notify Me
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Floating Cart Bar */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t-3 border-[#1a1a1a] py-3 px-6 z-50" style={{ borderTopWidth: '3px' }}>
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="font-fun text-sm">
              <span className="font-bold text-[#FF6B6B]">{cart.length}</span> agent{cart.length !== 1 ? 's' : ''} selected 🦞
            </div>
            <a
              href="/checkout"
              className="bg-[#FF6B6B] text-white px-6 py-2 rounded-full font-fun font-bold text-sm hover:bg-[#e85a5a] transition-all shadow-[2px_2px_0px_#1a1a1a]"
            >
              Checkout &rarr;
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
