/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#e60a54",
        lightBlue: {
          100: "#faf9f5",
        }
      },
      container: {
        center: true,
        xl2: '1440px',
        xl: '1280px',
        lg: '940px',
        md: '720px',
        sm: '600px',
      },
      fontSize: {
        12: '12px',
        13: '13px',
        14: '14px',
        16: '16px',
        17: '17px',
        18: '18px',
        20: '20px',
        22: '22px',
        24: '24px',
        26: '26px',
        28: '28px',
        30: '30px',
        32: '32px',
        34: '34px',
        40: '40px',
        48: '48px',
        56: '56px',
        64: '64px',
      },
      extend: {
        screens: {
          xl: { 'min': '1200px' },
          xxl: { 'min': '1366px' },
          xxxl: { 'min': '1440px' },
          xl2: { 'min': '1600px' },
          msmall: { 'max': '570px' },
          smscreen: { 'max': '639px' },
          mdscreen: { 'max': '767px' },
          lgscreen: { 'max': '1023px' },
          xlscreen: { 'max': '1279px' },
          "2xlscreen": { 'max': '1534px' },
        },
      }
    },
  },
  plugins: [
    // require('tailwindcss'),
    function ({ addComponents }) {
      addComponents({

        '.main-container-root': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '100%',
            margin: 'auto',
          },
          '@screen md': {
            maxWidth: '740px',
            margin: 'auto',
          },
          '@screen lg': {
            maxWidth: '940px',
            margin: 'auto',
          },
          '@screen xl': {
            maxWidth: '1140px',
            margin: 'auto',
          },
          '@screen 2xl': {
            maxWidth: '1440px',
            margin: 'auto',
          },
        },

        '.container-xl': {
          maxWidth: '100%',
          '@screen 2xl': {
            maxWidth: '1440px',
            margin: 'auto',
          },
          '@screen xl': {
            maxWidth: '1280px',
            margin: 'auto',
          },
          '@screen lg': {
            maxWidth: '940px',
            margin: 'auto',
          },
          '@screen md': {
            maxWidth: '720px',
            margin: 'auto',
          },
          '@screen sm': {
            maxWidth: '600px',
            margin: 'auto',
          },
        },
      })
    }
  ],
};
