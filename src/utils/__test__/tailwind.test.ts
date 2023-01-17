import { Color } from "../../types";
import { getTailwindBackgroundColor, getTailwindHoverBackgroundColor } from "../tailwind";

test('getTailwindBackgroundColor', () => {
  expect(getTailwindBackgroundColor(Color.Black)).toBe('bg-black');
  expect(getTailwindBackgroundColor(Color.White)).toBe('bg-white');
  expect(getTailwindBackgroundColor(Color.Blue)).toBe('bg-blue-600');
});

test('getTailwindHoverBackgroundColor', () => {
  expect(getTailwindHoverBackgroundColor(Color.Black)).toBe('hover:bg-gray-700');
  expect(getTailwindHoverBackgroundColor(Color.White)).toBe('hover:bg-gray-300');
  expect(getTailwindHoverBackgroundColor(Color.Blue)).toBe('hover:bg-blue-700');
});