export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-fun text-5xl font-bold mb-2">About SoulClaw</h1>
      <p className="font-hand text-2xl text-[#6b6b6b] mb-12">the backstory, if you care</p>

      <div className="space-y-10">
        <section>
          <h2 className="font-fun text-2xl font-bold mb-3 text-[#FF6B6B]">What Is This 🦞</h2>
          <p className="text-[#6b6b6b] leading-relaxed">
            SoulClaw is the first marketplace for AI agent personalities. We sell complete personality kits
            for <a href="https://github.com/clawdbot/clawdbot" target="_blank" rel="noopener" className="text-[#9B5DE5] hover:underline decoration-wavy font-bold">Clawdbot</a>,
            the multi-agent CLI for Claude. Each kit is a set of Markdown files that define how your agent
            thinks, talks, and behaves. Like a soul transplant, but less creepy.
          </p>
        </section>

        <section className="bg-white border-3 border-[#1a1a1a] rounded-2xl p-6 tilt-slight" style={{ borderWidth: '3px', boxShadow: '5px 5px 0px #FFE66D' }}>
          <h2 className="font-fun text-2xl font-bold mb-3 text-[#4ECDC4]">Why Personalities Matter</h2>
          <p className="text-[#6b6b6b] leading-relaxed">
            A blank agent is a blank canvas. It responds, but it doesn&apos;t <em>engage</em>. It answers, but
            it doesn&apos;t have <em>opinions</em>. Personality transforms an AI from a tool into a teammate.
            The right voice, the right attitude, the right boundaries. That&apos;s what separates{' '}
            <span className="font-hand text-xl text-[#FF6B6B]">&ldquo;meh&rdquo;</span> from{' '}
            <span className="font-hand text-xl text-[#4ECDC4]">&ldquo;holy crap this is good&rdquo;</span>.
          </p>
        </section>

        <section>
          <h2 className="font-fun text-2xl font-bold mb-4 text-[#9B5DE5]">What You Get</h2>
          <div className="space-y-3">
            {[
              { file: 'SOUL.md', desc: 'The personality. Voice, attitude, what they will and won\'t do.', emoji: '🧠' },
              { file: 'AGENTS.md', desc: 'Workspace rules. Memory, safety, proactive behaviors.', emoji: '⚙️' },
              { file: 'TOOLS.md', desc: 'Tool guidance. Which tools, when, how.', emoji: '🔧' },
              { file: 'IDENTITY.md', desc: 'Quick ref. Name, vibe, emoji, avatar.', emoji: '🪪' },
              { file: 'USER.md', desc: 'Template for YOUR info. So the agent knows you.', emoji: '👤' },
              { file: 'README.md', desc: 'Setup guide. 30 seconds.', emoji: '📖' },
            ].map((f) => (
              <div key={f.file} className="flex items-center gap-3 bg-white border-2 border-[#e8e0d4] rounded-xl p-3">
                <span className="text-2xl">{f.emoji}</span>
                <div>
                  <span className="font-fun font-bold text-[#1a1a1a]">{f.file}</span>
                  <span className="text-[#6b6b6b] ml-2 text-sm">{f.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-fun text-2xl font-bold mb-3 text-[#00BBF9]">Who Built This</h2>
          <p className="text-[#6b6b6b] leading-relaxed">
            SoulClaw is built by <a href="https://dbtech45.com" target="_blank" rel="noopener" className="text-[#FF6B6B] hover:underline decoration-wavy font-bold">DBTech</a>.
            We run a team of 9 AI agents with distinct personalities. Bobby talks like a hedge fund king.
            Dwight literally thinks he&apos;s Dwight Schrute. Tony swears like a real kitchen manager. We learned
            what makes agent personalities work by building them ourselves. Now we&apos;re packaging that for everyone.
          </p>
        </section>

        <section>
          <h2 className="font-fun text-2xl font-bold mb-3 text-[#FFE66D]" style={{ WebkitTextStroke: '0.5px #1a1a1a' }}>Can I Edit?</h2>
          <p className="text-[#6b6b6b] leading-relaxed mb-4">
            YES. Everything is plain Markdown. The kits give you a professional starting point with tested
            personality structures and best practices. Then make it yours.
          </p>
          <p className="font-hand text-xl text-[#9B5DE5]">
            Think of it like buying a really good recipe, then tweaking it to your taste.
          </p>
        </section>

        <section className="text-center py-8">
          <div className="text-5xl mb-4">🦞</div>
          <h2 className="font-fun text-2xl font-bold mb-4">Ready?</h2>
          <p className="font-hand text-xl text-[#6b6b6b] mb-6">10 pre-made agents. Starting at $10. Drop them in and go.</p>
          <a href="/catalog" className="inline-block bg-[#FF6B6B] text-white px-8 py-3 rounded-full font-fun font-bold hover:bg-[#e85a5a] transition-all shadow-[3px_3px_0px_#1a1a1a]">
            Browse the Catalog
          </a>
        </section>
      </div>
    </div>
  );
}
