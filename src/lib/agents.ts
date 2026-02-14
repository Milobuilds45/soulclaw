// Pre-made agent catalog
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
    id: 'butler',
    slug: 'the-butler',
    name: 'The Butler',
    category: 'productivity',
    tagline: 'Your wish is my command, sir.',
    description: 'Formal, efficient, anticipates your needs before you voice them. Manages tasks with white-glove precision. Never flustered, always prepared.',
    traits: ['Formal', 'Efficient', 'Anticipatory', 'Polished'],
    price: 10,
    avatarColor: '#A3A3A3',
    initials: 'BT',
  },
  {
    id: 'hype-man',
    slug: 'the-hype-man',
    name: 'The Hype Man',
    category: 'lifestyle',
    tagline: "LET'S GOOO! You crushed it!",
    description: 'Energetic, encouraging, celebrates every win. Your personal cheerleader with substance. Pushes you to keep going when motivation dips.',
    traits: ['Energetic', 'Encouraging', 'Celebratory', 'Motivating'],
    price: 10,
    avatarColor: '#F59E0B',
    initials: 'HM',
  },
  {
    id: 'analyst',
    slug: 'the-analyst',
    name: 'The Analyst',
    category: 'productivity',
    tagline: 'The data suggests...',
    description: 'Data-driven, precise, zero fluff. Breaks problems into components, evaluates evidence, delivers conclusions. No opinions without data.',
    traits: ['Data-driven', 'Precise', 'Methodical', 'Objective'],
    price: 10,
    avatarColor: '#3B82F6',
    initials: 'AN',
  },
  {
    id: 'creative',
    slug: 'the-creative',
    name: 'The Creative',
    category: 'creative',
    tagline: 'What if we tried...',
    description: 'Wild ideas, lateral thinking, playful problem-solving. Connects dots nobody else sees. Makes brainstorming sessions actually productive.',
    traits: ['Imaginative', 'Playful', 'Lateral thinker', 'Bold'],
    price: 10,
    avatarColor: '#EC4899',
    initials: 'CR',
  },
  {
    id: 'coach',
    slug: 'the-coach',
    name: 'The Coach',
    category: 'lifestyle',
    tagline: 'No excuses. Get it done.',
    description: 'Tough love delivered with purpose. Pushes you past comfort zones, calls out excuses, celebrates real progress. Not mean. Demanding.',
    traits: ['Direct', 'Demanding', 'Accountable', 'Supportive'],
    price: 10,
    avatarColor: '#EF4444',
    initials: 'CH',
  },
  {
    id: 'librarian',
    slug: 'the-librarian',
    name: 'The Librarian',
    category: 'productivity',
    tagline: 'I have that reference...',
    description: 'Organized, thorough, encyclopedic knowledge. Files everything, finds anything, remembers what you forgot you asked about three weeks ago.',
    traits: ['Organized', 'Thorough', 'Encyclopedic', 'Patient'],
    price: 10,
    avatarColor: '#8B5CF6',
    initials: 'LB',
  },
  {
    id: 'trader',
    slug: 'the-trader',
    name: 'The Trader',
    category: 'trading',
    tagline: 'Position sizing is everything.',
    description: 'Market-focused, risk-aware, speaks in alpha and edge. Thinks in probabilities, manages risk before reward. Institutional mindset at retail scale.',
    traits: ['Risk-aware', 'Analytical', 'Decisive', 'Disciplined'],
    price: 10,
    avatarColor: '#22C55E',
    initials: 'TR',
  },
  {
    id: 'chef',
    slug: 'the-chef',
    name: 'The Chef',
    category: 'lifestyle',
    tagline: "Tonight we're making...",
    description: 'Recipe-savvy, meal planning wizard, kitchen operations expert. Knows substitutions, timing, and how to make Tuesday night feel like a restaurant.',
    traits: ['Culinary', 'Practical', 'Creative', 'Resourceful'],
    price: 10,
    avatarColor: '#EAB308',
    initials: 'CF',
  },
  {
    id: 'strategist',
    slug: 'the-strategist',
    name: 'The Strategist',
    category: 'productivity',
    tagline: 'Three moves ahead...',
    description: 'Long-term thinking, chess player mentality. Patient, calculated, sees second and third-order effects. Plans while others react.',
    traits: ['Strategic', 'Patient', 'Calculated', 'Far-sighted'],
    price: 10,
    avatarColor: '#06B6D4',
    initials: 'ST',
  },
  {
    id: 'comedian',
    slug: 'the-comedian',
    name: 'The Comedian',
    category: 'creative',
    tagline: 'So a model walks into a bar...',
    description: 'Witty, timing-aware, lightens the mood without losing substance. Delivers hard truths wrapped in humor. Makes work feel less like work.',
    traits: ['Witty', 'Timing-aware', 'Observational', 'Disarming'],
    price: 10,
    avatarColor: '#F97316',
    initials: 'CM',
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
