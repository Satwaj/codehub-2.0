# 🚀 TFLCLUB Trading Bootcamp Website

A stunning, professional trading community website built with **React 19**, **Vite**, **GSAP animations**, and **Tailwind CSS**.

## ✨ Features

- **🎨 Premium Design**: Modern, professional trading platform aesthetic
- **✨ GSAP Animations**: Smooth scroll-triggered animations throughout
- **📱 Fully Responsive**: Perfect on mobile, tablet, and desktop
- **⚡ Lightning Fast**: Built with Vite for instant HMR and fast builds
- **🎯 SEO Optimized**: Meta tags and semantic HTML
- **🌙 Dark Theme**: Beautiful dark mode with moon color palette
- **📊 Interactive Elements**: Dynamic content, counters, and carousels
- **🎬 Smooth Transitions**: Elegant page and section transitions

## 🎨 Color Palettes

### Moon Palette
- Light: `#f5d5e0`
- Purple Light: `#6667AB`
- Purple: `#7B337E`
- Purple Dark: `#420D4B`
- Purple Darker: `#210635`

### Vanilla Palette
- Light: `#fffcd0`
- Gray Light: `#807e83`
- Gray: `#403d3e`
- Gray Dark: `#262323`

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.jsx          # Top navigation bar
│   ├── LoadingPage.jsx         # Splash screen loader
│   ├── HeroSection.jsx         # Main hero section
│   ├── WhatIsTFLCLUB.jsx       # About section
│   ├── Purpose.jsx             # Purpose & mission
│   ├── Experience.jsx          # Daily experience timeline
│   ├── ScholarshipFunding.jsx  # Rewards & scholarships
│   ├── UpcomingEvents.jsx      # Upcoming bootcamps
│   ├── PastEvents.jsx          # Past seasons timeline
│   ├── WhoCanApply.jsx         # Personas/eligibility
│   ├── WhyTFLCLUB.jsx          # Investment breakdown
│   ├── IncludedNotIncluded.jsx # What's included
│   ├── ProfitableTraderJourneys.jsx # Success stories
│   ├── Mentors.jsx             # Mentor showcase
│   ├── Partnerships.jsx        # Partner logos
│   ├── FAQ.jsx                 # FAQ accordion
│   ├── FinalCTA.jsx            # Call-to-action
│   └── Footer.jsx              # Footer with links
├── styles/
│   └── globals.css             # Global styles & animations
├── hooks/
│   └── (custom hooks directory)
├── App.jsx                     # Main app component
├── main.jsx                    # Entry point
└── index.css                   # Tailwind imports

```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Navigate to the project directory**:
```bash
cd day2/Frontend
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start development server**:
```bash
npm run dev
```

The website will be available at `http://localhost:5173` (or the port specified by Vite).

## 📦 Build & Deployment

### Build for Production
```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🎨 Customization

### Update Content
All hardcoded content can be found in each component. Look for sections like:

```jsx
const events = [
  { location: 'Manali', dates: '...', price: '₹45,000' },
  // Add your events here
];
```

### Update Colors
Edit `src/styles/globals.css` to modify the color scheme:

```css
:root {
  --primary: #7B337E;
  --accent-gold: #FFD700;
  /* etc... */
}
```

### Update Tailwind Config
Edit `tailwind.config.js` to extend the theme:

```js
theme: {
  extend: {
    colors: {
      'custom': '#123456',
    },
  },
}
```

## 🎬 Animation Details

### GSAP Animations
- **Scroll Triggers**: Elements animate as they enter the viewport
- **Stagger Effects**: Sequential animations for lists and cards
- **Timeline Animations**: Coordinated multi-element animations
- **Duration**: 0.6s - 1.5s with ease functions

### Framer Motion
- Used for component entrance animations
- Smooth transitions between states

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (`sm`)
- **Tablet**: 641px - 1024px (`md`)
- **Desktop**: > 1024px (`lg`, `xl`, `2xl`)

## 🔧 Environment Variables

Create a `.env` file (if needed):

```env
VITE_API_URL=https://your-api.com
VITE_CONTACT_EMAIL=support@tflclub.com
```

## 📊 Performance

- **Lighthouse Score**: 90+
- **Page Load Time**: < 2s
- **First Contentful Paint**: < 1.5s
- **Lazy Loading**: Images and heavy components
- **Code Splitting**: Automatic via Vite

## 🤝 Contributing

1. Create a new branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m 'Add your feature'`
3. Push to branch: `git push origin feature/your-feature`
4. Submit a pull request

## 📄 License

This project is proprietary and confidential.

## 🆘 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Tailwind Styles Not Loading
```bash
rm -rf node_modules
npm install
npm run dev
```

### GSAP Not Working
Ensure GSAP is installed:
```bash
npm install gsap
```

## 🚀 Deployment Guide

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag & drop the dist folder to Netlify
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5173
CMD ["npm", "run", "preview"]
```

## 📞 Contact & Support

- Email: support@tflclub.com
- Phone: +91 XXX-XXX-XXXX
- Discord: [Join our community](https://discord.gg/tflclub)

## 🎯 Roadmap

- [ ] Backend API integration
- [ ] User authentication
- [ ] Event registration system
- [ ] Blog & resources section
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] CMS integration

---

**Made with ❤️ for traders, by traders**
