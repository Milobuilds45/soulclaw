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
        <div className="text-6xl mb-6 animate-bounce">🦞</div>
        <div className="font-fun text-2xl font-bold mb-4">Verifying payment...</div>
        <p className="font-hand text-xl text-[#6b6b6b]">Just a sec. Crunching claws.</p>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <div className="text-6xl mb-6">😬</div>
        <div className="font-fun text-2xl font-bold mb-4 text-[#FF6B6B]">Something Went Wrong</div>
        <p className="text-[#6b6b6b] mb-8">{error || 'Order not found. Check your email for the download link.'}</p>
        <a href="/" className="font-fun text-[#FF6B6B] font-bold hover:underline decoration-wavy">Back to Home</a>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      {/* Success */}
      <div className="text-center mb-12">
        <div className="text-7xl mb-6">🎉</div>
        <h1 className="font-fun text-4xl font-bold mb-2">You&apos;re In!</h1>
        <p className="font-hand text-2xl text-[#6b6b6b]">
          Your agent{order.agents.length > 1 ? 's are' : ' is'} ready to come alive.
        </p>
      </div>

      {/* Download Cards */}
      <div className="space-y-4 mb-12">
        {order.agents.map((agentId, i) => (
          <div
            key={agentId}
            className="bg-white border-3 border-[#1a1a1a] rounded-2xl p-6"
            style={{ borderWidth: '3px', boxShadow: '5px 5px 0px #4ECDC4' }}
          >
            <div className="font-fun text-xl font-bold mb-1">{order.agentNames[i]}</div>
            <div className="font-hand text-base text-[#6b6b6b] mb-4">Personality Kit</div>
            <a
              href={order.downloadUrls[agentId] || '#'}
              className="block w-full text-center bg-[#4ECDC4] text-white py-3 rounded-full font-fun font-bold border-2 border-[#1a1a1a] shadow-[3px_3px_0px_#1a1a1a] hover:shadow-[1px_1px_0px_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              download
            >
              Download ZIP 📦
            </a>
          </div>
        ))}
      </div>

      {/* Setup */}
      <div className="bg-white border-3 border-[#1a1a1a] rounded-2xl p-6 tilt-slight" style={{ borderWidth: '3px', boxShadow: '5px 5px 0px #9B5DE5' }}>
        <h2 className="font-fun text-xl font-bold mb-4">Setup Guide</h2>
        <ol className="space-y-3 font-hand text-lg text-[#6b6b6b]">
          <li className="flex gap-3">
            <span className="text-[#FF6B6B] font-bold">1.</span>
            <span>Unzip the downloaded folder</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#4ECDC4] font-bold">2.</span>
            <span>Copy all files into your Clawdbot agent workspace</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#9B5DE5] font-bold">3.</span>
            <span>Restart the agent (or start a new session)</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#00BBF9] font-bold">4.</span>
            <span>Done! Your agent is alive with personality 🦞</span>
          </li>
        </ol>
      </div>

      <div className="text-center mt-8 space-y-3">
        <p className="font-hand text-base text-[#6b6b6b]">Download link also sent to <span className="font-bold">{order.email}</span></p>
        <a href="https://discord.com/invite/clawd" target="_blank" rel="noopener" className="font-fun text-[#9B5DE5] font-bold hover:underline decoration-wavy block">
          Need help? Join our Discord
        </a>
      </div>
    </div>
  );
}
