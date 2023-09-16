/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './stories/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/tw-rus-ui/theme/styles/*.{js,ts}',
  ],
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@tailwindcss/forms')({
      strategy: 'class', // only generate classes
    }),
  ],
};
