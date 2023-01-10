import {
  getAllTags,
  getAllYears,
  getTagColor,
  getTailwindBackgroundColor,
  getTailwindHoverBackgroundColor,
  pluralize
} from '../index';
import { Tag, Color, Project } from '../../types';

const projects: Project[] = [
  {
    description: ['Some description'],
    title: 'Project 1',
    subtitle: 'Some subtitle',
    tags: [Tag.Archived, Tag.C],
    years: [2012]
  },
  {
    description: ['Some description'],
    title: 'Project 2',
    subtitle: 'Some subtitle',
    tags: [Tag.C],
    years: [2011, 2012]
  },
  {
    description: ['Some description'],
    title: 'Project 3',
    subtitle: 'Some subtitle',
    tags: [Tag.Archived, Tag.CSS],
    years: [2013]
  }
];

// TODO: add more tests once sure about colors
test('getTagColor', () => {
  expect(getTagColor(Tag.ThreeDimensional)).toBe(Color.Red);
});

test('pluralize', () => {
  expect(pluralize('word', -1)).toBe('word');
  expect(pluralize('word', 0)).toBe('words');
  expect(pluralize('word', 1)).toBe('word');
  expect(pluralize('word', 2)).toBe('words');
  expect(pluralize('word', 100)).toBe('words');
});

test('getTailwindBackgroundColor', () => {
  expect(getTailwindBackgroundColor(Color.Black)).toBe('bg-black');
  expect(getTailwindBackgroundColor(Color.White)).toBe('bg-white');
  expect(getTailwindBackgroundColor(Color.Blue)).toBe('bg-blue-500');
});

test('getTailwindHoverBackgroundColor', () => {
  expect(getTailwindHoverBackgroundColor(Color.Black)).toBe('hover:bg-gray-700');
  expect(getTailwindHoverBackgroundColor(Color.White)).toBe('hover:bg-gray-300');
  expect(getTailwindHoverBackgroundColor(Color.Blue)).toBe('hover:bg-blue-600');
});

test('getAllYears', () => {
  expect(getAllYears([])).toStrictEqual([]);
  expect(getAllYears(projects)).toStrictEqual([2011, 2012, 2013]);
});

test('getAllTags', () => {
  expect(getAllTags([])).toStrictEqual([]);
  expect(getAllTags(projects)).toStrictEqual([Tag.Archived, Tag.C, Tag.CSS]);
});
