import { AGENTS, PRICING_TIERS } from '@/lib/agents';

export default function HomePage() {
  const featured = AGENTS.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 py-32 text-center relative">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[#262626] text-xs text-[#A3A3A3] tracking-wide uppercase">
            Agent Personality Marketplace
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-none mb-6">
            SOUL<span className="text-amber-500">CLAW</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#A3A3A3] max-w-xl mx-auto mb-4">
            Forge Your Perfect AI Agent
          </p>
          <p className="text-[#737373] max-w-md mx-auto mb-10">
            Pre-made personalities. Custom builds. Ready for Clawdbot.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/catalog" className="bg-amber-500 text-black px-8 py-3.5 rounded-lg font-bold text-base hover:bg-amber-400 transition-colors">
              Browse Catalog
            </a>
            <a href="#how-it-works" className="border border-[#262626] text-[#A3A3A3] px-8 py-3.5 rounded-lg font-semibold text-base hover:border-amber-500/50 hover:text-white transition-all">
              How It Works
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="font-display text-3xl font-bold tracking-tight uppercase text-center mb-16">
          How It Works
        </h2>
        <div className="grid md:grid-cols-5 gap-6">
          {[
            { step: '01', title: 'Choose', desc: 'Pick a personality from the catalog or describe your own' },
            { step: '02', title: 'Pay', desc: '$10-40. Stripe checkout. Done in seconds.' },
            { step: '03', title: 'Download', desc: 'Get your agent kit as a ZIP file' },
            { step: '04', title: 'Drop In', desc: 'Copy files into your Clawdbot workspace' },
            { step: '05', title: 'Alive', desc: 'Your agent wakes up with personality' },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="font-mono text-amber-500 text-sm mb-3">{item.step}</div>
              <div className="font-display text-lg font-bold mb-2">{item.title}</div>
              <div className="text-sm text-[#A3A3A3]">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Agents */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex justify-between items-end mb-12">
          <h2 className="font-display text-3xl font-bold tracking-tight uppercase">
            Featured Agents
          </h2>
          <a href="/catalog" className="text-amber-500 text-sm font-semibold hover:underline">
            View All &rarr;
          </a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((agent) => (
            <a key={agent.id} href={`/catalog#${agent.slug}`} className="bg-[#111111] border border-[#262626] rounded-xl p-6 card-glow block">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-lg font-bold mb-4"
                style={{ backgroundColor: agent.avatarColor + '22', color: agent.avatarColor, border: `2px solid ${agent.avatarColor}44` }}
              >
                {agent.initials}
              </div>
              <div className="font-display text-lg font-bold mb-1">{agent.name}</div>
              <div className="text-xs text-amber-500 uppercase tracking-wide mb-3">{agent.category}</div>
              <p className="text-sm text-[#A3A3A3] mb-4 italic">&ldquo;{agent.tagline}&rdquo;</p>
              <div className="flex flex-wrap gap-1.5">
                {agent.traits.map((t) => (
                  <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-[#1A1A1A] text-[#737373] border border-[#262626]">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="font-display text-3xl font-bold tracking-tight uppercase text-center mb-16">
          Pricing
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {PRICING_TIERS.map((tier) => (
            <div key={tier.id} className={`bg-[#111111] border rounded-xl p-6 ${tier.id === 'army' ? 'border-amber-500' : 'border-[#262626]'}`}>
              {tier.id === 'army' && (
                <div className="text-[10px] text-amber-500 uppercase tracking-widest font-bold mb-3">Best Value</div>
              )}
              <div className="font-display text-lg font-bold mb-1">{tier.name}</div>
              <div className="font-mono text-3xl font-bold text-amber-500 mb-3">${tier.price}</div>
              <p className="text-sm text-[#A3A3A3] mb-4">{tier.description}</p>
              <a href="/catalog" className={`block text-center py-2.5 rounded-lg font-semibold text-sm transition-colors ${
                tier.id === 'army'
                  ? 'bg-amber-500 text-black hover:bg-amber-400'
                  : 'border border-[#262626] text-[#A3A3A3] hover:border-amber-500/50 hover:text-white'
              }`}>
                Get Started
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* What's Inside */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="font-display text-3xl font-bold tracking-tight uppercase text-center mb-6">
          What&apos;s In Every Kit
        </h2>
        <p className="text-[#A3A3A3] text-center max-w-lg mx-auto mb-16">
          Each agent personality kit is a complete workspace package. Drop the files into Clawdbot and your agent comes alive.
        </p>
        <div className="max-w-2xl mx-auto bg-[#111111] border border-[#262626] rounded-xl p-6 font-mono text-sm">
          <div className="text-[#737373] mb-2">agent-name/</div>
          {[
            { file: 'SOUL.md', desc: 'Core personality, voice, behavior rules' },
            { file: 'AGENTS.md', desc: 'Workspace rules, memory, safety protocols' },
            { file: 'TOOLS.md', desc: 'Tool-specific guidance and preferences' },
            { file: 'IDENTITY.md', desc: 'Quick reference card (name, vibe, emoji)' },
            { file: 'USER.md', desc: 'Template for owner info' },
            { file: 'README.md', desc: 'Setup instructions for Clawdbot' },
          ].map((f) => (
            <div key={f.file} className="flex justify-between py-1.5 border-b border-[#1A1A1A] last:border-0">
              <span className="text-amber-500">{f.file}</span>
              <span className="text-[#737373] text-xs">{f.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-24">
        <h2 className="font-display text-3xl font-bold tracking-tight uppercase text-center mb-16">
          FAQ
        </h2>
        <div className="space-y-6">
          {[
            { q: 'What is Clawdbot?', a: 'Clawdbot is a multi-agent CLI for Claude. It lets you run AI agents with custom personalities, memory, and tools. SoulClaw sells the personality files that bring agents to life.' },
            { q: 'What files do I get?', a: 'A ZIP containing SOUL.md (personality), AGENTS.md (workspace rules), TOOLS.md (tool guidance), IDENTITY.md (quick reference), USER.md (owner template), and README.md (setup guide).' },
            { q: 'How do I install?', a: 'Unzip the folder, copy the files into your Clawdbot agent workspace directory, and restart the agent. Takes about 30 seconds.' },
            { q: 'Can I customize pre-made agents?', a: 'Absolutely. The files are plain Markdown. Edit anything you want after purchase. The kit gives you a professional starting point.' },
            { q: 'Refund policy?', a: 'Digital goods are non-refundable, but if something is genuinely broken, reach out and we will make it right.' },
          ].map((faq, i) => (
            <div key={i} className="bg-[#111111] border border-[#262626] rounded-xl p-6">
              <h3 className="font-display font-bold mb-2">{faq.q}</h3>
              <p className="text-sm text-[#A3A3A3]">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="font-display text-4xl font-bold tracking-tight uppercase mb-4">
          Ready to Build Your Agent?
        </h2>
        <p className="text-[#A3A3A3] mb-8">10 pre-made personalities. Starting at $10.</p>
        <a href="/catalog" className="inline-block bg-amber-500 text-black px-10 py-4 rounded-lg font-bold text-lg hover:bg-amber-400 transition-colors">
          Browse the Catalog
        </a>
      </section>
    </div>
  );
}
