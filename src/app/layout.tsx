import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'SoulClaw — Agent Personality Marketplace',
  description: 'Pre-made AI agent personalities for Clawdbot. Buy, download, deploy. Your agent, your rules.',
  openGraph: {
    title: 'SoulClaw — Forge Your Perfect AI Agent',
    description: 'Pre-made personalities. Custom builds. Ready for Clawdbot.',
    url: 'https://soulclaw.io',
    siteName: 'SoulClaw',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SoulClaw — Agent Personality Marketplace',
    description: 'Pre-made AI agent personalities for Clawdbot.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#0A0A0A] text-[#FAFAFA] antialiased min-h-screen">
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#262626] bg-[#0A0A0A]/80 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="/" className="font-display text-xl font-bold tracking-tight uppercase">
              Soul<span className="text-amber-500">Claw</span>
            </a>
            <div className="flex items-center gap-6">
              <a href="/catalog" className="text-sm text-[#A3A3A3] hover:text-white transition-colors">Catalog</a>
              <a href="/about" className="text-sm text-[#A3A3A3] hover:text-white transition-colors">About</a>
              <a href="/checkout" className="text-sm bg-amber-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-amber-400 transition-colors" id="nav-cart">
                Cart
              </a>
            </div>
          </div>
        </nav>
        <main className="pt-16">
          {children}
        </main>
        <footer className="border-t border-[#262626] mt-24">
          <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-8">
            <div>
              <div className="font-display text-lg font-bold tracking-tight uppercase mb-2">
                Soul<span className="text-amber-500">Claw</span>
              </div>
              <p className="text-[#A3A3A3] text-sm max-w-xs">Agent personality marketplace for Clawdbot. Buy, download, deploy.</p>
            </div>
            <div className="flex gap-12 text-sm text-[#A3A3A3]">
              <div className="flex flex-col gap-2">
                <span className="text-white font-semibold mb-1">Product</span>
                <a href="/catalog" className="hover:text-white transition-colors">Catalog</a>
                <a href="/about" className="hover:text-white transition-colors">About</a>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-white font-semibold mb-1">Community</span>
                <a href="https://discord.com/invite/clawd" target="_blank" rel="noopener" className="hover:text-white transition-colors">Discord</a>
                <a href="https://x.com/clawdbot" target="_blank" rel="noopener" className="hover:text-white transition-colors">X / Twitter</a>
              </div>
            </div>
          </div>
          <div className="border-t border-[#262626] py-6 text-center text-xs text-[#737373]">
            2026 SoulClaw. Built by DBTech.
          </div>
        </footer>
      </body>
    </html>
  );
}
