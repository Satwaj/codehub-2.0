/* ═══════════════════════════════════════════
   TFLCLUB — Ultra Premium Elegant Constants
   ═══════════════════════════════════════════ */
import {
  Dumbbell, PieChart, TrendingUp, Lightbulb, BookOpen, GlassWater,
  Trophy, Medal, Award, Sparkles, Zap, Star, Mountain, Target, CheckCircle2, Home, Cross, X, CircleDollarSign
} from 'lucide-react';

export const COLORS = {
  primary: '#EAB308',
  primaryDark: '#CA8A04',
  primaryLight: '#FEF08A',
  accentGold: '#FACC15',
  accentDark: '#0A0A0A',
  bgDark: '#0A0A0A',
  bgDark2: '#121212',
  bgDarkCard: '#1A1A1A',
  bgLight: '#FFFFFF',
  bgLight2: '#F8FAF0',
  textPrimary: '#FFFFFF',
  textSecondary: '#A1A1AA',
  borderDark: '#27272A',
  borderLight: '#E4E4E7',
};

export const MARQUEE_TEXT = " 30 Traders  •  5 Days  •  3+ Profitable Mentors  •  1 Villa  •  ₹45,000+ Monthly Funding  •  Join Now  •   30 Traders  •  5 Days  •  3+ Profitable Mentors  •  1 Villa  •  ₹45,000+ Monthly Funding  •  Join Now  •  ";

export const DAILY_SCHEDULE = [
  { icon: Dumbbell, title: 'Morning Fitness & Breathwork', desc: 'Start the day with pure clarity and focus.' },
  { icon: PieChart, title: 'Market Preparation', desc: 'Pre-market analysis and bias formation.' },
  { icon: TrendingUp, title: 'Live Open Trading', desc: 'Execute strategies perfectly alongside real mentors.' },
  { icon: Lightbulb, title: 'Strategy Deep Dives', desc: 'High-level systems, edges, and alpha generation.' },
  { icon: BookOpen, title: 'Journaling & Review', desc: 'Meticulous tracking and post-market reflection.' },
  { icon: GlassWater, title: 'Night Networking', desc: 'Connect, detox, and build lifelong networks.' },
];

export const TOP_REWARDS = [
  { rankIcon: Trophy, title: 'First Place', prize: '$100K', subtitle: '1-Step Evaluation', value: '$400 value', color: 'bg-gradient-to-br from-yellow-400 to-amber-600', textColor: 'text-white' },
  { rankIcon: Medal, title: 'Second Place', prize: '$50K', subtitle: 'Evaluation Account', value: '$200 value', color: 'bg-gradient-to-br from-gray-300 to-gray-500', textColor: 'text-white' },
  { rankIcon: Award, title: 'Third Place', prize: '$25K', subtitle: 'Evaluation Account', value: '$125 value', color: 'bg-gradient-to-br from-orange-400 to-red-600', textColor: 'text-white' },
];

export const EXTRA_REWARDS = [
  { amount: '$500', label: 'Scholarship' },
  { amount: '$300', label: 'Scholarship' },
  { amount: '$150', label: 'Scholarship' },
  { amount: '₹5000', label: 'Instant Discount' },
];

export const UPCOMING_EVENTS = [
  {
    season: 'Season 11',
    location: 'Manali, India',
    price: '₹55,000',
    dates: 'TBA',
    seatsLeft: 8,
    totalSeats: 30,
    status: 'EARLY BIRD',
    features: ['5 Days', 'Ultra-Luxury Villa', '3+ Elite Mentors', '$100K Tournament Funding'],
  },
];

export const PAST_EVENTS = [
  { season: 1, location: 'Mussoorie', price: '₹22,500', highlight: '' },
  { season: 2, location: 'Shimla', price: '₹35,000', highlight: '' },
  { season: 3, location: 'Goa', price: '₹45,000', highlight: '' },
  { season: 4, location: 'Mussoorie', price: '₹45,000', highlight: '+ $100K Funding' },
  { season: 5, location: 'Manali', price: '₹45,000', highlight: '+ $50K Account for All' },
  { season: 6, location: 'Kasol', price: '₹50,000', highlight: '' },
  { season: 7, location: 'Bir Billing', price: '₹50,000', highlight: '' },
  { season: 8, location: 'Thailand', price: '₹1.5L', highlight: '6 Days International' },
  { season: 9, location: 'Thailand', price: '₹1.5L', highlight: '6 Days International' },
  { season: 10, location: 'Bali', price: '₹2L', highlight: '7 Days International' },
];

export const PERSONAS = [
  {
    title: 'Aspiring Traders',
    subtitle: 'Beginners & Novices',
    icon: Sparkles,
    color: 'from-emerald-400 to-teal-500',
    points: [
      'Learn from real verified traders',
      'Avoid expensive beginner mistakes',
      'Get a highly personalized roadmap',
      'Trade on a $100K tournament account safely',
      'Top 3 traders win direct funding',
    ],
  },
  {
    title: 'Breakeven Traders',
    subtitle: 'Intermediate Stage',
    icon: Zap,
    color: 'from-blue-400 to-indigo-500',
    points: [
      'Master risk, probability & true consistency',
      'Adopt a structured, emotionless routine',
      'Dramatically cut down overtrading',
      'Fix execution & deep-level psychology',
      'Network with serious performing traders',
    ],
  },
  {
    title: 'Profitable Traders',
    subtitle: 'Advanced Veterans',
    icon: Star,
    color: 'from-amber-400 to-orange-500',
    points: [
      'Take a well-deserved, luxurious break',
      'Detox from the daily screen noise',
      'Share your edge & impact upcoming talent',
      'Trade in ultra-peaceful, focused environments',
      'Unlock exclusive networking & masterminds',
    ],
  },
];

export const TRADER_JOURNEYS = [
  { name: 'Tukaram', payout: 20000, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80', quote: 'TFLCLUB changed how I view market mechanics completely.' },
  { name: 'Faizan', payout: 10000, img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80', quote: 'Met incredible mentors, got funded on day 4.' },
  { name: 'Faraz', payout: 10000, img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=80', quote: 'Discipline wasn\'t my strong suit until the bootcamp.' },
  { name: 'Vansh', payout: 7000, img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=80', quote: 'The sheer value delivered is completely insane.' },
  { name: 'Mukul', payout: 6000, img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=800&auto=format&fit=crop&q=80', quote: 'Finally found my edge after 3 years of failing.' },
];

export const FAQ_DATA = [
  {
    q: 'Can I get a refund?',
    a: 'Full refund if informed early. No refund within 10 days of the event. We understand plans change — just communicate with us in advance.',
  },
  {
    q: 'Will I become profitable after TFLCLUB?',
    a: "No — but we provide resources, environment, and opportunities to increase your chances significantly. Profitability comes from pure discipline, which TFLCLUB cultivates perfectly.",
  },
  {
    q: 'Can I truly learn strategies in 5 days?',
    a: 'Absolutely. By observing and interacting with mentors intimately, you will absorb behavioral frameworks—not just technical indicators.',
  },
  {
    q: 'What exactly am I paying for?',
    a: 'Ultra-luxurious stay, exclusive catering, trading environment, direct mentorship access, tournament accounts, and elite networking.',
  },
  {
    q: 'Do I need prior trading experience?',
    a: 'Not at all. TFLCLUB welcomes traders at all levels — from complete beginners to highly profitable veterans.',
  },
];

export const INCLUDED = [
  'Luxury Stay (Shared Premium Villa)',
  '3 Elite Executive Meals Daily',
  'All Snacks & Refreshments',
  'Local VIP Transport',
  'Exclusive Tournament Account',
  'Advanced Trading Resources',
];

export const NOT_INCLUDED = [
  'Flights / Train Travel',
  'Personal Expenses',
  'Extra Food / Private Cabs',
  'Personal Add-ons',
  'Alcohol / Nightlife',
  'Extended Stay Pre/Post Event',
];

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/tflclub',
  twitter: 'https://twitter.com/tflclub',
  discord: 'https://discord.gg/tflclub',
  telegram: 'https://t.me/tflclub',
  youtube: 'https://youtube.com/@tflclub',
};

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Rewards', href: '#rewards' },
  { label: 'Events', href: '#events' },
  { label: 'Mentors', href: '#mentors' },
  { label: 'FAQ', href: '#faq' },
];
