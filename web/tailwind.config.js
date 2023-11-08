/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        pastel_red: '#EF7167',
        pastel_blue: '#71A3F5',
        pastel_green: '#4AB582',
        dark: '#15171B',
        blue: '#6da4fc',
        green: '#0F9D58BF',
        yellow: '#FBCC43',
        grey: '#576279',
      },
    },
    fontFamily: {
      sans: ['var(--font-unbounded)'],
      mono: ['var(--font-neuemachina)'],
    },
  },
  plugins: [],
};
