const { join } = require('path');
const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'components/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        logo: ["'Caveat', cursive"],
      },
      colors: {
        primary: colors.blue,
        dark: colors.zinc,
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};
