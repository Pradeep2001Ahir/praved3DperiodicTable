/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        space: '#050914',
        navy: '#0a0f24',
        cyan: { DEFAULT: '#22d3ee', glow: '#67e8f9' },
        violet: { DEFAULT: '#8b5cf6' },
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 25px rgba(34, 211, 238, 0.35)',
        'glow-sm': '0 0 12px rgba(34, 211, 238, 0.25)',
      },
      backgroundImage: {
        'space-gradient':
          'radial-gradient(circle at 20% 20%, rgba(139,92,246,0.18), transparent 40%), radial-gradient(circle at 80% 0%, rgba(34,211,238,0.15), transparent 40%), radial-gradient(circle at 50% 100%, rgba(34,211,238,0.08), transparent 50%)',
      },
    },
  },
  plugins: [],
};