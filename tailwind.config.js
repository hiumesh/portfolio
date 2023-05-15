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
      keyframes: {
        reveal: {
          '0%': {
            transform: 'translate(0,100%)',
          },
          '100%': {
            transform: 'translate(0,0)'
          }
        },
        'slide-top': {
          '0%': {
            transform: 'translateY(100px)',
          },
          '90%': {
            transform: 'translateY(-20px)',
          },
          '100%': {
            transform: 'translateY(0px)',
          }
        }
        
      },
      animation: {
        reveal: 'reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1)',
        'slide-top': 'slide-top'
      },
    },
  },
  plugins: [],
}
