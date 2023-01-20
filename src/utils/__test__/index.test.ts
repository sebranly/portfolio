import { areFemaleContributors, filterProjectsByTag, getSlideDuration, pluralize } from '../index';
import { Tag, Project, Role } from '../../types';

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

test('getSlideDuration', () => {
  expect(getSlideDuration(0)).toBe(1_000);
  expect(getSlideDuration(1)).toBe(1_000);
  expect(getSlideDuration(2)).toBe(5_000);
  expect(getSlideDuration(3)).toBe(4_000);
  expect(getSlideDuration(4)).toBe(3_000);
  expect(getSlideDuration(5)).toBe(3_000);
});

test('pluralize', () => {
  expect(pluralize('word', -1)).toBe('word');
  expect(pluralize('word', 0)).toBe('words');
  expect(pluralize('word', 1)).toBe('word');
  expect(pluralize('word', 2)).toBe('words');
  expect(pluralize('word', 100)).toBe('words');
});
