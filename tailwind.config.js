var colors = ['amber', 'blue', 'gray', 'green', 'indigo', 'orange', 'pink', 'purple', 'red', 'rose', 'yellow'];

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,tsx}'],
  safelist: [
    'bg-color-black',
    'bg-color-white',
    {
      pattern: /bg-(amber|blue|gray|green|indigo|orange|pink|purple|red|rose|yellow)-(600|700)/,
      variants: ['hover']
    }
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
