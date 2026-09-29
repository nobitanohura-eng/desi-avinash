/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          ivory: '#F4EBDD',
          ivoryLight: '#FAF5EE',
          ivoryDark: '#E8DCC9',
          black: '#181715',
          blackSoft: '#23221F',
          maroon: '#641F2B',
          maroonDark: '#4A151F',
          maroonLight: '#7D2937',
          terracotta: '#A9573E',
          terracottaDark: '#8A422D',
          rose: '#B96B75',
          roseLight: '#D48D96',
          forest: '#294437',
          forestDark: '#1E3228',
          indigo: '#35445B',
          indigoDark: '#263244',
          mustard: '#C49A45',
          mustardDark: '#A68032',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Rozha One"', 'Georgia', 'serif'],
        display: ['"Rozha One"', '"Cormorant Garamond"', 'serif'],
        devanagari: ['"Rozha One"', '"Yatra One"', '"Tiro Devanagari Hindi"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace'],
        hand: ['"Caveat"', '"Kalam"', 'cursive']
      },
      backgroundImage: {
        'paper-grain': "url('/assets/textures/t1-paper-grain.png')",
        'ink-texture': "url('/assets/textures/t2-ink-texture.png')",
        'screen-grain': "url('/assets/textures/t4-screen-grain.png')",
      },
      boxShadow: {
        'stamp': '0 4px 20px -2px rgba(100, 31, 43, 0.15)',
        'archival': '0 20px 40px -15px rgba(24, 23, 21, 0.08), 0 0 0 1px rgba(100, 31, 43, 0.1)',
        'elevated': '0 25px 50px -12px rgba(24, 23, 21, 0.25)',
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
