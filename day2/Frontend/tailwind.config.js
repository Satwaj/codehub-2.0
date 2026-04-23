/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'moon-light': '#f5d5e0',
        'moon-purple-light': '#6667AB',
        'moon-purple': '#7B337E',
        'moon-purple-dark': '#420D4B',
        'moon-purple-darker': '#210635',
        'vanilla-light': '#fffcd0',
        'vanilla-gray-light': '#807e83',
        'vanilla-gray': '#403d3e',
        'vanilla-gray-dark': '#262323',
      },
      fontFamily: {
        'mono': ['Space Mono', 'monospace'],
        'sans': ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(10px)',
      },
    },
  },
  plugins: [],
}
