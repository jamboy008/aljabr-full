import type { Config } from 'tailwindcss'
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'] },
      colors: {
        primary: { DEFAULT: '#123B42', 950: '#0A2429' },
        secondary: { DEFAULT: '#12BFA9', 300: '#5EF2DD', 700: '#067565' },
        tertiary: { DEFAULT: '#E6C77C', 100: '#FFF0CC' },
        ink: '#0B1418',
        sky: { surface: '#EFF6FC', line: '#D5E2EE' },
        night: { DEFAULT: '#0B1418', card: '#121D22', line: '#22323A' },
      },
      keyframes: {
        grow: { from: { transform: 'scaleY(0)' }, to: { transform: 'scaleY(1)' } },
        pop: { from: { opacity: '0', transform: 'translateY(12px) scale(.97)' }, to: { opacity: '1', transform: 'none' } },
      },
      animation: { grow: 'grow .9s cubic-bezier(.2,.8,.2,1) both', pop: 'pop .35s cubic-bezier(.2,.8,.2,1) both' },
    },
  },
  plugins: [],
} satisfies Config
