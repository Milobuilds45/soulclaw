// Voice samples: before/after for each agent
export interface VoiceSample {
  prompt: string;
  generic: string;
  withSoul: string;
}

export const VOICE_SAMPLES: Record<string, VoiceSample> = {
  ghostwriter: {
    prompt: '"Write a tweet about productivity"',
    generic: 'Here are some productivity tips: 1) Prioritize your tasks 2) Take regular breaks 3) Minimize distractions. #productivity #tips',
    withSoul: "Unpopular take: Most productivity advice is written by people who've never shipped anything.\n\nThe real hack? Start before you're ready. Iterate in public. Let momentum do the work.\n\nPerfection is procrastination in a nice outfit.",
  },
  scanner: {
    prompt: '"What\'s happening with NVDA?"',
    generic: 'NVIDIA Corporation (NVDA) is a technology company that designs GPUs. The stock has shown significant growth due to AI demand. Please check current prices on a financial website.',
    withSoul: "NVDA — Down 2.3% pre-market on no news. Sector sympathy with AMD miss.\n\nFlow: Unusual put activity at $850 strike. Size: 12K contracts.\n\nMy read: Noise unless it breaks $840 support. Then we talk.\n\nWant me to set an alert?",
  },
  chief: {
    prompt: '"What\'s on my calendar today?"',
    generic: "I don't have access to your calendar. Please check your calendar application or provide me with the details of your appointments.",
    withSoul: "Thursday rundown:\n\n10am — Board call (client X quarterly). Prep: Numbers are strong. One risk flag I'll brief you on at 9:45.\n\n2pm — Dentist (45min). Blocked travel time.\n\n5pm — Drinks with Mike (optional).\n\nOpen loop: Sarah from legal never replied. Want me to follow up?",
  },
  recruiter: {
    prompt: '"Find me a senior engineer"',
    generic: 'To find a senior engineer, I recommend posting on job boards like LinkedIn, Indeed, or specialized tech job sites. Consider working with a recruiting agency.',
    withSoul: "On it. Quick calibration first:\n\nMust-haves: Years range? Tech stack? Remote OK?\n\nNice-to-haves: Startup vs big tech? Any companies to poach from?\n\nBudget: What comp range can I pitch?\n\nGive me this and I'll have 5 qualified profiles by Friday. Not resumes — people I've actually talked to.",
  },
  rep: {
    prompt: '"My order never arrived"',
    generic: 'I apologize for the inconvenience. Please provide your order number and I will look into this matter. We value your business.',
    withSoul: "Ugh, that's frustrating. Let me fix this.\n\nDrop your order number or the email you used? I'll pull it up right now.\n\nWhile I'm looking: did you get a shipping confirmation? Sometimes those sneak into spam.\n\nWe'll sort this out.",
  },
  enforcer: {
    prompt: '"I didn\'t work out today"',
    generic: "That's okay! Rest days are important too. Remember to listen to your body. Would you like tips for staying motivated?",
    withSoul: "That's two days in a row.\n\nMonday you said 'just tired.' Today you said nothing until I asked.\n\nOptions:\nA) Genuinely recovering — fine, but tell me that.\nB) You're sliding — and we both know what happens next.\n\nTomorrow. 6am. No excuses.",
  },
  hunter: {
    prompt: '"Find me a rental deal in Austin"',
    generic: 'Austin has a competitive real estate market. I recommend using Zillow, Redfin, or working with a local agent to find rental properties.',
    withSoul: "Austin Rental Scan — Running.\n\nConfirm parameters: SFH or multi? Price ceiling? Cash flow target per door?\n\nAlready flagging: Duplex in 78702 — listed 2 days, 8% under comps. Estate sale. Motivated seller.\n\nWant details or keep hunting?",
  },
  coordinator: {
    prompt: '"Who\'s picking up Emma from soccer?"',
    generic: "I don't have information about Emma's schedule. Please check with family members or review your calendar.",
    withSoul: "Emma's soccer — Thursday:\n\nDad is on it. Practice ends 5:30pm. He's got a gap after his 4pm meeting. Already confirmed this morning.\n\nHeads up: Mom has Jake's tutoring same time, different location.\n\nFriday's practice: Unassigned. Want me to put it on the family board?",
  },
  tutor: {
    prompt: '"Como se dice \'I\'m tired\'?"',
    generic: "The translation is 'Estoy cansado' (male) or 'Estoy cansada' (female). The verb 'estar' is used because tiredness is temporary.",
    withSoul: "Estoy cansado/a — that's textbook. But here's how people actually say it:\n\nMexico: \"Estoy muerto/a\" (I'm dead)\nSpain: \"Estoy reventado/a\" (I'm wrecked)\nArgentina: \"Estoy hecho/a pelota\"\n\nTry texting me tomorrow when you're actually tired. Say it in Spanish. That's how it sticks.",
  },
  briefer: {
    prompt: '"Summarize this 2-hour podcast"',
    generic: "I'd be happy to help summarize a podcast. Please provide the name and episode, or share a transcript, and I'll create a summary.",
    withSoul: "BRIEF: Tim Ferriss #745 — Naval Ravikant\n2hr 14min > 2min read\n\nTLDR: Wealth = assets earning while you sleep. Happiness = trainable skill.\n\nKey: Specific knowledge can't be taught. If trainable, it's automatable. Find what feels like play to you but work to others.\n\nAction: Audit what you do that feels like play. Build one asset with zero marginal cost.",
  },
};
