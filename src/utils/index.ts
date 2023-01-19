import { Contributor, Project, Tag } from '../types';

/**
 * @name areFemaleContributors
 * @description Returns whether a team is fully made of female contributors
 */
const areFemaleContributors = (contributors: Contributor[]) => {
  return contributors.every((contributor: Contributor) => contributor.female);
};

/**
 * @name pluralize
 * @description Returns the same string or plural version if applicable
 */
const pluralize = (str: string, nb: number) => {
  if (nb === 1 || nb < 0) return str;

  return `${str}s`;
};

/**
 * @name filterProjectsByTag
 * @description Returns all projects filtered by selected tag
 */
const filterProjectsByTag = (projects: Project[], tag: Tag) => {
  if (tag === Tag.All) return projects;

  const filteredProjects = projects.filter((project: Project) => {
    const { tags } = project;
    return tags.includes(tag);
  });

  return filteredProjects;
};

/**
 * @name getFromEnv
 * @description Returns environment key if it exists
 */
const getFromEnv = (key: string) => (process && process.env ? process.env[key] || '' : '');

/**
 * @name getSlideDuration
 * @description Returns the duration of each slide for a Swiper set
 */
const getSlideDuration = (slideCount: number) => {
  if ([0, 1].includes(slideCount)) return 1_000;
  if (slideCount === 2) return 5_000;
  if (slideCount === 3) return 4_000;

  return 3_000;
};

export { areFemaleContributors, filterProjectsByTag, getFromEnv, getSlideDuration, pluralize };
