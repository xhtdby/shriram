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
          blue: {
            DEFAULT: '#047c84', 
            light: '#4aa8b0',
            dark: '#035a60',
          },
          gold: {
            DEFAULT: '#ffd05b',
            light: '#ffe088',
            dark: '#e6bb52',
          },
        },
        // Keep legacy names for backward compatibility
        'hospital-green': {
          light: '#4adb70',
          DEFAULT: '#29a063',
          dark: '#117a44',
        },
        'hospital-blue': {
          light: '#4aa8b0',
          DEFAULT: '#047c84',
          dark: '#035a60',
        },
        'hospital-gold': {
          light: '#ffe088',
          DEFAULT: '#ffd05b',
          dark: '#e6bb52',
        },
        'gold-accent': '#ffd05b',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        headline: ['Poppins', 'Inter', 'sans-serif'],
      },
      spacing: {
        'section': '5.5rem',
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
        'primary-gradient': 'linear-gradient(to right, #29a063, #047c84)',
        'primary-gradient-br': 'linear-gradient(to bottom right, #29a063, #047c84)',
        'accent-gradient': 'linear-gradient(to right, #047c84, #29a063)',
        'dark-gradient': 'linear-gradient(to right, #117a44, #035a60)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
