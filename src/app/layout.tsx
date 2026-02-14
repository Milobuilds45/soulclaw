import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SoulClaw — The Abyssal Agent Marketplace',
  description: 'Deep-sea AI agent personalities for Clawdbot. Stop being boring. Go Abyssal.',
  openGraph: {
    title: 'SoulClaw — Forge Your Perfect AI Agent',
    description: 'Everybody has an AI agent now. Most of them are boring as hell. Dive deeper.',
    url: 'https://soulclaw.io',
    siteName: 'SoulClaw',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SoulClaw — The Abyssal Agent Marketplace',
    description: 'Pre-made AI agent personalities for Clawdbot. Not boring ones.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased bg-[#020617] text-slate-50">
        <div className="marine-snow" />
        
        {/* Nav */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-slate-800">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="/" className="font-fun text-2xl font-bold tracking-tight flex items-center gap-2 group">
              <span className="text-3xl group-hover:scale-125 transition-transform">🦞</span>
              <span className="group-hover:text-rose-500 transition-colors">Soul<span className="text-rose-500">Claw</span></span>
            </a>
            <div className="flex items-center gap-8">
              <a href="/catalog" className="font-fun text-sm font-medium text-slate-400 hover:text-white transition-colors">CATALOG</a>
              <a href="/about" className="font-fun text-sm font-medium text-slate-400 hover:text-white transition-colors">ABOUT</a>
              <a href="/checkout" className="font-fun text-sm bg-rose-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-rose-600 transition-all shadow-lg shadow-rose-500/20 active:scale-95">
                CART (0)
              </a>
            </div>
          </div>
        </nav>

        <main className="pt-16 relative z-10">
          {children}
        </main>

        <footer className="border-t border-slate-800 mt-24 bg-[#010409]">
          <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between gap-12">
            <div>
              <div className="font-fun text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-3xl">🦞</span> Soul<span className="text-rose-500">Claw</span>
              </div>
              <p className="text-slate-400 max-w-xs font-medium text-sm leading-relaxed">
                Breeding the most aggressive, character-rich AI agents in the deep ocean. 
                Don&apos;t settle for generic fluff.
              </p>
            </div>
            <div className="flex gap-16">
              <div className="flex flex-col gap-3">
                <span className="font-fun font-bold text-xs uppercase tracking-widest text-slate-500">Product</span>
                <a href="/catalog" className="text-sm text-slate-400 hover:text-rose-400 transition-colors">The Catalog</a>
                <a href="/about" className="text-sm text-slate-400 hover:text-rose-400 transition-colors">Our Ethos</a>
              </div>
              <div className="flex flex-col gap-3">
                <span className="font-fun font-bold text-xs uppercase tracking-widest text-slate-500">Deep Connect</span>
                <a href="https://discord.com/invite/clawd" target="_blank" rel="noopener" className="text-sm text-slate-400 hover:text-rose-400 transition-colors">Discord</a>
                <a href="https://x.com/clawdbot" target="_blank" rel="noopener" className="text-sm text-slate-400 hover:text-rose-400 transition-colors">X / Twitter</a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-900 py-8 text-center font-fun text-xs text-slate-500 tracking-widest uppercase">
            &copy; 2026 SOULCLAW INTERSTELLAR OCEANIC · ALL RIGHTS RESERVED
          </div>
        </footer>
      </body>
    </html>
  );
}
