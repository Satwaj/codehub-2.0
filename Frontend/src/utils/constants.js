/* ═══════════════════════════════════════════
   TFLCLUB — Premium Trading Constants
   Mapped from Forge reference document
   ═══════════════════════════════════════════ */
import {
  Dumbbell, TrendingUp, Lightbulb, BookOpen, GlassWater,
  Trophy, Medal, Award, Sparkles, Zap, Star, BarChart3, Target, Brain, Wallet, Shield, Users, Clock, MapPin
} from 'lucide-react';

export const COLORS = {
  primary: '#EAB308',
  primaryDark: '#CA8A04',
  primaryLight: '#FEF08A',
  accentGold: '#FACC15',
  accentGreen: '#22C55E',
  neonGreen: '#00FF88',
  accentBlue: '#3B82F6',
  accentRed: '#EF4444',
  bgDark: '#000000',
  bgDark2: '#0A0A0A',
  bgCard: '#111111',
  textPrimary: '#FFFFFF',
  textSecondary: '#A1A1AA',
  borderDark: '#1A1A1A',
};

export const MARQUEE_TEXT = " SEASON 11 MANALI ₹55K  •  $100K TOURNAMENT  •  30 INVITE-ONLY SPOTS  •  5 DAYS LIVE TRADING  •  3+ VERIFIED MENTORS  •  $175K+ IN FUNDING  •  APPLY NOW  •  ";

export const STATS_BAR = [
  { number: '10+', label: 'Seasons Completed' },
  { number: '30', label: 'Traders Per Bootcamp' },
  { number: '300K+', label: 'Social Reach / Season' },
  { number: '100%', label: 'Verified Accounts' },
];

export const DAILY_SCHEDULE = [
  { icon: Dumbbell, title: 'Morning Fitness & Breathwork', desc: 'Start the day with pure clarity, deep focus, and zero-screen time. Build the mental edge before markets open.', phase: 'DAWN' },
  { icon: BarChart3, title: 'Market Preparation', desc: 'Pre-market analysis, bias formation, and key level identification with verified profitable mentors.', phase: 'PREP' },
  { icon: TrendingUp, title: 'Live Open Trading', desc: 'Execute real strategies on your $100K tournament account alongside mentors who trade live with you.', phase: 'LIVE' },
  { icon: Lightbulb, title: 'Strategy Deep Dives', desc: 'High-level systems, risk frameworks, and alpha generation sessions. Pure edge-building content.', phase: 'LEARN' },
  { icon: BookOpen, title: 'Journaling & Review', desc: 'Meticulous tracking with ProJournX. Build your behaviour report and document every decision.', phase: 'REVIEW' },
  { icon: GlassWater, title: 'Night Networking', desc: 'Connect, decompress, and build lifelong bonds with 29 other traders who understand the grind.', phase: 'CONNECT' },
];

export const TOP_REWARDS = [
  { rankIcon: Trophy, title: '1st Place', prize: '$100K', subtitle: '1-Step Evaluation Account', value: '$400 value', gradient: 'from-yellow-400 via-amber-500 to-yellow-600', color: '#EAB308' },
  { rankIcon: Medal, title: '2nd Place', prize: '$50K', subtitle: 'Evaluation Account', value: '$200 value', gradient: 'from-gray-300 via-gray-400 to-gray-500', color: '#9CA3AF' },
  { rankIcon: Award, title: '3rd Place', prize: '$25K', subtitle: 'Evaluation Account', value: '$125 value', gradient: 'from-orange-400 via-orange-500 to-red-500', color: '#F97316' },
];

export const EXTRA_REWARDS = [
  { amount: '$500', label: 'Scholarship' },
  { amount: '$300', label: 'Scholarship' },
  { amount: '$150', label: 'Scholarship' },
  { amount: '₹5000', label: 'Early Bird Discount' },
];

export const UPCOMING_EVENTS = [
  {
    season: 'Season 11',
    location: 'Manali, India',
    price: '₹55,000',
    dates: 'Coming Soon',
    seatsLeft: 8,
    totalSeats: 30,
    status: 'EARLY BIRD',
    features: ['5 Days', 'Ultra-Luxury Villa', '3+ Elite Mentors', '$100K Tournament', 'Live Trading'],
    emoji: '🏔️',
  },
];

export const PAST_EVENTS = [
  { season: 1, location: 'Mussoorie', price: '₹22,500', highlight: 'Where it all began', emoji: '🏔' },
  { season: 2, location: 'Shimla', price: '₹35,000', highlight: 'Risk management deep-dive', emoji: '❄' },
  { season: 3, location: 'Goa', price: '₹45,000', highlight: "Women's special edition", emoji: '🌊' },
  { season: 4, location: 'Mussoorie', price: '₹45,000', highlight: '+ $100K Funded Accounts', emoji: '📈' },
  { season: 5, location: 'Manali', price: '₹45,000', highlight: '$50K Account for All', emoji: '🔥' },
  { season: 6, location: 'Kasol', price: '₹50,000', highlight: 'Mountain retreat', emoji: '⛰️' },
  { season: 7, location: 'Bir Billing', price: '₹50,000', highlight: 'Paragliding capital', emoji: '🪂' },
  { season: 8, location: 'Thailand', price: '₹1.5L', highlight: '6 Days International', emoji: '🌴' },
  { season: 9, location: 'Thailand', price: '₹1.5L', highlight: '6 Days International', emoji: '🌴' },
  { season: 10, location: 'Bali', price: '₹2L', highlight: '7 Days International', emoji: '🏝️' },
];

export const PERSONAS = [
  {
    title: 'Beginner Traders',
    subtitle: 'Just Starting Out',
    icon: Sparkles,
    emoji: '🌱',
    gradient: 'from-emerald-400 to-teal-500',
    color: '#22C55E',
    points: [
      'Personalised roadmap from profitable mentors',
      'Trade on a $100K tournament account safely',
      'Behaviour report to identify your weaknesses',
      'Avoid expensive beginner mistakes',
      'Top 3 traders win direct prop firm funding',
    ],
  },
  {
    title: 'Breakeven Traders',
    subtitle: 'Ready to Break Through',
    icon: Zap,
    emoji: '⚖️',
    gradient: 'from-blue-400 to-indigo-500',
    color: '#3B82F6',
    points: [
      'Master risk, probability & true consistency',
      'Psychology reset with structured routines',
      'Dramatically cut down overtrading',
      'Fix execution & deep-level trading psychology',
      'Network with serious performing traders',
    ],
  },
  {
    title: 'Profitable Traders',
    subtitle: 'Veterans & Mentors',
    icon: Star,
    emoji: '🏆',
    gradient: 'from-amber-400 to-orange-500',
    color: '#EAB308',
    points: [
      'Take a luxurious retreat from screen noise',
      'Share your edge & impact upcoming talent',
      'Trade in ultra-peaceful, focused environments',
      'Unlock exclusive networking & masterminds',
      'Get featured as a mentor in future seasons',
    ],
  },
];

export const TRADER_JOURNEYS = [
  { name: 'Tukaram', role: 'Prop Trader', payout: 20000, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80', quote: 'TFLCLUB changed how I view market mechanics completely. The discipline I built here is unmatched.' },
  { name: 'Faizan', role: 'Prop Trader', payout: 10000, img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80', quote: 'Met incredible mentors, got funded on day 4. The live trading environment pushed me beyond limits.' },
  { name: 'Faraz', role: 'Prop Trader', payout: 10000, img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=80', quote: "Discipline wasn't my strong suit until the bootcamp. Now I trade with zero emotion." },
  { name: 'Vansh', role: 'Prop Trader', payout: 7000, img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=80', quote: 'The sheer value delivered is completely insane. Every rupee was worth it.' },
  { name: 'Mukul', role: 'Prop Trader', payout: 6000, img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=800&auto=format&fit=crop&q=80', quote: 'Finally found my edge after 3 years of failing. This bootcamp changed everything.' },
  { name: 'Sachin', role: 'Prop Trader', payout: 4000, img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=80', quote: 'The tournament account pushed me to trade with real discipline for the first time.' },
];

export const MARKET_STATS = [
  { number: '100K', description: 'Tournament account given to every single participant', color: '#22C55E' },
  { number: '300K+', description: 'Social reach generated per season across platforms', color: '#3B82F6' },
  { number: '10+', description: 'Seasons completed across India, Thailand & Bali', color: '#EAB308' },
];

export const WHAT_IS_FEATURES = [
  { icon: Target, title: '5-Day Offline Bootcamp', desc: 'Build discipline away from the noise in scenic locations' },
  { icon: TrendingUp, title: 'Live Trading Sessions', desc: 'Trade with $100K tournament account alongside mentors' },
  { icon: Users, title: 'Network with Mentors', desc: "India's most profitable traders, verified and transparent" },
  { icon: Wallet, title: 'Funding Opportunities', desc: '$100K, $50K, $25K prop firm evaluation accounts' },
  { icon: BookOpen, title: 'Document Your Journey', desc: 'Trading behaviour report to track your growth' },
  { icon: Shield, title: 'Lifetime Community', desc: 'Prop firm cashback, priority access to future seasons' },
];

export const FAQ_DATA = [
  { q: 'Can I get a refund if I miss the event?', a: 'Full refund if informed early. No refund within 10 days of the event. We understand plans change — just communicate with us in advance and we\'ll work something out.' },
  { q: 'Will I become profitable after attending TFLCLUB?', a: "No — but we provide the exact environment, resources, and psychological pressure to increase your chances significantly. Profitability comes from pure discipline, which TFLCLUB cultivates perfectly." },
  { q: 'Can I truly learn strategies in just 5 days?', a: 'Absolutely. By observing and interacting with mentors intimately, you absorb behavioral frameworks — not just technical indicators. The live trading experience is transformative.' },
  { q: 'Are there any discounts available?', a: 'Early bird spots get ₹5,000 off instantly. Top performers from previous seasons get alumni pricing. Reach out to our team for group booking discounts.' },
  { q: 'What happens after the season ends?', a: 'You join our lifetime community with prop firm cashback, priority access to upcoming seasons, alumni-only masterclasses, and continued mentorship.' },
  { q: 'Who is this NOT for?', a: "If you're looking for a 'get rich quick' scheme, a paid signal group, or you're not willing to put in the work — TFLCLUB is not for you. We build discipline, not shortcuts." },
];

export const INCLUDED = [
  { title: '3 Meals Daily', desc: 'Breakfast, lunch, and dinner — premium catering' },
  { title: 'Snacks & Beverages', desc: 'Kept fuelled between intense sessions' },
  { title: 'Shared Stay (Villa/Hotel)', desc: 'Premium accommodation in scenic locations' },
  { title: 'Group Travel', desc: 'From pre-defined group pickup point' },
  { title: '100K Tournament Account', desc: 'Live trading account for the competition' },
  { title: 'Trading Resources', desc: 'ProJournX access, behaviour reports, tools' },
];

export const NOT_INCLUDED = [
  { title: 'Your Travel to Destination', desc: 'Flights or train to the city' },
  { title: 'Extra Food & Dining Out', desc: 'Outside meals and restaurants' },
  { title: 'Personal Cab Expenses', desc: 'Private transportation' },
  { title: 'Personal Add-ons & Gifts', desc: 'Souvenirs and personal shopping' },
];

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/tradefluenza',
  twitter: 'https://twitter.com/tradefluenza',
  youtube: 'https://youtube.com/@tradefluenza',
  discord: 'https://discord.gg/tflclub',
  telegram: 'https://t.me/tflclub',
};

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Rewards', href: '#rewards' },
  { label: 'Events', href: '#events' },
  { label: 'Mentors', href: '#mentors' },
  { label: 'FAQ', href: '#faq' },
];

export const PARTNER_BRANDS = [
  'Blueberry', 'FundingPips', 'The 5%ers', 'Funded Hive',
  'Funded Next', 'Funding Rock', 'Capital Chain', 'AMarkets',
];

export const MENTORS_DATA = [
  {
    name: "Night Trader Rakesh",
    role: 'Consistent Payouts Specialist',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80',
    stats: '7+ Yrs Exp. | $4M+ Funded',
    desc: 'Specializes in pure price action and heavy psychological frameworks to keep you strictly disciplined.',
    social: { ig: '#', tw: '#', yt: '#' },
    season: 'S1-S4',
  },
  {
    name: 'Abhinabh Parida',
    role: '0.5% Risk Management',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
    stats: 'Risk Expert | Math Edge',
    desc: 'Breaks down your risk of ruin and optimizes your position sizing for literal zero-emotion trading.',
    social: { ig: '#', tw: '#' },
    season: 'S2',
  },
  {
    name: 'Morning Star Rohit',
    role: 'How I Made $1M in Funding',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=80',
    stats: '$1M+ Funded | Prop King',
    desc: 'From zero to a million in funding — the exact roadmap, strategies, and mindset that got him there.',
    social: { ig: '#', yt: '#' },
    season: 'S3',
  },
];

export const VALUE_BREAKDOWN = [
  { label: 'Stay & Accommodation', percentage: 25, color: '#EAB308' },
  { label: 'Food & Nutrition', percentage: 20, color: '#3B82F6' },
  { label: 'Resources & Tools', percentage: 15, color: '#22C55E' },
  { label: 'Opportunities', percentage: 15, color: '#8B5CF6' },
];
