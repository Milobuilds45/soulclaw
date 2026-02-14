import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ sessionId: string }> }
) {
  try {
    const { sessionId } = await params;

    if (!sessionId || sessionId === 'undefined') {
      return NextResponse.json({ success: false, error: 'No session ID' }, { status: 400 });
    }

    // Retrieve checkout session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== 'paid') {
      return NextResponse.json({ success: false, error: 'Payment not completed' }, { status: 402 });
    }

    const agentIds = (session.metadata?.agent_ids || '').split(',').filter(Boolean);
    const agentNames = (session.metadata?.agent_names || '').split(', ').filter(Boolean);
    const email = session.metadata?.email || session.customer_email || '';

    // Generate download URLs for each agent
    // In MVP, these point to static ZIPs in /public/agents/
    // Later: Supabase Storage signed URLs
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://soulclaw.io';
    const downloadUrls: Record<string, string> = {};
    agentIds.forEach((id: string) => {
      downloadUrls[id] = `${baseUrl}/agents/${id}.zip`;
    });

    return NextResponse.json({
      success: true,
      email,
      agents: agentIds,
      agentNames,
      downloadUrls,
    });
  } catch (error) {
    console.error('Download lookup error:', error);
    return NextResponse.json(
      { success: false, error: 'Unable to verify order. Check your email for the download link.' },
      { status: 500 }
    );
  }
}
