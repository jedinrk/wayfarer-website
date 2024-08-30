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
      screens: {
        xl: '1200px',
        '2xl': '1440px'
      },
      spacing: {
        '300': '59rem',
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
        'theme-800': '#D4E4BB',
        'theme-900': '#215218',
        'theme-1000': '#FCF2E0',
        'theme-1100': '#E1E99B',
        'theme-1200': '#ACDA6D',
        'theme-text-100': '#6F859B',
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
      boxShadow: {
        '3xl': '-4px -4px 40px 0px rgba(172, 218, 109, 1)',
      }
    },
  },
  plugins: [],
};
export default config;
