var colors = ['gray', 'red', 'orange', 'amber', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink', 'rose'];

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,tsx}'],
  // TODO: verify if better method
  safelist: [
    'w-1/1',
    'w-1/2',
    'w-1/3',
    'w-1/4',
    'w-1/5',
    'w-1/6',
    'w-1/7',
    'w-1/8',
    'w-1/9',
    'w-1/10',
    'w-1/11',
    'w-1/12',
    'w-1/13',
    'w-1/14',
    'w-1/15',
    'w-1/16',
    'w-1/17',
    'w-1/18',
    'w-1/19',
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
