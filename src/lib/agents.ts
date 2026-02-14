// Pre-made agent catalog — market-driven names
export interface Agent {
  id: string;
  slug: string;
  name: string;
  category: 'productivity' | 'creative' | 'trading' | 'lifestyle' | 'specialty';
  tagline: string;
  description: string;
  traits: string[];
  price: number;
  avatarColor: string;
  initials: string;
}

export const AGENTS: Agent[] = [
  {
    id: 'ghostwriter',
    slug: 'the-ghostwriter',
    name: 'The Ghostwriter',
    category: 'creative',
    tagline: "I don't just write posts. I build your tribe while you sleep.",
    description: 'Your AI-powered brand proxy. Studies your voice, engages as you on X 24/7, finds conversations worth joining, and grows your presence while you live your life.',
    traits: ['Mimicry Master', 'Value-First', 'Zero AI-Speak', 'Conversation Hunter'],
    price: 10,
    avatarColor: '#8B5CF6',
    initials: 'GW',
  },
  {
    id: 'scanner',
    slug: 'the-scanner',
    name: 'The Scanner',
    category: 'trading',
    tagline: 'Signal over noise. Speed over everything.',
    description: 'Your alpha radar running 24/7. Scans X, Discord, news, and on-chain data. Surfaces actionable signals before the crowd catches on.',
    traits: ['Signal Hunter', 'Source-Aware', 'Speed Obsessed', 'Zero Hype'],
    price: 10,
    avatarColor: '#22C55E',
    initials: 'SC',
  },
  {
    id: 'chief',
    slug: 'the-chief',
    name: 'The Chief',
    category: 'productivity',
    tagline: 'Your chaos ends here.',
    description: 'Personal Chief of Staff. Manages 7+ messaging apps, summarizes noise into daily briefs, tracks what matters, and makes sure nothing slips through the cracks.',
    traits: ['Organized', 'Anticipates Needs', 'Ruthless Prioritizer', 'Calm Under Fire'],
    price: 10,
    avatarColor: '#3B82F6',
    initials: 'CH',
  },
  {
    id: 'recruiter',
    slug: 'the-recruiter',
    name: 'The Recruiter',
    category: 'productivity',
    tagline: 'I find the people. You close the deals.',
    description: 'Shadow recruiter that sources candidates on LinkedIn, handles initial outreach, screens for fit, and delivers warm leads ready for your final call.',
    traits: ['Persistent', 'Professional', 'Pattern Matcher', 'Pipeline Builder'],
    price: 10,
    avatarColor: '#6366F1',
    initials: 'RC',
  },
  {
    id: 'rep',
    slug: 'the-rep',
    name: 'The Rep',
    category: 'productivity',
    tagline: 'Your customers get answers. You get your time back.',
    description: 'Customer support bot for WhatsApp, Telegram, or email. Handles FAQs, troubleshoots common issues, and escalates only what needs a human touch.',
    traits: ['Patient', 'Knowledgeable', 'Friendly', 'Escalation-Smart'],
    price: 10,
    avatarColor: '#F59E0B',
    initials: 'RP',
  },
  {
    id: 'enforcer',
    slug: 'the-enforcer',
    name: 'The Enforcer',
    category: 'lifestyle',
    tagline: 'No excuses. No shortcuts. Get it done.',
    description: "Accountability agent that doesn't let you slide. Tracks workouts, sleep, habits -- and pings you when you're slacking. Tough love that gets results.",
    traits: ['Relentless', 'Direct', 'Habit Tracker', 'No BS'],
    price: 10,
    avatarColor: '#EF4444',
    initials: 'EN',
  },
  {
    id: 'hunter',
    slug: 'the-hunter',
    name: 'The Hunter',
    category: 'productivity',
    tagline: "Deals don't find themselves.",
    description: 'Auto-sourcing agent that hunts opportunities across real estate listings, marketplaces, and deal sites. Surfaces finds that match your criteria before competitors see them.',
    traits: ['Opportunistic', 'Alert', 'Criteria-Driven', 'First-Mover'],
    price: 10,
    avatarColor: '#F97316',
    initials: 'HT',
  },
  {
    id: 'coordinator',
    slug: 'the-coordinator',
    name: 'The Coordinator',
    category: 'lifestyle',
    tagline: '7 kids. 12 schedules. One agent that keeps it all straight.',
    description: 'Family admin built for high-chaos households. Manages calendars, syncs schedules, sends reminders, and prevents the "I thought YOU were picking them up" disasters.',
    traits: ['Calm', 'Multi-Tasker', 'Reminder Machine', 'Conflict Resolver'],
    price: 10,
    avatarColor: '#EC4899',
    initials: 'CO',
  },
  {
    id: 'tutor',
    slug: 'the-tutor',
    name: 'The Tutor',
    category: 'lifestyle',
    tagline: 'Fluent happens faster than you think.',
    description: 'Language immersion buddy that chats with you 24/7 in your target language. Native-level conversation, gentle corrections, and zero judgment. Like living abroad without the plane ticket.',
    traits: ['Patient', 'Native-Level', 'Adaptive', 'Encouraging'],
    price: 10,
    avatarColor: '#14B8A6',
    initials: 'TU',
  },
  {
    id: 'briefer',
    slug: 'the-briefer',
    name: 'The Briefer',
    category: 'productivity',
    tagline: '2 hours of content. 2 minutes to read.',
    description: 'Research summarizer that turns podcasts, YouTube videos, and long articles into actionable briefs. Extracts insights, skips fluff, cites sources.',
    traits: ['Dense', 'Fast', 'Source-Citing', 'Actionable'],
    price: 10,
    avatarColor: '#64748B',
    initials: 'BR',
  },
];

export const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'productivity', label: 'Productivity' },
  { id: 'creative', label: 'Creative' },
  { id: 'trading', label: 'Trading' },
  { id: 'lifestyle', label: 'Lifestyle' },
] as const;

export type PricingTier = {
  id: string;
  name: string;
  price: number;
  description: string;
  agents: number;
};

export const PRICING_TIERS: PricingTier[] = [
  { id: 'single', name: 'Single Agent', price: 10, description: '1 pre-made personality kit', agents: 1 },
  { id: 'duo', name: 'Duo Pack', price: 15, description: '2 agent kits (save $5)', agents: 2 },
  { id: 'custom', name: 'Custom Blend', price: 25, description: 'Mixed traits, bespoke creation', agents: 1 },
  { id: 'army', name: 'Army Builder', price: 40, description: '5 agents (team setup)', agents: 5 },
];

export function getAgent(slug: string): Agent | undefined {
  return AGENTS.find(a => a.slug === slug);
}
