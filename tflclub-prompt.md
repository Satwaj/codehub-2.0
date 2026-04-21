# TFLCLUB Trading Bootcamp Website - Complete Prompt

**Copy everything below and paste into VS Claude / Claude.ai**

---

```
You are an expert React developer specializing in modern, animated web experiences. 
Create a STUNNING, production-ready trading bootcamp website for TFLCLUB using:
- React 19 + Vite
- Tailwind CSS (v3+)
- Framer Motion (for React animations)
- GSAP (for complex, performant animations)
- React Icons

DESIGN AESTHETIC & COLOR PALETTE:
- Primary Background: Clean white (#FFFFFF) or very light grey (#F9F9F9)
- Secondary Background: Dark charcoal (#1A1A1A) or deep navy (#0F0F1E) for sections
- Text Colors: Professional black (#000000) on light, white (#FFFFFF) on dark
- Accent Colors: Trading gold (#FFD700), Electric Blue (#0066FF), or Vibrant Green (#00D084)
- Borders: Subtle grey (#E5E5E5)
- Overall Vibe: Premium, professional, modern, trustworthy (like crypto/trading platforms)

INSPIRATION REFERENCES:
- Design language from: https://creators.forgebylevelup.com/ (layout, card design, animations)
- Aesthetic and flow from: https://joinfingrad.com/ (modern fintech feel)

BUILD ALL THESE SECTIONS:

═══════════════════════════════════════════════════════════════════════════════

🔷 SECTION 1: LOADING PAGE / SPLASH SCREEN
─────────────────────────────────────────────
- Full screen animated loader
- TFLCLUB logo + brand name with fade-in + glow effect (GSAP)
- Animated progress bar (0-100%) with smooth transitions
- Rotating trading chart icon or animated candlestick animation
- Load time: 2-3 seconds before redirect to homepage
- Use GSAP Timeline for synchronized animations
- Fade out and transition to hero smoothly

═══════════════════════════════════════════════════════════════════════════════

🔷 SECTION 2: HERO SECTION
─────────────────────────────────────────────
Layout (inspired by Forge):
- Main headline: "TFLCLUB — Invite Only Traders Bootcamp"
- Subheadline: "An exclusive program to network, trade, become disciplined, 
  and document your trading journey with like-minded traders, creators, and mentors."
- Status badge: "🔥 Block 1/30 Invites Open" (animated pulse effect)
- Early bird badge: "⚡ Early Bird ₹5000 OFF (First 10 Traders)"
- CTA Buttons: "Apply Now" (primary) + "Book a Call" (secondary)

Animations:
- Headline: Fade-in + slide-up on page load (Framer Motion)
- Subheadline: Stagger animation after headline
- Badges: Pulse animation (GSAP) + slight scale on hover
- Buttons: Hover effects - scale + shadow, click ripple effect
- Background: Subtle animated gradient or gradient shift (GSAP)
- Optional: Animated trading chart background or blurred market data

Design:
- Full viewport height hero
- Clean, minimal design with lots of whitespace
- High contrast text
- Professional hero image or gradient background

═══════════════════════════════════════════════════════════════════════════════

🔷 SECTION 3: MARQUEE / TICKER ANIMATION
─────────────────────────────────────────────
- Horizontal scrolling marquee with trading stats or partner logos
- Infinite loop animation (GSAP gsap.to with repeat: -1)
- Text options:
  Option A: "📈 30 Traders | 5 Days | 3+ Profitable Mentors | 1 Villa 
            | ₹45,000+ Monthly Funding | Join Now"
  Option B: Partner logos scrolling (Blueberry, FundingPips, The5ers, etc.)
- Pause on hover (GSAP pause())
- Smooth, constant speed animation
- Light background with dark text (or vice versa)

═══════════════════════════════════════════════════════════════════════════════

🔷 SECTION 4: WHAT IS TFLCLUB? (Intro Section)
─────────────────────────────────────────────
Layout:
- Left side: Animated heading + description text
- Right side: Animated stat cards showing "30 Traders × 5 Days × 3+ Mentors × 1 Villa"
- Or: Left = image/graphic, Right = text

Content:
"TFLCLUB is a 5-day offline traders bootcamp designed to help you become 
more disciplined, productive, and consistent.

You will:
✓ Trade live with profitable traders
✓ Learn strategies, psychology & risk management
✓ Share your journey and learn from real experiences
✓ Get opportunities for funding & monthly scholarships"

Animations:
- Text fade-in + slide from left on scroll (intersection observer)
- Checkmarks animated one by one (stagger effect)
- Stat cards appear with scale-in animation
- Number counters: animate from 0 to final value (GSAP)
- Hover effects on cards: lift up + shadow

═══════════════════════════════════════════════════════════════════════════════

🔷 SECTION 5: PURPOSE & EXPERIENCE DUAL SECTION
─────────────────────────────────────────────
Part A - Purpose:
"We can't make you profitable.
But we can provide the right environment, resources, and opportunities 
that bring you closer to your goals."

Part B - Daily Structure:
Grid of 6 cards showing daily routine:
1. Morning: Fitness / Breathwork / Ice Bath 🏋️
2. Market Analysis Sessions 📊
3. Live Trading with Traders 📈
4. Strategy Discussions 💡
5. Journaling & Review 📝
6. Night Networking / Chill Sessions 🎉

Animations:
- Purpose section: Text animation (type-writer effect using GSAP or Framer)
- Experience cards: Staggered entrance animation (each card slides up + fades)
- Card hover: Scale up, shadow increase, icon color change
- Timeline animation showing flow from morning to night

═══════════════════════════════════════════════════════════════════════════════

🔷 SECTION 6: SCHOLARSHIP & FUNDING CAROUSEL
─────────────────────────────────────────────
Content:
"Top 3 Rewards:
🥇 $100K 1-Step Evaluation Account ($400 value)
🥈 $50K Account ($200 value)
🥉 $25K Account ($125 value)

Extra Rewards:
$500 / $300 / $150 Scholarships
₹5000 Instant Discount Opportunities"

Layout:
- Carousel/slider format (horizontal scroll)
- 3 large cards for top rewards (gold, silver, bronze)
- Smaller cards for extra rewards below
- Can also show as animated trophy graphic

Animations:
- Carousel auto-scroll with pause-on-hover (GSAP)
- Cards have entrance animation (slide + scale)
- Medal icons: rotating animation on hover (GSAP rotate)
- Prize amounts: number counter animation
- Active card: highlight effect (glow or scale)
- Previous/Next buttons with hover effects

═══════════════════════════════════════════════════════════════════════════════

🔷 SECTION 7: UPCOMING TFLCLUB EVENTS
─────────────────────────────────────────────
Display upcoming bootcamp events as cards:
- Location
- Dates (with countdown timer if applicable)
- Price in ₹
- Seats left (animated number, decreasing)
- "Apply Now" button
- Event status badge ("Early Bird 🔥" or "Limited Slots")

Animations:
- Cards appear with stagger animation on scroll
- Countdown timer: smooth number transitions (GSAP)
- Seats counter: animate when decreasing
- Button hover: ripple effect + color change
- Card hover: lift effect (translateY)

Example Events:
"Season 5 — Manali — ₹45,000 — May 15-19, 2024 — 8 Seats Left"

═══════════════════════════════════════════════════════════════════════════════

🔷 SECTION 8: PAST EVENTS / SEASONS TIMELINE
─────────────────────────────────────────────
Vertical or horizontal timeline showing past seasons:
- Season 1 — Mussoorie — ₹22,500
- Season 2 — Shimla — ₹35,000
- Season 3 — Goa — ₹45,000
- Season 4 — Mussoorie — ₹45,000 (+ $100K Funding)
- Season 5 — Manali — ₹45,000 (+ $50K Account for All)
- Season 6 — Kasol — ₹50,000
- Season 7 — Bir Billing — ₹50,000
- Season 8 — Thailand — ₹1.5L (6 Days)
- Season 9 — Thailand — ₹1.5L (6 Days)
- Season 10 — Bali — ₹2L (7 Days)

Animations:
- Timeline line: draws from top to bottom on scroll (GSAP drawSVG or custom)
- Season cards: fade-in + slide as they come into view
- Season number highlights: pulse effect or glow
- Price increase animation (showing progression)
- Hover: show more details or link to event page

═══════════════════════════════════════════════════════════════════════════════

🔷 SECTION 9: WHO CAN APPLY? - THREE PERSONAS
─────────────────────────────────────────────
Three card layout showing:

Card 1 - Aspiring Traders (Beginners)
✓ Learn from real traders
✓ Avoid beginner mistakes
✓ Get a personalized roadmap
✓ Trade on a $100K tournament account
✓ Track your progress daily
✓ Get a trading behavior report
✓ Top 3 traders win funding (100K / 50K / 25K)

Card 2 - Breakeven Traders
✓ You're already doing well
✓ Trading is a game of risk, probability, and consistency
✓ Follow a structured routine at TFLCLUB
✓ Reduce overtrading & improve discipline
✓ Improve execution & psychology
✓ Connect with serious traders

Card 3 - Profitable Traders
✓ You deserve a break
✓ Detox from trading
✓ Connect with serious traders
✓ Share your experience & impact others
✓ Trade in peaceful, focused environment
✓ Mentor upcoming traders

Animations:
- Cards enter with stagger animation
- Card borders: animated gradient effect (GSAP)
- Checkmarks: sequential animation
- Tab/toggle between personas with smooth transitions
- Hover: background color shift, shadow increase
- Icons: rotate or bounce on hover

═══════════════════════════════════════════════════════════════════════════════

🔷 SECTION 10: PROFITABLE TRADER JOURNEYS
─────────────────────────────────────────────
Showcase real trader payouts:
- Mukul — $6000+
- Sachin — $4000+
- Vansh — $7000+
- Faizan — $10,000+
- Faraz — $10,000+
- Tukaram — $20,000+
- Sharuk — $2000+

Layout:
- Horizontal scrolling showcase or grid
- Each trader: name + payout amount + verified badge (✓)
- Optional: profile picture + trading stats
- Could also show as bar chart (GSAP animation)

Animations:
- Bar charts: animate from 0 to final value with GSAP
- Numbers count up animation
- Cards slide in from sides
- Verified badge: pulse animation
- Hover: show more details (tooltip or expand)

═══════════════════════════════════════════════════════════════════════════════

🔷 SECTION 11: MENTORS / EXPERIENCED TRADERS
─────────────────────────────────────────────
Show mentors by season:

Season 1: Night Trader Rakesh, Sneha
Season 2: Parida, Prince, Sowmya
Season 3: Rohit Morning Star, Anand Rajan
Season 4: Himanshu, Rishav, Viraj

Layout:
- Horizontal tabs/carousel (by season)
- Mentor cards with: photo, name, specialty, follower count, social links
- Brief bio/expertise area

Animations:
- Tab switching: fade-in/fade-out (Framer)
- Mentor cards: entrance animation (slide up + fade)
- Profile images: hover zoom + color overlay
- Social icons: appear on card hover
- Specialty badges: pulse effect

═══════════════════════════════════════════════════════════════════════════════

🔷 SECTION 12: PARTNERED BRANDS / SPONSORS
─────────────────────────────────────────────
Logo showcase grid:
- Blueberry
- FundingPips
- The5ers
- FundedHive
- FundedNext
- FundingRock
- CapitalChain
- AMarkets

Animations:
- Logos fade-in with stagger
- Hover: scale up + shadow/glow effect
- Auto-scroll through logos (marquee-style)
- Link on hover (underline animation)
- Logo color shift on hover (GSAP)

═══════════════════════════════════════════════════════════════════════════════

🔷 SECTION 13: WHY TFLCLUB? (Value Proposition)
─────────────────────────────────────────────
Content:
"An emerging trader can be anyone willing to become one.
70–80% of your fee is invested in:
🏠 Stay
🍽️ Food
📚 Resources
🎯 Opportunities"

Layout:
- Left: Heading + description
- Right: 4 animated icons showing where money goes

Animations:
- Text appears with fade-in effect
- Icons bounce or scale up one by one
- Percentage bars: animate filling from 0-70%
- Hover effects on each item

═══════════════════════════════════════════════════════════════════════════════

🔷 SECTION 14: WHAT'S INCLUDED vs WHAT'S NOT
─────────────────────────────────────────────
Two-column layout:

INCLUDED ✅
✔ Stay (Shared Villa)
✔ 3 Meals Daily
✔ Snacks
✔ Local Transport

NOT INCLUDED ❌
✖ Flights / Train Travel
✖ Personal Expenses
✖ Extra Food / Cabs
✖ Personal Add-ons

Animations:
- Column headers: slide in from sides
- Checkmarks/X marks: animated entry (bounce or draw)
- Items fade-in with stagger
- Hover: highlight or change background color

═══════════════════════════════════════════════════════════════════════════════

🔷 SECTION 15: FAQ ACCORDION
─────────────────────────────────────────────
Questions:
1. Can I get a refund?
   "Full refund if informed early. No refund within 10 days of the event."

2. Will I become profitable after TFLCLUB?
   "No — but we provide resources and opportunities to increase your chances."

3. Can I learn strategies in 5 days?
   "Yes — by observing and interacting with mentors."

4. What exactly am I paying for?
   "Stay, food, experience, resources, and trading environment."

(Add 4-6 more relevant questions)

Animations:
- Accordion smooth open/close (height animation with GSAP)
- Chevron icon rotation on toggle
- Background color change on active
- Smooth text reveal
- Hover effects on question items

═══════════════════════════════════════════════════════════════════════════════

🔷 SECTION 16: FINAL CTA SECTION
─────────────────────────────────────────────
Headline: "Ready to Level Up Your Trading?"
Subtext: "Only serious traders allowed."
Status: "🔥 30 Slots Only | ⚡ ₹5000 OFF for First 10"
Buttons: "Apply Now" (primary) + "Book a Call" (secondary)

Animations:
- Section background: animated gradient or pattern (GSAP)
- Headline: fade-in + scale animation
- CTA buttons: scale + glow on hover
- Slot counter: animated countdown
- Background: moving shapes or particles (GSAP)

═══════════════════════════════════════════════════════════════════════════════

🔷 SECTION 17: FOOTER
─────────────────────────────────────────────
- TFLCLUB logo/branding
- Quick links
- Social media links (Instagram, Twitter, Discord, Telegram)
- Contact email + phone
- Newsletter signup
- Copyright notice

Animations:
- Links hover: underline slide-in
- Social icons: scale + color on hover
- Newsletter input: focus effect (border color change)
- Footer fade-in on page load

═══════════════════════════════════════════════════════════════════════════════

GLOBAL ANIMATION REQUIREMENTS:
─────────────────────────────────────────────

1. ENTRANCE ANIMATIONS:
   - Fade-in + Slide-up for text sections (Framer Motion)
   - Scale + Fade for cards (Framer Motion)
   - Stagger animations for list items (Framer Motion staggerContainer)
   - Use Intersection Observer for scroll-triggered animations

2. GSAP ANIMATIONS:
   - Marquee scrolling (gsap.to with repeat)
   - Timeline animations (gsap.timeline())
   - Number counters (gsap.to with innerText)
   - Smooth morphing or shape transitions
   - Gradient shifts and color animations
   - Micro-interactions (button ripples, hover effects)

3. FRAMER MOTION ANIMATIONS:
   - Page transitions
   - Modal/dialog animations
   - Component entrance animations
   - Smooth variant transitions
   - Exit animations

4. MICRO-INTERACTIONS:
   - Button hover: scale(1.05) + shadow increase
   - Card hover: translateY(-8px) + shadow increase
   - Icon hover: rotate or bounce
   - Link hover: underline slide-in
   - Input focus: border color change + glow
   - All transitions: 0.3-0.5s cubic-bezier (ease-out)

5. SCROLL ANIMATIONS:
   - Parallax effects on hero (optional)
   - Fade-in on scroll (Intersection Observer)
   - Slide animations as sections enter viewport
   - Progress bar or scroll indicator
   - Sticky navigation with shadow on scroll

═══════════════════════════════════════════════════════════════════════════════

CODE STRUCTURE & REQUIREMENTS:
─────────────────────────────────────────────

FOLDER STRUCTURE:
```
src/
├── components/
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Marquee.jsx
│   ├── Experience.jsx
│   ├── Testimonials.jsx
│   ├── Mentors.jsx
│   ├── Events.jsx
│   ├── FAQ.jsx
│   ├── CTA.jsx
│   ├── Footer.jsx
│   └── Loading.jsx
├── hooks/
│   ├── useIntersection.js (for scroll animations)
│   └── useCountUp.js (for number animations)
├── utils/
│   ├── animations.js (GSAP helpers)
│   ├── constants.js (color schemes, data)
│   └── config.js
├── styles/
│   └── globals.css (global Tailwind overrides)
├── App.jsx
└── index.css
```

KEY REQUIREMENTS:
✅ Use React hooks (useState, useEffect, useRef, useContext)
✅ Implement Intersection Observer for scroll triggers
✅ Clean, commented code with explanations
✅ Reusable components where possible
✅ Hardcoded data with TODO comments for CMS integration
✅ Responsive design (mobile-first approach)
✅ Performance optimized (lazy loading, memoization)
✅ Accessibility features (ARIA labels, semantic HTML)
✅ No console errors or warnings
✅ All animations smooth and non-jarring

ANIMATION LIBRARIES SETUP:
```javascript
// Install commands to show in comments:
npm install framer-motion gsap react-icons
npm install -D tailwindcss postcss autoprefixer
```

PERFORMANCE TIPS:
- Use will-change CSS for animated elements
- Debounce scroll events
- Use GSAP GPU acceleration (transform, opacity only)
- Lazy load images
- Code split where possible
- Minimize re-renders with useMemo and useCallback

═══════════════════════════════════════════════════════════════════════════════

DESIGN SPECIFICS:
─────────────────────────────────────────────

COLOR PALETTE (Tailwind classes):
- Background: bg-white or bg-slate-50
- Dark sections: bg-slate-900 or bg-black
- Text primary: text-black or text-white (depending on background)
- Text secondary: text-slate-600 or text-slate-300
- Accent 1: text-blue-600 (for important highlights)
- Accent 2: text-amber-500 (for trading/gold vibe)
- Accent 3: text-green-500 (for profits/gains)
- Borders: border-slate-200 or border-slate-700

TYPOGRAPHY:
- Headlines: 3xl to 4xl, font-bold, tracking-tight
- Subheadings: 2xl, font-semibold
- Body text: base to lg, font-regular, leading-relaxed
- Use modern, clean fonts (system fonts or Google Fonts)

SPACING:
- Generous padding/margins (8px grid system)
- Lots of whitespace
- Section padding: py-12 md:py-20 lg:py-28

BUTTONS:
- Primary: bg-blue-600 hover:bg-blue-700 text-white
- Secondary: border-2 border-blue-600 text-blue-600 hover:bg-blue-50
- All buttons: rounded-lg, px-6, py-3, transition-all, duration-300

═══════════════════════════════════════════════════════════════════════════════

BONUS FEATURES (If time permits):
─────────────────────────────────────────────
✨ Dark mode toggle (Tailwind dark: prefix)
✨ Scroll-to-section smooth scrolling
✨ Animated background patterns or shapes
✨ Particle effects (using react-tsparticles or GSAP)
✨ 3D card effects (using react-three-fiber - optional)
✨ Video background in hero (lazy loaded)
✨ Smooth page transitions (Framer Layout)
✨ Scroll progress indicator
✨ Animated scroll-to-top button

═══════════════════════════════════════════════════════════════════════════════

FINAL OUTPUT:
─────────────────────────────────────────────

Provide:
1. ✅ Complete, working React code (ready for Vite project)
2. ✅ All sections implemented with full animations
3. ✅ GSAP + Framer Motion both utilized
4. ✅ Tailwind CSS styling (no external CSS files needed)
5. ✅ Fully responsive design
6. ✅ Clean, commented, production-ready code
7. ✅ Setup instructions at the top in comments
8. ✅ Clear TODO markers for content replacement
9. ✅ Animation implementation examples for each section
10. ✅ Performance optimized

GOALS:
🎯 Website should feel PREMIUM and PROFESSIONAL
🎯 Smooth, buttery animations (never janky)
🎯 Modern trading/fintech aesthetic
🎯 High conversion rate (strong CTAs)
🎯 Mobile-responsive perfection
🎯 Fast loading and performance
🎯 Accessibility compliant

═══════════════════════════════════════════════════════════════════════════════

START CODING NOW - Make it STUNNING! 🚀
```

---

## **How to Use This Prompt:**

### **Step 1: Copy the Prompt**
- Copy everything between the triple backticks above
- Include the backticks for clarity

### **Step 2: Paste in Claude**
Choose your method:

**Option A: VS Code Claude Extension**
1. Open VS Code
2. Open Claude Extension (Cmd+Shift+P → "Claude")
3. New Chat
4. Paste the entire prompt
5. Send

**Option B: Claude.ai (Web)**
1. Go to claude.ai
2. New conversation
3. Paste the entire prompt
4. Wait for code generation

**Option C: Claude API / IDE**
1. Use in your development environment
2. Same process

### **Step 3: After Getting the Code**

```bash
# Create Vite project
npm create vite@latest tflclub -- --template react
cd tflclub

# Install dependencies
npm install
npm install framer-motion gsap react-icons
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Copy the generated code into src/App.jsx

# Run development server
npm run dev
```

### **Step 4: Customize Content**

Search for "TODO" in the code and replace:
- Replace logo/branding
- Update TFLCLUB text with actual content
- Add real images
- Update colors if needed
- Add real social media links
- Update pricing and dates
- Add mentor real information

---

## **What You'll Get:**

✅ **Full Hero Section** with animations  
✅ **Loading Page** with splash screen  
✅ **Marquee Ticker** with infinite scroll  
✅ **All 17 Sections** fully implemented  
✅ **Smooth Animations** using GSAP + Framer Motion  
✅ **Responsive Design** for all devices  
✅ **Professional Styling** with Tailwind  
✅ **Production-Ready Code** you can deploy  

---

## **Timeline:**

- **Now:** Generate code with VS Claude (~15-30 mins)
- **Today:** Review code + customize content (~2-3 hours)
- **Tomorrow:** Final tweaks + deploy (~1-2 hours)
- **Total:** **Complete website in 2 days** ✅

---

**Ready? Paste this prompt into Claude and watch the magic happen!** 🎩✨
