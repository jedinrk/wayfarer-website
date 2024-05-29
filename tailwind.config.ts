import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'theme-100': '#EEF5E1',
      'theme-200': '#D5E5B8',
      'theme-300': '#D9E27E',
      'theme-400': '#9AB23E',
      'theme-500': '#46731E',
      'theme-600': '#225219',
      'theme-text-300': '#ADD356',
      'theme-text-700': '#4B8200',
      'theme-text-900': '#0A1D06',
    },
    fontFamily: {
      sans: ['Figtree', 'sans-serif'],
      serif: ['Mate', 'serif'],
    },
    fontSize: {
      'xl': ['1.25rem', {
        lineHeight: '1.5',
      }],
      '2xl': ['1.5rem', {
        lineHeight: '1.66',
      }],
      '3xl': ['1.75rem', {
        lineHeight: '1.14rem',
        fontWeight: '600',
      }],
      '4xl': ['2.25rem', {
        lineHeight: '1.2',
        fontWeight: '600',
      }],
      '5xl': ['3.25rem', {
        lineHeight: '1.2',
        fontWeight: '600',
      }],
      '6xl': ['4.75rem', {
        lineHeight: '1.05',
        fontWeight: '600',
        letterSpacing: '-.01em'
      }],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        '320': '80rem'
      }
    },
  },
  plugins: [],
};
export default config;
