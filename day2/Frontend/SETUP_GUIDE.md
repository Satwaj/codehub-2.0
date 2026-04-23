# 🎯 TFLCLUB Website - Quick Setup Guide

## ⚡ 5-Minute Quick Start

### Step 1: Install Dependencies
```bash
cd day2/Frontend
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

Open your browser to the URL shown (usually `http://localhost:5173`)

### Step 3: Start Building!
The website is now running with hot-reload enabled. Any changes you make will instantly appear in the browser.

---

## 🎨 Key Features Overview

### 1. **Hero Section**
- Animated loading page with GSAP
- Main hero with call-to-action buttons
- Dynamic badges and stats

### 2. **About Section**
- What is TFLCLUB with benefits
- Key statistics cards
- Purpose and mission

### 3. **Experience Section**
- 6-card timeline of daily activities
- Animated icons with hover effects
- Color-coded activity cards

### 4. **Scholarship & Funding**
- Top 3 reward cards (Gold, Silver, Bronze)
- Extra reward options
- Tournament rules display

### 5. **Events Management**
- Upcoming events with countdown
- Past seasons timeline
- Interactive seat counter

### 6. **Personas Section**
- 3 trader personas (Aspiring, Breakeven, Profitable)
- Click to expand detailed benefits
- Personalized apply buttons

### 7. **Traders & Mentors**
- Profitable trader showcase with payouts
- Mentor profiles by season
- Success metrics

### 8. **FAQ & Support**
- Expandable accordion FAQ
- Contact information
- Smooth animations

### 9. **Footer**
- Quick navigation links
- Social media links
- Legal & privacy pages

---

## 🛠️ Customization Guide

### Update Content Easily

#### 1. **Change Logo/Branding**
Edit `src/components/Navigation.jsx`:
```jsx
<span className="text-yellow-400">TFLCLUB</span>  // Change this
```

#### 2. **Update Events**
Edit `src/components/UpcomingEvents.jsx`:
```javascript
const upcomingEvents = [
  { location: 'Manali', dates: 'May 15-19', price: '₹45,000' },
  // Add more events
];
```

#### 3. **Edit Mentors**
Edit `src/components/Mentors.jsx`:
```javascript
const seasons = [
  {
    season: 'Season 1',
    mentors: [
      { name: 'Your Mentor', specialty: 'Your Specialty' }
    ]
  }
];
```

#### 4. **Update FAQ**
Edit `src/components/FAQ.jsx`:
```javascript
const faqs = [
  {
    question: 'Your question?',
    answer: 'Your answer here'
  }
];
```

#### 5. **Change Colors**
Edit `tailwind.config.js`:
```javascript
colors: {
  'custom': '#yourcolor'
}
```

Or edit `src/styles/globals.css`:
```css
:root {
  --primary: #yourcolor;
  --accent-gold: #yourcolor;
}
```

---

## 📦 Dependencies Explained

| Package | Purpose | Version |
|---------|---------|---------|
| react | UI framework | ^19.1.1 |
| react-dom | React DOM rendering | ^19.1.1 |
| gsap | Advanced animations | ^3.12.2 |
| tailwindcss | Utility CSS | ^3.4.1 |
| vite | Build tool | ^7.1.7 |
| autoprefixer | CSS vendor prefixes | ^10.4.17 |
| postcss | CSS processing | ^8.4.35 |

---

## 🎨 Animation System

### GSAP ScrollTrigger
Animations trigger when elements enter the viewport:

```javascript
gsap.from('.element', {
  scrollTrigger: {
    trigger: '.section',
    start: 'top 80%',
    toggleActions: 'play none none none'
  },
  duration: 0.8,
  opacity: 0,
  y: 40,
  ease: 'power2.out'
});
```

### Tailwind Animations
Built-in animations via Tailwind:
- `animate-pulse`
- `animate-spin`
- `animate-bounce`

### Custom Keyframe Animations
Defined in `src/styles/globals.css`:
- `@keyframes pulse` - Pulsing glow effect
- `@keyframes spin` - Rotation animation
- `@keyframes float` - Floating effect

---

## 📱 Mobile Optimization

The website is fully responsive with:
- **Mobile-first approach**: Styles for small screens first
- **Tailwind breakpoints**: `sm`, `md`, `lg`, `xl`, `2xl`
- **Hamburger menu**: Auto-collapses on mobile
- **Touch-friendly buttons**: Minimum 44px tap targets

---

## 🚀 Deployment Checklist

Before deploying, ensure:

- [ ] All links point to correct URLs
- [ ] Contact emails/phone numbers are updated
- [ ] Social media links are correct
- [ ] Event data is accurate
- [ ] Images are optimized
- [ ] No console errors
- [ ] Mobile view is tested
- [ ] Performance is optimized

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel login
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag dist/ folder to Netlify dashboard
```

### Deploy to GitHub Pages
```bash
npm run build
git add dist/
git commit -m "Deploy"
git push
```

---

## 🐛 Troubleshooting

### Issue: Styles not loading
**Solution**: 
```bash
npm run build
npm run preview
```

### Issue: GSAP animations not working
**Solution**: 
```bash
npm install gsap
```

### Issue: Port 5173 already in use
**Solution**: 
```bash
npm run dev -- --port 3000
```

### Issue: Images not displaying
**Solution**: 
- Place images in `public/` folder
- Reference with `/imagename.jpg`

---

## 📊 Performance Tips

1. **Lazy Load Images**
```jsx
<img loading="lazy" src="image.jpg" />
```

2. **Optimize Bundle**
```bash
npm run build
```

3. **Monitor Performance**
- Use Lighthouse in DevTools (F12)
- Target 90+ score

4. **Use Production Build**
```bash
npm run preview  // Test production build locally
```

---

## 🎯 Next Steps

1. ✅ Install dependencies
2. ✅ Run `npm run dev`
3. ✅ Customize content
4. ✅ Test on mobile
5. ✅ Build and deploy
6. ✅ Monitor analytics

---

## 📚 Resources

- [React Docs](https://react.dev)
- [GSAP Docs](https://gsap.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Docs](https://vite.dev)

---

## 💡 Pro Tips

- Use React DevTools to debug components
- Use GSAP pen tool to preview animations
- Use Tailwind UI docs for component inspiration
- Keep components under 300 lines for maintainability

---

**Happy building! 🚀**
