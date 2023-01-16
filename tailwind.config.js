var colors = ['gray', 'red', 'orange', 'amber', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink', 'rose'];

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,tsx}'],
  // TODO: verify if better method
  safelist: [
    'w-1/4',
    'bg-color-black',
    'bg-color-white',
    ...colors.map((color) => {
      return `bg-${color}-600`;
    }),
    ...colors.map((color) => {
      return `hover:bg-${color}-700`;
    })
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
