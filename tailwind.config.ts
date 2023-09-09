import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Poppins var, sans-serif',
          {
            fontFeatureSettings: '"cv11", "ss01"',
            fontVariationSettings: '"opsz" 32',
          },
        ],
      },
      backgroundImage: {
        trxheader: "url('/public/bgh.svg')",
      },

      colors: {
        transparent: 'transparent',
        blueTrx: '#3E86F5',
        whiteTrx: '#adceff',
        grayTrx: {
          100: '#64748b',
          // ...
          900: '#0f172a',
        },
      },
      width: {
        trx: '1440px',
      },
      height: {
        trx: '952px',
      },

      // screens: {
      //   '3xl': '1600px', // Adds a new `3xl:` screen variant
      // },

      // fontFamily: {
      //   display: 'Oswald, ui-serif', // Adds a new `font-display` class
      // },
    },
  },
  plugins: [],
};

export default config;
