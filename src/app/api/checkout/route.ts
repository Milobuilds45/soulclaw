import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

// Derek's Stripe Price IDs — mapped by agent count
const PRICE_IDS: Record<number, string> = {
  1: process.env.STRIPE_PRICE_1!,
  2: process.env.STRIPE_PRICE_2!,
  3: process.env.STRIPE_PRICE_3!,
  4: process.env.STRIPE_PRICE_4!,
  5: process.env.STRIPE_PRICE_5!,
};

export async function POST(request: NextRequest) {
  try {
    const { email, items } = await request.json();

    if (!email || !items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: 'Missing email or items' }, { status: 400 });
    }

    const count = Math.min(items.length, 5);
    const priceId = PRICE_IDS[count];

    if (!priceId) {
      return NextResponse.json({ error: 'Invalid cart size' }, { status: 400 });
    }

    const agentNames = items.map((i: { name: string }) => i.name).join(', ');
    const agentIds = items.map((i: { agentId: string }) => i.agentId).join(',');

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer_email: email,
      line_items: [{
        price: priceId,
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://soulclaw.io'}/download/{CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://soulclaw.io'}/checkout`,
      metadata: {
        agent_ids: agentIds,
        agent_names: agentNames,
        agent_count: String(count),
        email,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
