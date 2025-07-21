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
        hospital: {
          green: {
            DEFAULT: '#29a063',
            light: '#4adb70',
            dark: '#117a44',
          },
          blue: '#047c84',
          gold: '#ffd05b',
        },
        // Keep legacy names for backward compatibility
        'hospital-green': {
          light: '#4adb70',
          DEFAULT: '#29a063',
          dark: '#117a44',
        },
        'hospital-blue': '#047c84',
        'gold-accent': '#ffd05b',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out both',
      },
      backgroundImage: {
        'nav-gradient': 'linear-gradient(to right, #047c84, #117a44)',
        'cta-gradient': 'linear-gradient(to right, #4adb70, #29a063)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
