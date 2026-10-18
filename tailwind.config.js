/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        bg: '#07090c',
        surface: '#0e1217',
        raised: '#151a21',
        line: '#1e252d',
        fg: '#e8ecf0',
        muted: '#7b8794',
        accent: {
          DEFAULT: '#3b9eff',
          strong: '#1d86f0',
          soft: 'rgba(59, 158, 255, 0.12)',
        },
        love: '#f43f75',
        success: '#22c58b',
      },
      keyframes: {
        rise: {
          from: { opacity: 0, transform: 'translateY(6px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: { rise: 'rise 220ms ease-out both' },
    },
  },
  plugins: [],
};
