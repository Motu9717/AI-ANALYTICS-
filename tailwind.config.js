/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
        display: ['"Syne"', 'sans-serif'],
      },
      colors: {
        bg:      '#04040a',
        s1:      '#09090f',
        s2:      '#0f0f18',
        s3:      '#161622',
        b1:      '#1c1c2e',
        b2:      '#252538',
        b3:      '#303048',
        t1:      '#f0f0ff',
        t2:      '#9090b8',
        t3:      '#505070',
        cyan:    '#00e5ff',
        purple:  '#7b2fff',
        green:   '#00ff88',
        amber:   '#ffb800',
        red:     '#ff2d78',
        orange:  '#ff5f2e',
      },
      animation: {
        'blink': 'blink 1.5s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2s ease-out infinite',
        'ticker': 'ticker 40s linear infinite',
        'fade-up': 'fade-up 0.3s ease forwards',
        'spin-slow': 'spin 2s linear infinite',
      },
      keyframes: {
        blink: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0.2' } },
        'pulse-ring': { '0%': { transform: 'scale(1)', opacity: '0.7' }, '100%': { transform: 'scale(2.5)', opacity: '0' } },
        ticker: { '0%': { transform: 'translateX(100%)' }, '100%': { transform: 'translateX(-200%)' } },
        'fade-up': { from: { opacity: '0', transform: 'translateY(10px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
}
