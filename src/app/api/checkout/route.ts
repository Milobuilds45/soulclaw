import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  try {
    const { email, items } = await request.json();

    if (!email || !items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: 'Missing email or items' }, { status: 400 });
    }

    // Derek-approved pricing tiers
    const PRICE_CENTS: Record<number, number> = {
      1: 1000,
      2: 1700,
      3: 2200,
      4: 2700,
      5: 3000,
    };
    const count = items.length;
    const totalCents = count <= 5
      ? PRICE_CENTS[count]
      : 3000 + (count - 5) * 500;

    const agentNames = items.map((i: { name: string }) => i.name).join(', ');
    const agentIds = items.map((i: { agentId: string }) => i.agentId).join(',');

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer_email: email,
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: count === 1
              ? `SoulClaw Agent: ${agentNames}`
              : `SoulClaw ${count}-Agent Pack: ${agentNames}`,
            description: `${count} agent personality kit${count > 1 ? 's' : ''} for Clawdbot`,
          },
          unit_amount: totalCents,
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://soulclaw.io'}/download/{CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://soulclaw.io'}/checkout`,
      metadata: {
        agent_ids: agentIds,
        agent_names: agentNames,
        email,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
