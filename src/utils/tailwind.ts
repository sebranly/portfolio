import { Color } from "../types";

/**
 * @name getTailwindBackgroundColor
 * @description Returns tailwind-ready class for background color
 */
const getTailwindBackgroundColor = (color: Color) => {
  if ([Color.Black, Color.White].includes(color)) return `bg-${color}`;
  return `bg-${color}-600`;
};

/**
 * @name getTailwindHoverBackgroundColor
 * @description Returns tailwind-ready class for background color on hover
 */
const getTailwindHoverBackgroundColor = (color: Color) => {
  if (color === Color.Black) return `hover:bg-gray-700`;
  if (color === Color.White) return `hover:bg-gray-300`;
  return `hover:bg-${color}-700`;
};

export { getTailwindBackgroundColor, getTailwindHoverBackgroundColor };
