var colors = ['gray', 'red', 'orange', 'amber', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink', 'rose'];

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,tsx}'],
  // TODO: verify if better method
  safelist: [
    'bg-color-black',
    'bg-color-white',
    ...colors.map((color) => {
      return `bg-${color}-500`;
    }),
    ...colors.map((color) => {
      return `hover:bg-${color}-600`;
    })
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
