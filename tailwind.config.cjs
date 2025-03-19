/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#FFFFFF',
          dark: '#0f0f11',
        },
        secondary: {
          light: '#f9fafb',
          dark: '#171717',
        },
        text: {
          light: '#111827',
          dark: '#f9fafb',
        },
        accent: {
          light: '#f97316',
          dark: '#f97316',
        },
        muted: {
          light: '#4b5563',
          dark: '#9ca3af',
        },
        border: {
          light: '#e5e7eb',
          dark: '#27272a',
        },
        background: {
          light: '#FFFFFF', // Latar belakang terang tetap putih
          dark: 'linear-gradient(135deg, #3a3a3a 0%, #121212 100%)', // Gradien abu-abu halus untuk mode gelap
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
