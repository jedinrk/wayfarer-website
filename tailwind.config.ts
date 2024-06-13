import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Figtree', 'sans-serif'],
      serif: ['Mate', 'serif'],
    },
    extend: {
      spacing: {
        '320': '77rem',
        '340': '84rem'
      },
      colors: {
        'theme-100': '#EEF5E1',
        'theme-200': '#D5E5B8',
        'theme-300': '#D9E27E',
        'theme-400': '#9AB23E',
        'theme-500': '#46731E',
        'theme-600': '#225219',
        'theme-700': '#F3FAE6',
        'theme-900': '#215218',
        'theme-text-300': '#ADD356',
        'theme-text-700': '#4B8200',
        'theme-text-900': '#0A1D06',
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
    },
  },
  plugins: [],
};
export default config;
