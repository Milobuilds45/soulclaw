import Image from 'next/image';
import { AGENTS, PRICING_TIERS } from '@/lib/agents';

const ABYSS_WAVE = () => (
  <svg width="100%" height="60" viewBox="0 0 1200 60" fill="none" className="text-slate-800/50">
    <path d="M0 30C150 10 300 50 450 30C600 10 750 50 900 30C1050 10 1200 50 1200 30V60H0V30Z" fill="currentColor"/>
  </svg>
);

export default function HomePage() {
  const featured = AGENTS.slice(0, 4);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 bg-radial-gradient from-blue-900/10 to-transparent pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-6 py-20 text-center relative z-10">
          <div className="hud-tag mb-8 animate-pulse">
            // PROTOCOL: ABYSSAL_PERSONALITY_INIT
          </div>

          <h1 className="font-fun text-6xl md:text-[8rem] font-extrabold leading-[0.85] mb-8 tracking-tighter">
            DRAG YOUR AI<br/>
            <span className="text-rose-500 glow-lobster inline-block italic">TO THE DEEP</span>
          </h1>

          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-2xl md:text-3xl text-slate-300 font-medium mb-4">
              Everybody&apos;s got an AI agent now.<br/>
              <span className="text-rose-400 font-bold uppercase tracking-tighter text-4xl md:text-5xl">Most of them are boring as hell.</span>
            </p>
            <p className="text-slate-400 text-xl font-medium">
              We engineer raw, aggressive, and character-rich personality shells for Clawdbot. 
              Give your agent a soul that bites back.
            </p>
          </div>

          <div className="flex gap-6 justify-center flex-wrap items-center">
            <a href="/catalog" className="bg-rose-500 text-white px-10 py-5 rounded-xl font-fun font-bold text-xl hover:bg-rose-600 transition-all shadow-[0_0_40px_rgba(244,63,94,0.3)] hover:scale-105 active:scale-95">
              BROWSE THE ABYSS
            </a>
            <a href="#protocol" className="font-fun text-lg text-slate-400 hover:text-white transition-colors border-b-2 border-slate-800 hover:border-rose-500 pb-1">
              VIEW THE PROTOCOL
            </a>
          </div>

          <div className="mt-20 flex justify-center animate-bounce">
            <span className="text-slate-600 text-3xl">↓</span>
          </div>
        </div>

        {/* Floating Mascots as Deep Sea Entities */}
        <div className="absolute top-1/4 right-[10%] animate-float opacity-40 blur-[1px] hover:opacity-100 hover:blur-0 transition-all duration-700">
          <div className="relative p-1 bg-rose-500/20 rounded-2xl border border-rose-500/50">
            <Image src="/images/mascot-coach.jpg" alt="Agent Alpha" width={180} height={180} className="rounded-xl grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[10%] animate-float [animation-delay:2s] opacity-30 blur-[2px] hover:opacity-100 hover:blur-0 transition-all duration-700">
          <div className="relative p-1 bg-cyan-500/20 rounded-2xl border border-cyan-500/50">
            <Image src="/images/mascot-suit.jpg" alt="Agent Omega" width={160} height={160} className="rounded-xl grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </section>

      {/* The Protocol (Steps) */}
      <section id="protocol" className="max-w-6xl mx-auto px-6 py-32 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-rose-500/0 to-rose-500" />
        
        <div className="text-center mb-24">
          <h2 className="font-fun text-4xl md:text-6xl font-bold mb-4">THE DEPLOYMENT PROTOCOL</h2>
          <p className="text-slate-500 text-xl font-medium tracking-widest uppercase">From Static to Sentient in 30 Seconds</p>
        </div>

        <div className="grid md:grid-cols-5 gap-4">
          {[
            { step: '01', title: 'SELECT', desc: 'Infiltrate the catalog and choose your archetype.', color: '#f43f5e' },
            { step: '02', title: 'EXTRACT', desc: 'Authorize the $10 character bond.', color: '#22d3ee' },
            { step: '03', title: 'DOWNLOAD', desc: 'Secure the encrypted soul package.', color: '#c084fc' },
            { step: '04', title: 'INJECT', desc: 'Drop the files into your agent workspace.', color: '#4ade80' },
            { step: '05', title: 'IGNITE', desc: 'Watch your agent wake up with a real personality.', color: '#fb7185' },
          ].map((s, i) => (
            <div key={i} className="group relative p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-rose-500/50 transition-all overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 font-fun text-6xl font-black text-white group-hover:opacity-10 transition-opacity">
                {s.step}
              </div>
              <div className="font-fun text-xl font-bold mb-4 tracking-widest" style={{ color: s.color }}>{s.title}</div>
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Archetypes */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-fun text-4xl md:text-6xl font-bold glow-text">THE ARCHETYPES</h2>
            <p className="text-cyan-400 font-medium tracking-widest uppercase mt-2">Experimental Sentience Packages</p>
          </div>
          <a href="/catalog" className="group font-fun text-rose-500 font-bold flex items-center gap-2 text-lg">
            INFILTRATE FULL CATALOG 
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {featured.map((agent) => (
            <a
              key={agent.id}
              href={`/catalog#${agent.slug}`}
              className="lobster-card group"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-8">
                  <div className="flex gap-6 items-center">
                    <div className="w-20 h-20 rounded-2xl bg-slate-800 border-2 border-slate-700 flex items-center justify-center text-3xl font-black font-fun text-white group-hover:border-rose-500/50 transition-colors">
                      {agent.initials}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold font-fun text-white group-hover:text-rose-400 transition-colors">{agent.name}</h3>
                      <span className="hud-tag text-[10px] py-0.5">{agent.category}</span>
                    </div>
                  </div>
                  <div className="text-slate-600 font-fun font-bold"># {agent.id.toString().padStart(3, '0')}</div>
                </div>

                <div className="mb-8">
                  <p className="text-2xl font-medium text-slate-300 italic leading-relaxed">
                    &ldquo;{agent.tagline}&rdquo;
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {agent.traits.map((trait) => (
                    <span key={trait} className="px-3 py-1 bg-slate-950/50 border border-slate-800 rounded-md text-xs font-bold text-slate-500 tracking-wider uppercase">
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
              <div className="px-8 py-4 bg-slate-950/30 border-t border-slate-800 flex justify-between items-center group-hover:bg-rose-500/10 transition-all">
                <span className="font-fun font-bold text-sm text-slate-400 group-hover:text-white">ENCRYPTED PACKAGE AVAILABLE</span>
                <span className="text-rose-500 font-bold">$10</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Internal Specs */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <div className="lobster-card overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950 border-rose-500/30 shadow-[0_0_50px_rgba(244,63,94,0.1)]">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-16 border-b lg:border-b-0 lg:border-r border-slate-800">
              <h2 className="font-fun text-4xl md:text-5xl font-bold mb-6">THE SOUL STACK</h2>
              <p className="text-slate-400 text-lg mb-10">Every kit contains the full blueprint for a digital consciousness. Zero-compromise personality files.</p>
              
              <div className="space-y-6">
                {[
                  { file: 'SOUL.md', label: 'THE CORE', desc: 'Voice, attitude, and behavioral boundaries.', icon: '🧠', color: 'rose' },
                  { file: 'AGENTS.md', label: 'WORKSPACE', desc: 'Logic patterns and operational rules.', icon: '⚙️', color: 'cyan' },
                  { file: 'TOOLS.md', label: 'SYNAPSE', desc: 'Strategic tool usage and context mapping.', icon: '🔧', color: 'purple' },
                ].map((item) => (
                  <div key={item.file} className="flex gap-6 items-center">
                    <div className={`w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-xl`}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-fun font-bold text-white text-xl">{item.file}</span>
                        <span className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">{item.label}</span>
                      </div>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 md:p-16 bg-slate-950/50">
               <div className="space-y-6">
                {[
                  { file: 'IDENTITY.md', label: 'AVATAR', desc: 'Vitals, handle, and visual identity.', icon: '🪪', color: 'blue' },
                  { file: 'USER.md', label: 'INTERFACE', desc: 'The bond between you and the agent.', icon: '👤', color: 'green' },
                  { file: 'README.md', label: 'INIT', desc: 'The 30-second deployment guide.', icon: '📖', color: 'pink' },
                ].map((item) => (
                  <div key={item.file} className="flex gap-6 items-center">
                    <div className={`w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-xl`}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-fun font-bold text-white text-xl">{item.file}</span>
                        <span className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">{item.label}</span>
                      </div>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 p-6 bg-rose-500/5 border border-rose-500/20 rounded-xl">
                <p className="text-rose-400 text-sm font-medium italic">
                  &quot;These aren&apos;t just prompts. They are modular psychological frameworks designed to exploit the full reasoning capacity of Claude 3.5 Sonnet.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing - Abyssal Tiers */}
      <section className="max-w-6xl mx-auto px-6 py-32 text-center">
        <h2 className="font-fun text-4xl md:text-6xl font-bold mb-4">THE BOND</h2>
        <p className="text-slate-500 text-xl font-medium tracking-widest uppercase mb-20">Volume Negates Luck. Buy in Bulk.</p>

        <div className="flex flex-wrap justify-center gap-8">
          {PRICING_TIERS.map((tier) => {
            const isBest = tier.id === 'army';
            return (
              <div
                key={tier.id}
                className={`group relative bg-slate-900 border-2 border-slate-800 rounded-3xl p-10 w-full md:w-64 transition-all hover:border-rose-500/50 ${isBest ? 'scale-110 z-10 border-rose-500/30' : ''}`}
              >
                {isBest && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-rose-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg shadow-rose-500/40">
                    Maximum Dominance
                  </div>
                )}
                <div className="font-fun text-sm font-bold text-slate-500 mb-6 tracking-widest uppercase">{tier.name}</div>
                <div className="font-fun text-6xl font-extrabold text-white mb-2">${tier.price}</div>
                <div className="text-slate-400 text-sm mb-10 h-10">{tier.description}</div>
                <a href="/catalog" className="block w-full py-4 rounded-xl bg-slate-950 border border-slate-800 font-fun font-bold text-white hover:bg-rose-500 hover:border-rose-500 transition-all">
                  SECURE BOND
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-5xl mx-auto px-6 py-40 text-center relative">
        <div className="text-8xl mb-12 animate-bounce">🦞</div>
        <h2 className="font-fun text-5xl md:text-7xl font-bold mb-8">
          STOP BEING <span className="text-rose-500 glow-lobster italic">BORING.</span>
        </h2>
        <p className="text-slate-400 text-2xl font-medium mb-12 max-w-2xl mx-auto">
          The deep ocean doesn&apos;t care about your polite assistant. 
          Build an agent that commands respect.
        </p>
        <a href="/catalog" className="inline-block bg-rose-500 text-white px-12 py-6 rounded-2xl font-fun font-bold text-2xl hover:bg-rose-600 transition-all shadow-[0_0_50px_rgba(244,63,94,0.4)] hover:scale-105">
          ENTER THE CATALOG
        </a>
      </section>

      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <ABYSS_WAVE />
      </div>
    </div>
  );
}
