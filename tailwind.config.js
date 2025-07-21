/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'hospital-green': {
          light: '#4adb70',
          DEFAULT: '#29a063',
          dark: '#117a44',
        },
        'hospital-blue': '#047c84',
        'gold-accent': '#ffd05b',
      },
      backgroundImage: {
        'nav-gradient': 'linear-gradient(to right, #047c84, #117a44)',
        'cta-gradient': 'linear-gradient(to right, #4adb70, #29a063)',
      },
    },
  },
  plugins: [],
}
