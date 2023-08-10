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
      colors:{
        'pastel_red':'#EF7167',
        'dark':'#15171B',
        'blue':'#4285F4BF',
        'green':"#0F9D58BF",
        'yellow':"#FBCC43"
      }
    },
    fontFamily:{
      sans: ['var(--font-unbounded)'],
      mono: ['var(--font-neuemachina)']
    },
  },
  plugins: [],
}
