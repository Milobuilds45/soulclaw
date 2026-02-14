import { AGENTS, PRICING_TIERS } from '@/lib/agents';

const DOODLE_STARS = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="inline-block">
    <path d="M16 2L18.5 12.5L28 16L18.5 19.5L16 30L13.5 19.5L4 16L13.5 12.5L16 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

const SQUIGGLY_ARROW = () => (
  <svg width="120" height="40" viewBox="0 0 120 40" fill="none" className="text-[#FF6B6B]">
    <path d="M5 20C15 10 25 30 35 20C45 10 55 30 65 20C75 10 85 30 95 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <path d="M90 15L100 20L90 25" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

export default function HomePage() {
  const featured = AGENTS.slice(0, 4);
  const tilts = ['tilt-left', 'tilt-right', 'tilt-slight', 'tilt-right'];
  const cardColors = ['#FF6B6B', '#4ECDC4', '#9B5DE5', '#00BBF9'];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative">
        <div className="absolute top-20 right-10 text-[#FFE66D] opacity-50 rotate-12 text-6xl select-none hidden md:block">🦞</div>
        <div className="absolute bottom-10 left-10 text-[#4ECDC4] opacity-30 -rotate-6 text-5xl select-none hidden md:block">✨</div>
        <div className="absolute top-40 left-20 text-[#9B5DE5] opacity-20 rotate-45 select-none hidden md:block"><DOODLE_STARS /></div>

        <div className="max-w-5xl mx-auto px-6 py-24 md:py-36 text-center relative">
          <div className="sticker bg-[#FFE66D] text-[#1a1a1a] mb-8 text-base">
            for Clawdbot agents
          </div>

          <h1 className="font-fun text-6xl md:text-[7rem] font-extrabold leading-[0.9] mb-6 tracking-tight">
            Give Your AI<br/>
            <span className="text-[#FF6B6B] inline-block" style={{ transform: 'rotate(-2deg)' }}>Some Soul</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#6b6b6b] max-w-lg mx-auto mb-4">
            Everybody&apos;s got an AI agent now.<br/>
            <span className="font-hand text-2xl md:text-3xl text-[#FF6B6B]">Most of them are boring as hell.</span>
          </p>

          <p className="text-[#6b6b6b] max-w-md mx-auto mb-10 font-hand text-xl">
            We sell personality kits that make your Clawdbot agent actually fun to talk to.
          </p>

          <div className="flex gap-4 justify-center flex-wrap items-center">
            <a href="/catalog" className="bg-[#FF6B6B] text-white px-8 py-4 rounded-full font-fun font-bold text-lg hover:bg-[#e85a5a] transition-all shadow-[4px_4px_0px_#1a1a1a] hover:shadow-[2px_2px_0px_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px]">
              Browse Agents
            </a>
            <a href="#how-it-works" className="font-fun text-lg text-[#6b6b6b] hover:text-[#1a1a1a] underline decoration-wavy decoration-[#4ECDC4] underline-offset-4 transition-colors">
              How does this work?
            </a>
          </div>

          <div className="mt-8 flex justify-center">
            <SQUIGGLY_ARROW />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="font-fun text-4xl md:text-5xl font-bold text-center mb-4">
          How It Works
        </h2>
        <p className="font-hand text-2xl text-[#6b6b6b] text-center mb-16">(it&apos;s stupidly simple)</p>

        <div className="grid md:grid-cols-5 gap-8">
          {[
            { num: '1', title: 'Pick', desc: 'Choose an agent personality from the catalog', emoji: '👀', color: '#FF6B6B' },
            { num: '2', title: 'Pay', desc: '$10. Card. Done in literal seconds.', emoji: '💳', color: '#4ECDC4' },
            { num: '3', title: 'Download', desc: 'Get a ZIP with all the personality files', emoji: '📦', color: '#9B5DE5' },
            { num: '4', title: 'Drop In', desc: 'Copy files into your Clawdbot workspace', emoji: '📁', color: '#00BBF9' },
            { num: '5', title: 'Alive!', desc: 'Your agent wakes up with a real personality', emoji: '🤖', color: '#FFE66D' },
          ].map((step, i) => (
            <div key={i} className={`text-center ${i % 2 === 0 ? 'md:translate-y-4' : ''}`}>
              <div className="text-4xl mb-3">{step.emoji}</div>
              <div
                className="font-fun text-xl font-bold inline-block px-3 py-1 rounded-lg mb-2"
                style={{ backgroundColor: step.color + '33', color: step.color === '#FFE66D' ? '#9B5DE5' : step.color }}
              >
                {step.title}
              </div>
              <div className="text-sm text-[#6b6b6b]">{step.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Agents */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-fun text-4xl md:text-5xl font-bold">
              Meet the Agents
            </h2>
            <p className="font-hand text-xl text-[#6b6b6b] mt-1">handpicked for maximum personality</p>
          </div>
          <a href="/catalog" className="font-fun text-[#FF6B6B] font-bold hover:underline decoration-wavy hidden md:block">
            See all 10 &rarr;
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {featured.map((agent, i) => (
            <a
              key={agent.id}
              href={`/catalog#${agent.slug}`}
              className={`relative bg-white border-3 border-[#1a1a1a] rounded-2xl p-6 ${tilts[i]} block`}
              style={{ borderWidth: '3px', boxShadow: `6px 6px 0px ${cardColors[i]}` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-xl font-bold font-fun shrink-0 border-2 border-[#1a1a1a]"
                  style={{ backgroundColor: agent.avatarColor + '22', color: agent.avatarColor }}
                >
                  {agent.initials}
                </div>
                <div>
                  <div className="font-fun text-xl font-bold">{agent.name}</div>
                  <div className="sticker text-xs py-0.5 px-2" style={{ backgroundColor: agent.avatarColor + '33', color: agent.avatarColor, transform: 'rotate(-1deg)' }}>
                    {agent.category}
                  </div>
                </div>
              </div>
              <p className="font-hand text-xl text-[#6b6b6b] mb-3">&ldquo;{agent.tagline}&rdquo;</p>
              <div className="flex flex-wrap gap-1.5">
                {agent.traits.map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-[#FFFBF5] text-[#6b6b6b] border border-[#e8e0d4] font-medium">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <a href="/catalog" className="font-fun text-[#FF6B6B] font-bold hover:underline decoration-wavy text-lg">
            See all 10 agents &rarr;
          </a>
        </div>
      </section>

      {/* What's Inside */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="bg-white border-3 border-[#1a1a1a] rounded-2xl p-8 md:p-12 tilt-slight" style={{ borderWidth: '3px', boxShadow: '8px 8px 0px #4ECDC4' }}>
          <h2 className="font-fun text-3xl md:text-4xl font-bold mb-2">
            What&apos;s In Every Kit
          </h2>
          <p className="font-hand text-xl text-[#6b6b6b] mb-8">a complete personality transplant, basically</p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { file: 'SOUL.md', desc: 'The personality. Voice, attitude, behavior rules.', color: '#FF6B6B', emoji: '🧠' },
              { file: 'AGENTS.md', desc: 'Workspace rules. Memory, safety, how it operates.', color: '#4ECDC4', emoji: '⚙️' },
              { file: 'TOOLS.md', desc: 'Tool guidance. What to use, when, how.', color: '#9B5DE5', emoji: '🔧' },
              { file: 'IDENTITY.md', desc: 'Quick ref card. Name, vibe, emoji, avatar.', color: '#00BBF9', emoji: '🪪' },
              { file: 'USER.md', desc: 'Template for YOUR info. Timezone, prefs, etc.', color: '#FFE66D', emoji: '👤' },
              { file: 'README.md', desc: 'Setup guide. 30 seconds to install.', color: '#F9A8D4', emoji: '📖' },
            ].map((f) => (
              <div key={f.file} className="flex items-start gap-3 p-3 rounded-xl" style={{ backgroundColor: f.color + '11' }}>
                <span className="text-2xl">{f.emoji}</span>
                <div>
                  <span className="font-fun font-bold" style={{ color: f.color === '#FFE66D' ? '#9B5DE5' : f.color }}>{f.file}</span>
                  <p className="text-sm text-[#6b6b6b]">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="font-fun text-4xl md:text-5xl font-bold text-center mb-2">
          Pricing
        </h2>
        <p className="font-hand text-2xl text-[#6b6b6b] text-center mb-16">
          more agents = more savings <span className="text-[#FF6B6B]">(obviously)</span>
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {PRICING_TIERS.map((tier, i) => {
            const colors = ['#FF6B6B', '#4ECDC4', '#9B5DE5', '#00BBF9', '#FFE66D'];
            const isBest = tier.id === 'army';
            return (
              <div
                key={tier.id}
                className={`relative bg-white border-3 border-[#1a1a1a] rounded-2xl p-6 w-48 text-center ${i % 2 === 0 ? 'tilt-left' : 'tilt-right'}`}
                style={{ borderWidth: isBest ? '4px' : '3px', boxShadow: `5px 5px 0px ${colors[i]}` }}
              >
                {isBest && (
                  <div className="absolute -top-4 -right-3 sticker bg-[#FF6B6B] text-white text-sm" style={{ transform: 'rotate(8deg)' }}>
                    Best deal!
                  </div>
                )}
                <div className="font-fun text-sm font-bold mb-1 uppercase" style={{ color: colors[i] === '#FFE66D' ? '#9B5DE5' : colors[i] }}>{tier.name}</div>
                <div className="font-fun text-4xl font-extrabold mb-1">${tier.price}</div>
                <div className="text-xs text-[#6b6b6b] mb-4">{tier.description}</div>
                <a href="/catalog" className="block font-fun text-sm font-bold py-2 rounded-full border-2 border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors">
                  Get It
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="font-fun text-4xl md:text-5xl font-bold text-center mb-2">FAQ</h2>
        <p className="font-hand text-2xl text-[#6b6b6b] text-center mb-12">(frequently asked, frequently answered)</p>

        <div className="space-y-4">
          {[
            { q: 'What is Clawdbot?', a: 'A multi-agent CLI for Claude. It lets you run AI agents with custom personalities, memory, and tools. We sell the personality files that bring agents to life.' },
            { q: 'What files do I get?', a: 'A ZIP with SOUL.md (personality), AGENTS.md (workspace rules), TOOLS.md (tool guidance), IDENTITY.md (quick ref), USER.md (your template), and README.md (setup guide).' },
            { q: 'How do I install?', a: 'Unzip. Copy files to your Clawdbot agent workspace. Restart agent. Done. Literally 30 seconds.' },
            { q: 'Can I edit the files after?', a: 'Absolutely. Everything is plain Markdown. Customize whatever you want. The kit is a starting point, not a cage.' },
            { q: 'Refund policy?', a: "Digital goods, so no refunds. But if something's genuinely broken, reach out and we'll make it right. We're not monsters." },
          ].map((faq, i) => {
            const bgColors = ['#FF6B6B', '#4ECDC4', '#9B5DE5', '#00BBF9', '#FFE66D'];
            return (
              <div key={i} className="bg-white border-2 border-[#1a1a1a] rounded-xl p-5" style={{ borderLeftWidth: '6px', borderLeftColor: bgColors[i] }}>
                <h3 className="font-fun font-bold text-lg mb-1">{faq.q}</h3>
                <p className="text-sm text-[#6b6b6b]">{faq.a}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="text-6xl mb-6">🦞</div>
        <h2 className="font-fun text-4xl md:text-5xl font-bold mb-4">
          Ready to Give Your Agent<br/>
          <span className="text-[#FF6B6B] squiggly">Some Personality?</span>
        </h2>
        <p className="font-hand text-2xl text-[#6b6b6b] mb-8">10 agents. Starting at $10. Ship it.</p>
        <a href="/catalog" className="inline-block bg-[#FF6B6B] text-white px-10 py-4 rounded-full font-fun font-bold text-xl hover:bg-[#e85a5a] transition-all shadow-[4px_4px_0px_#1a1a1a] hover:shadow-[2px_2px_0px_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px]">
          Browse the Catalog
        </a>
      </section>
    </div>
  );
}
