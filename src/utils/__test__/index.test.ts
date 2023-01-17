import {
  alphabetizeTags,
  areFemaleContributors,
  enhanceTags,
  filterProjectsByTag,
  generatePages,
  getGitHubRepo,
  getProjectsForPage,
  getTagColor,
  getTailwindBackgroundColor,
  getTailwindHoverBackgroundColor,
  getWebsite,
  hasTagTranslation,
  numberRange,
  pluralize
} from '../index';
import { Tag, Color, Project, Role } from '../../types';

test('alphabetizeTags', () => {
  const t = ((value: string) => {
    const splits = value.split('.');
    const word = splits[splits.length - 1];
    return word;
  }) as any;

  expect(alphabetizeTags([], t)).toStrictEqual([]);
  expect(alphabetizeTags([Tag.GitHub, Tag.CSS, Tag.Website, Tag.TypeScript], t)).toStrictEqual([Tag.CSS, Tag.GitHub, Tag.TypeScript, Tag.Website]);

  const tFrench = ((value: string) => {
    const splits = value.split('.');
    const word = splits[splits.length - 1];
    switch (word) {
      case Tag.Website:
        return 'Site web';
      default:
        return word;
    };
  }) as any;

  expect(alphabetizeTags([Tag.GitHub, Tag.CSS, Tag.Website, Tag.TypeScript], tFrench)).toStrictEqual([Tag.CSS, Tag.GitHub, Tag.Website, Tag.TypeScript]);
});

test('enhanceTags', () => {
  expect(
    enhanceTags({
      description: ['Some description'],
      title: 'Project 1',
      subtitle: 'Some subtitle',
      tags: [Tag.Archived, Tag.C],
      years: [2012]
    })
  ).toStrictEqual([Tag.Archived, Tag.C]);

  expect(
    enhanceTags({
      description: ['Some description'],
      title: 'Project 1',
      subtitle: 'Some subtitle',
      tags: [Tag.Archived, Tag.C],
      website: 'something',
      years: [2012]
    })
  ).toStrictEqual([Tag.Archived, Tag.C, Tag.Website]);

  expect(
    enhanceTags({
      description: ['Some description'],
      title: 'Project 1',
      subtitle: 'Some subtitle',
      tags: [Tag.Archived, Tag.C],
      github: 'something',
      years: [2012]
    })
  ).toStrictEqual([Tag.Archived, Tag.C, Tag.GitHub]);

  expect(
    enhanceTags({
      description: ['Some description'],
      title: 'Project 1',
      subtitle: 'Some subtitle',
      tags: [Tag.Archived, Tag.C],
      github: 'something',
      years: [2012],
      website: 'something'
    })
  ).toStrictEqual([Tag.Archived, Tag.C, Tag.GitHub, Tag.Website]);

  expect(
    enhanceTags({
      description: ['Some description'],
      title: 'Project 1',
      subtitle: 'Some subtitle',
      tags: [Tag.Archived, Tag.C, Tag.GitHub, Tag.Website],
      github: 'something',
      years: [2012],
      website: 'something'
    })
  ).toStrictEqual([Tag.Archived, Tag.C, Tag.GitHub, Tag.Website]);
});

test('areFemaleContributors', () => {
  expect(areFemaleContributors([])).toBe(true);
  expect(areFemaleContributors([{ name: 'Somebody', roles: [Role.Developer] }])).toBe(false);
  expect(areFemaleContributors([{ female: true, name: 'Somebody', roles: [Role.Developer] }])).toBe(true);

  expect(
    areFemaleContributors([
      { name: 'Somebody', roles: [Role.Developer] },
      { name: 'Somebody', roles: [Role.Developer] }
    ])
  ).toBe(false);

  expect(
    areFemaleContributors([
      { female: true, name: 'Somebody', roles: [Role.Developer] },
      { name: 'Somebody', roles: [Role.Developer] }
    ])
  ).toBe(false);

  expect(
    areFemaleContributors([
      { female: true, name: 'Somebody', roles: [Role.Developer] },
      { female: true, name: 'Somebody', roles: [Role.Developer] }
    ])
  ).toBe(true);
});

// TODO: add more tests once sure about colors
test('getTagColor', () => {
  expect(getTagColor(Tag.ThreeDimensional)).toBe(Color.Red);
});

test('hasTagTranslation', () => {
  expect(hasTagTranslation(Tag.Archived)).toBe(true);
  expect(hasTagTranslation(Tag.Live)).toBe(true);
  expect(hasTagTranslation(Tag.SchoolProject)).toBe(true);
  expect(hasTagTranslation(Tag.VideoGame)).toBe(true);
  expect(hasTagTranslation(Tag.Website)).toBe(true);
  expect(hasTagTranslation(Tag.C)).toBe(false);
  expect(hasTagTranslation(2014)).toBe(false);
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
  expect(getTailwindBackgroundColor(Color.Blue)).toBe('bg-blue-600');
});

test('getTailwindHoverBackgroundColor', () => {
  expect(getTailwindHoverBackgroundColor(Color.Black)).toBe('hover:bg-gray-700');
  expect(getTailwindHoverBackgroundColor(Color.White)).toBe('hover:bg-gray-300');
  expect(getTailwindHoverBackgroundColor(Color.Blue)).toBe('hover:bg-blue-700');
});

test('getGitHubRepo', () => {
  expect(getGitHubRepo('connect-four')).toBe('https://github.com/sebranly/connect-four');
});

test('getWebsite', () => {
  expect(getWebsite('dmz')).toBe('https://sebranly.github.io/dmz');
});

test('filterProjectsByTag', () => {
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

  expect(filterProjectsByTag([], Tag.All)).toStrictEqual([]);
  expect(filterProjectsByTag([project1, project2, project3], Tag.All)).toStrictEqual([project1, project2, project3]);
  expect(filterProjectsByTag([project1, project2, project3], Tag.GUI)).toStrictEqual([project1]);
  expect(filterProjectsByTag([project1, project2, project3], Tag.CLI)).toStrictEqual([project2]);
  expect(filterProjectsByTag([project1, project2, project3], Tag.Website)).toStrictEqual([project3]);
});

test('numberRange', () => {
  expect(numberRange(0, 3)).toStrictEqual([0, 1, 2, 3]);
  expect(numberRange(1, 8)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});

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
