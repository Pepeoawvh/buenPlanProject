/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-light': 'var(--color-primary-light)',
        secondary: 'var(--color-secondary)',
        accent: {
          green: 'var(--color-accent-green)',
          yellow: 'var(--color-accent-yellow)',
        },
        white: 'var(--color-white)',
        link: 'var(--color-link)',
        'link-hover': 'var(--color-link-hover)',
        background: 'var(--background-start-rgb)',
        foreground: 'var(--foreground-rgb)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('tw-elements-react/dist/plugin.cjs')
  ],
};