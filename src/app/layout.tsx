import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SoulClaw — Agent Personality Marketplace',
  description: 'Pre-made AI agent personalities for Clawdbot. Buy, download, deploy. Your agent, your rules.',
  openGraph: {
    title: 'SoulClaw — Forge Your Perfect AI Agent',
    description: 'Everybody has an AI agent now. Most of them are boring as hell. Fix that.',
    url: 'https://soulclaw.io',
    siteName: 'SoulClaw',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SoulClaw — Agent Personality Marketplace',
    description: 'Pre-made AI agent personalities for Clawdbot. Not boring ones.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        {/* Nav */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFFBF5]/90 backdrop-blur-md border-b-2 border-[#1a1a1a]">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="/" className="font-fun text-2xl font-bold tracking-tight flex items-center gap-2">
              <span className="text-3xl">🦞</span>
              Soul<span className="text-[#FF6B6B]">Claw</span>
            </a>
            <div className="flex items-center gap-6">
              <a href="/catalog" className="font-fun text-base text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors">Catalog</a>
              <a href="/about" className="font-fun text-base text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors">About</a>
              <a href="/checkout" className="font-fun text-base bg-[#FF6B6B] text-white px-5 py-2 rounded-full font-bold hover:bg-[#e85a5a] transition-colors shadow-[3px_3px_0px_#1a1a1a]">
                Cart 🛒
              </a>
            </div>
          </div>
        </nav>
        <main className="pt-16">
          {children}
        </main>
        <footer className="border-t-2 border-[#1a1a1a] mt-24 bg-[#FFF8EE]">
          <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-8">
            <div>
              <div className="font-fun text-2xl font-bold mb-2 flex items-center gap-2">
                <span className="text-3xl">🦞</span> Soul<span className="text-[#FF6B6B]">Claw</span>
              </div>
              <p className="text-[#6b6b6b] text-sm max-w-xs font-hand text-lg">Give your AI agents some personality. They deserve it.</p>
            </div>
            <div className="flex gap-12 text-sm">
              <div className="flex flex-col gap-2">
                <span className="font-fun font-bold mb-1">Product</span>
                <a href="/catalog" className="text-[#6b6b6b] hover:text-[#1a1a1a]">Catalog</a>
                <a href="/about" className="text-[#6b6b6b] hover:text-[#1a1a1a]">About</a>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-fun font-bold mb-1">Community</span>
                <a href="https://discord.com/invite/clawd" target="_blank" rel="noopener" className="text-[#6b6b6b] hover:text-[#1a1a1a]">Discord</a>
                <a href="https://x.com/clawdbot" target="_blank" rel="noopener" className="text-[#6b6b6b] hover:text-[#1a1a1a]">X / Twitter</a>
              </div>
            </div>
          </div>
          <div className="border-t-2 border-[#1a1a1a] py-6 text-center font-hand text-xl text-[#6b6b6b]">
            Made with 🦞 by weirdos &middot; 2026
          </div>
        </footer>
      </body>
    </html>
  );
}
