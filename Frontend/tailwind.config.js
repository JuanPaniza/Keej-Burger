

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',

  ],
  theme: {
    extend: {
      animation: {
        'slide-down': 'slide-down 0.5s ease-out',
        'fade-out': 'fadeOut 0.3s ease-in forwards',
      },
      keyframes: {
        'slide-down': {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        GreenKeej: '#74ad1e',
        "GreenKeej-100": '#6da01b',
        BeigeKeej: '#f7eccd',
        rojoKB:"#ae1722",
        cremKB:"#faf0d7"
      },
    },
  },
  plugins: [],
}
