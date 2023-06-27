/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      'cd0':'var(--cd0)',
      'cd1':'var(--cd1)',
      'cd2':'var(--cd2)',
      'cd3':'var(--cd3)',
      'cw0':'var(--cw0)',
      'cw1':'var(--cw1)',
      'cb0':'var(--cb0)',
      'cb1':'var(--cb1)',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
