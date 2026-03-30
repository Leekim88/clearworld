/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00d4ff',
          light: '#00ff88',
        },
        background: {
          DEFAULT: '#0a0a1a',
          secondary: '#1a1a3e',
          tertiary: '#0f1a2e',
        },
      },
    },
  },
  plugins: [],
};
