'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

interface OrderData {
  success: boolean;
  email: string;
  agents: string[];
  agentNames: string[];
  downloadUrls: Record<string, string>;
  error?: string;
}

export default function DownloadPage() {
  const params = useParams();
  const sessionId = params.sessionId as string;
  const [order, setOrder] = useState<OrderData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!sessionId) return;
    fetch(`/api/download/${sessionId}`)
      .then(r => r.json())
      .then(data => {
        if (data.success) {
          setOrder(data);
          // Clear cart after successful purchase
          try { localStorage.removeItem('soulclaw-cart'); } catch {}
        } else {
          setError(data.error || 'Order not found');
        }
      })
      .catch(() => setError('Failed to load order'))
      .finally(() => setLoading(false));
  }, [sessionId]);

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <div className="font-display text-2xl font-bold mb-4">Verifying payment...</div>
        <p className="text-[#737373]">This will only take a moment.</p>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <div className="font-display text-2xl font-bold mb-4 text-red-400">Something Went Wrong</div>
        <p className="text-[#A3A3A3] mb-8">{error || 'Order not found. Check your email for the download link.'}</p>
        <a href="/" className="text-amber-500 hover:underline">Back to Home</a>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      {/* Success Header */}
      <div className="text-center mb-12">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center mx-auto mb-6">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h1 className="font-display text-3xl font-bold tracking-tight uppercase mb-2">Payment Confirmed</h1>
        <p className="text-[#A3A3A3]">Your agent kit{order.agents.length > 1 ? 's are' : ' is'} ready.</p>
      </div>

      {/* Download Cards */}
      <div className="space-y-4 mb-12">
        {order.agents.map((agentId, i) => (
          <div key={agentId} className="bg-[#111111] border border-[#262626] rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="font-display text-lg font-bold">{order.agentNames[i]}</div>
                <div className="text-xs text-[#737373]">Agent Personality Kit</div>
              </div>
            </div>
            <a
              href={order.downloadUrls[agentId] || '#'}
              className="block w-full text-center bg-amber-500 text-black py-3 rounded-lg font-bold text-sm hover:bg-amber-400 transition-colors"
              download
            >
              Download ZIP
            </a>
          </div>
        ))}
      </div>

      {/* Setup Instructions */}
      <div className="bg-[#111111] border border-[#262626] rounded-xl p-6">
        <h2 className="font-display text-lg font-bold mb-4 uppercase">Setup Instructions</h2>
        <ol className="space-y-3 text-sm text-[#A3A3A3]">
          <li className="flex gap-3">
            <span className="font-mono text-amber-500 shrink-0">1.</span>
            <span>Unzip the downloaded folder</span>
          </li>
          <li className="flex gap-3">
            <span className="font-mono text-amber-500 shrink-0">2.</span>
            <span>Copy all files into your Clawdbot agent workspace directory</span>
          </li>
          <li className="flex gap-3">
            <span className="font-mono text-amber-500 shrink-0">3.</span>
            <span>Restart the agent (or start a new session)</span>
          </li>
          <li className="flex gap-3">
            <span className="font-mono text-amber-500 shrink-0">4.</span>
            <span>Done. Your agent is alive with personality.</span>
          </li>
        </ol>
      </div>

      <div className="text-center mt-8 space-y-3">
        <p className="text-xs text-[#737373]">Download link sent to <span className="text-[#A3A3A3]">{order.email}</span>. Link expires in 24 hours.</p>
        <a href="https://discord.com/invite/clawd" target="_blank" rel="noopener" className="text-amber-500 text-sm hover:underline block">
          Need help? Join our Discord
        </a>
      </div>
    </div>
  );
}
