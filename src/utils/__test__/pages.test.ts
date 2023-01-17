import { generatePages, getProjectsForPage, numberRange } from "../pages";
import { Project, Tag } from '../../types';

test('generatePages', () => {
  expect(generatePages(0, 2)).toStrictEqual([]);
  expect(generatePages(1, 2)).toStrictEqual([1]);
  expect(generatePages(2, 2)).toStrictEqual([1]);
  expect(generatePages(3, 2)).toStrictEqual([1, 2]);
  expect(generatePages(4, 2)).toStrictEqual([1, 2]);
  expect(generatePages(5, 2)).toStrictEqual([1, 2, 3]);

  expect(generatePages(0, 4)).toStrictEqual([]);
  expect(generatePages(1, 4)).toStrictEqual([1]);
  expect(generatePages(2, 4)).toStrictEqual([1]);
  expect(generatePages(3, 4)).toStrictEqual([1]);
  expect(generatePages(4, 4)).toStrictEqual([1]);
  expect(generatePages(5, 4)).toStrictEqual([1, 2]);
});

test('getProjectsForPage', () => {
  const project1: Project = {
    description: ['Some description'],
    title: 'Project 1',
    subtitle: 'Some subtitle',
    tags: [Tag.Archived, Tag.GUI],
    years: [2012]
  };

  const project2: Project = {
    description: ['Some description'],
    title: 'Project 1',
    subtitle: 'Some subtitle',
    tags: [Tag.Archived, Tag.CLI],
    years: [2013]
  };

  const project3: Project = {
    description: ['Some description'],
    title: 'Project 1',
    subtitle: 'Some subtitle',
    tags: [Tag.Archived, Tag.Website],
    years: [2014]
  };

  expect(getProjectsForPage([project1, project2, project3], 1, 2)).toStrictEqual([project1, project2]);
  expect(getProjectsForPage([project1, project2, project3], 2, 2)).toStrictEqual([project3]);
});

test('numberRange', () => {
  expect(numberRange(0, 3)).toStrictEqual([0, 1, 2, 3]);
  expect(numberRange(1, 8)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});