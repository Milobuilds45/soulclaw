export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-display text-4xl font-bold tracking-tight uppercase mb-8">About SoulClaw</h1>

      <div className="space-y-8 text-[#A3A3A3]">
        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3 uppercase">What Is This</h2>
          <p className="leading-relaxed">
            SoulClaw is the first marketplace for AI agent personalities. We sell complete personality kits
            for <a href="https://github.com/clawdbot/clawdbot" target="_blank" rel="noopener" className="text-amber-500 hover:underline">Clawdbot</a>,
            the multi-agent CLI for Claude. Each kit is a set of Markdown files that define how your agent
            thinks, talks, and operates.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3 uppercase">Why Personalities Matter</h2>
          <p className="leading-relaxed">
            A blank agent is a blank canvas. It responds, but it doesn&apos;t <em>engage</em>. Personality
            transforms an AI from a tool into a teammate. The right voice, the right attitude, the right
            boundaries. That&apos;s what separates useful from indispensable.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3 uppercase">What You Get</h2>
          <p className="leading-relaxed mb-4">Every agent kit includes:</p>
          <ul className="space-y-2">
            <li className="flex gap-3">
              <span className="font-mono text-amber-500 text-sm shrink-0">SOUL.md</span>
              <span>Core personality: voice, behavior rules, communication style, what they do and don&apos;t do</span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-amber-500 text-sm shrink-0">AGENTS.md</span>
              <span>Workspace rules: memory management, safety protocols, proactive behaviors</span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-amber-500 text-sm shrink-0">TOOLS.md</span>
              <span>Tool-specific guidance: which tools to use, when, and how</span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-amber-500 text-sm shrink-0">IDENTITY.md</span>
              <span>Quick reference card: name, creature type, vibe, emoji, avatar</span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-amber-500 text-sm shrink-0">USER.md</span>
              <span>Template for your info: timezone, preferences, communication style</span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-amber-500 text-sm shrink-0">README.md</span>
              <span>Setup guide: step-by-step installation for Clawdbot</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3 uppercase">Who Built This</h2>
          <p className="leading-relaxed">
            SoulClaw is built by <a href="https://dbtech45.com" target="_blank" rel="noopener" className="text-amber-500 hover:underline">DBTech</a>.
            We run a team of 9 AI agents with distinct personalities for everything from trading to restaurant
            operations. We learned what makes agent personalities work by building them for ourselves. Now
            we&apos;re packaging that knowledge for everyone.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3 uppercase">Can I Edit the Files</h2>
          <p className="leading-relaxed">
            Absolutely. Everything is plain Markdown. The kits give you a professional starting point with
            tested personality structures, safety protocols, and best practices. Customize anything after purchase.
          </p>
        </section>

        <section className="bg-[#111111] border border-[#262626] rounded-xl p-6">
          <h2 className="font-display text-xl font-bold text-white mb-3 uppercase">Ready?</h2>
          <p className="mb-4">10 pre-made agents. Starting at $10. Drop them in and go.</p>
          <a href="/catalog" className="inline-block bg-amber-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-amber-400 transition-colors">
            Browse the Catalog
          </a>
        </section>
      </div>
    </div>
  );
}
