# 📝 Content Customization Guide

Complete guide to customize every section of the TFLCLUB website.

---

## 🎯 Hero Section

**File**: `src/components/HeroSection.jsx`

### What to customize:
- Main headline
- Subheading
- Badges (status, early bird)
- Button texts and links
- Stats display

### How to edit:

```jsx
// Line 64-67: Change headline
<h1 className="hero-title...">
  <span>Your Title Here —</span>
  <span>Your Subtitle Here</span>
</h1>

// Line 72-75: Change subheading
<p className="hero-subtitle...">
  Your description text here
</p>

// Line 77-79: Change badges
<span className="text-yellow-400">🔥 Your Status</span>

// Line 83-88: Change buttons
<button>Your Button Text</button>

// Line 91-98: Change stats (the 4 cards)
// Modify the array with your own stats
```

---

## 📚 What is TFLCLUB Section

**File**: `src/components/WhatIsTFLCLUB.jsx`

### Customize:

```jsx
// Line 35: Change section title
<h2>What is TFLCLUB?</h2>

// Line 39-42: Change description
<p>Your description here</p>

// Line 43-50: Change benefits list
const benefits = [
  { 
    icon: '🤝', 
    title: 'Your Benefit', 
    desc: 'Your description' 
  },
  // Add more...
];

// Line 64-68: Change stat cards
// Modify the array values
```

---

## 🎯 Purpose Section

**File**: `src/components/Purpose.jsx`

### Customize:

```jsx
// Line 40: Main title
<h2>Why TFLCLUB?</h2>

// Line 46-57: Description and benefits
// Edit the benefits array

// Line 59-80: Benefits list
const items = [
  { icon: '🤝', title: 'Benefit', desc: 'Description' }
];
```

---

## 📅 Experience Section

**File**: `src/components/Experience.jsx`

### Customize daily activities:

```jsx
const experiences = [
  { icon: '🏋️', title: 'Morning Fitness', desc: 'Breathwork / Ice Bath' },
  { icon: '📊', title: 'Market Analysis', desc: 'Sessions with mentors' },
  // Add or modify activities
];
```

---

## 💰 Scholarship & Funding

**File**: `src/components/ScholarshipFunding.jsx`

### Customize rewards:

```jsx
// Top 3 rewards (line 71-83)
const topRewards = [
  {
    medal: '🥇',
    title: '$100K Account',
    value: '$400 value',
    color: 'from-yellow-500 to-yellow-400'
  },
  // Modify existing or add more
];

// Extra rewards (line 87-98)
// Update the array items

// Tournament rules (line 103-110)
// Edit the rules text
```

---

## 📍 Upcoming Events

**File**: `src/components/UpcomingEvents.jsx`

### Customize events:

```jsx
const upcomingEvents = [
  {
    location: 'Manali',
    dates: 'May 15-19, 2024',
    price: '₹45,000',
    seatsLeft: 8,
    status: 'Early Bird 🔥'
  },
  // Add your events
];
```

**Key fields**:
- `location`: City name
- `dates`: Event dates
- `price`: Event cost
- `seatsLeft`: Remaining seats (from 30)
- `status`: Badge text

---

## 🗓️ Past Events Timeline

**File**: `src/components/PastEvents.jsx`

### Customize past seasons:

```jsx
const seasons = [
  { 
    season: '1', 
    location: 'Mussoorie', 
    price: '₹22,500', 
    highlight: false 
  },
  {
    season: '10',
    location: 'Bali',
    price: '₹2L (7 Days)',
    highlight: true  // Highlighted seasons show special styling
  }
];
```

---

## 👥 Who Can Apply Section

**File**: `src/components/WhoCanApply.jsx`

### Customize personas:

```jsx
const personas = [
  {
    title: 'Aspiring Traders',
    subtitle: 'Beginners',
    icon: '🚀',
    color: 'from-blue-500 to-cyan-500',
    benefits: [
      'Learn from real traders',
      'Avoid beginner mistakes',
      // Add more benefits
    ]
  },
  // Modify or add personas
];
```

---

## 💡 Why TFLCLUB Section

**File**: `src/components/WhyTFLCLUB.jsx`

### Customize investment breakdown:

```jsx
const investments = [
  { 
    icon: '🏠', 
    label: 'Stay', 
    percentage: 25, 
    color: 'from-blue-500 to-cyan-500' 
  },
  { 
    icon: '🍽️', 
    label: 'Food', 
    percentage: 20, 
    color: 'from-orange-500 to-yellow-500' 
  },
  // Modify percentages and labels
];
```

---

## ✅ Included/Not Included

**File**: `src/components/IncludedNotIncluded.jsx`

### Customize lists:

```jsx
const included = [
  { icon: '✓', item: 'Stay (Shared Villa)' },
  { icon: '✓', item: '3 Meals Daily' },
  // Add/remove items
];

const excluded = [
  { icon: '✗', item: 'Flights / Train Travel' },
  // Add/remove items
];
```

---

## 📊 Profitable Trader Journeys

**File**: `src/components/ProfitableTraderJourneys.jsx`

### Customize traders:

```jsx
const traders = [
  { name: 'Mukul', payout: 6000, badge: true },
  { name: 'Tukaram', payout: 20000, badge: true },
  // Add your traders
];
```

**Fields**:
- `name`: Trader name
- `payout`: Amount earned (number, without $)
- `badge`: Show verified badge (true/false)

---

## 👨‍🏫 Mentors Section

**File**: `src/components/Mentors.jsx`

### Customize mentors by season:

```jsx
const seasons = [
  {
    season: 'Season 1',
    title: 'Consistency & Payouts',
    mentors: [
      { 
        name: 'Night Trader Rakesh', 
        specialty: 'Night Trading', 
        color: 'from-blue-500 to-cyan-500' 
      },
      // Add more mentors
    ]
  },
  // Add more seasons
];
```

---

## 🤝 Partnerships

**File**: `src/components/Partnerships.jsx`

### Customize partners:

```jsx
const partners = [
  { name: 'Blueberry', icon: '🫐' },
  { name: 'FundingPips', icon: '📊' },
  { name: 'The5ers', icon: '5️⃣' },
  // Add your partners
];
```

---

## ❓ FAQ Section

**File**: `src/components/FAQ.jsx`

### Customize FAQs:

```jsx
const faqs = [
  {
    question: 'Can I get a refund?',
    answer: 'Full refund if informed early. No refund within 10 days.'
  },
  {
    question: 'Will I become profitable?',
    answer: 'No — but we provide resources and opportunities...'
  },
  // Add more FAQs
];
```

---

## 🎨 Colors & Styling

**File**: `src/styles/globals.css`

### Key color variables:

```css
:root {
  /* Moon Palette */
  --color-moon-light: #f5d5e0;
  --color-moon-purple-light: #6667AB;
  --color-moon-purple: #7B337E;
  
  /* Vanilla Palette */
  --color-vanilla-light: #fffcd0;
  --color-vanilla-gray: #403d3e;
  
  /* Trading Colors */
  --accent-gold: #FFD700;
  --accent-blue: #0066FF;
  --accent-green: #00D084;
}
```

### Change global colors:
```css
:root {
  --primary: #yourcolor;
  --accent-gold: #yourcolor;
}
```

---

## 🔗 Navigation Links

**File**: `src/components/Navigation.jsx`

### Update links:

```jsx
const links = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  // Update href to your pages
];
```

---

## 📱 Contact Information

**File**: `src/components/Footer.jsx`

### Update contact details:

```jsx
<a href="mailto:support@tflclub.com">
  support@tflclub.com
</a>

<a href="tel:+91XXXXXXXXXX">
  +91 XXX-XXX-XXXX
</a>
```

---

## 🎬 Animations

### Control animation duration:

```jsx
// In any component
gsap.from('.element', {
  duration: 0.8,  // Change this (in seconds)
  opacity: 0,
  y: 40,
  ease: 'power2.out'  // Or: 'ease-in', 'ease-out', 'sine.inOut'
});
```

### Disable animations:

Replace animation code with:
```jsx
gsap.set('.element', { opacity: 1, y: 0 });
```

---

## 🌐 Social Media Links

**File**: `src/components/Footer.jsx`

### Update social links:

```jsx
<a href="https://instagram.com/yourhandle">📸</a>
<a href="https://twitter.com/yourhandle">𝕏</a>
<a href="https://discord.gg/yourserver">💬</a>
<a href="https://t.me/yourhandle">✈️</a>
```

---

## 💾 Saving Changes

1. Edit the appropriate component file
2. Save the file (Ctrl+S / Cmd+S)
3. Browser will auto-reload with your changes
4. If it doesn't reload, refresh manually (F5)

---

## 🚀 Best Practices

1. **Keep data in arrays** for easy updates
2. **Use meaningful variable names** for clarity
3. **Comment your custom sections** for future reference
4. **Test on mobile** after each major change
5. **Backup original files** before major edits

---

## 🐛 Common Issues

### Content not updating?
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server (`npm run dev`)

### Styles looking weird?
- Make sure you edited the right file
- Check for syntax errors in code
- Run `npm run build` to verify

### Animations not smooth?
- Check GSAP is installed (`npm install gsap`)
- Verify ScrollTrigger is registered
- Reduce animation duration if needed

---

**Need help? Check the README_TFLCLUB.md or SETUP_GUIDE.md files!**
