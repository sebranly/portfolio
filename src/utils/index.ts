import { Contributor, Project, Tag } from '../types';
import { AUTHOR_GITHUB, GITHUB_PAGES_URL } from '../constants/general';
import { PROJECTS_PER_PAGE } from '../constants';

/**
 * @name getGitHubRepo
 * @description Returns the link to the project repository
 */
const getGitHubRepo = (project: string) => `${AUTHOR_GITHUB}/${project}`;

/**
 * @name getWebsite
 * @description Returns the link to the project website
 */
const getWebsite = (project: string) => `${GITHUB_PAGES_URL}/${project}`;

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
 * @name generatePages
 * @description Returns all the pages possible for projects
 */
const generatePages = (projectsCount: number, projectsPerPage = PROJECTS_PER_PAGE) => {
  if (projectsCount === 0) return [];

  const rest = projectsCount % projectsPerPage;
  const areCompletePages = rest === 0;
  const delta = areCompletePages ? 0 : 1;
  const maxPage = projectsCount / projectsPerPage + delta;

  return numberRange(1, maxPage);
};

/**
 * @name numberRange
 * @description Returns an array containing all numbers from min to max included
 */
const numberRange = (min: number, max: number) => {
  const numbers = [];
  for (let i = min; i <= max; i += 1) numbers.push(i);
  return numbers;
};

const getProjectsForPage = (projects: Project[], pageNumber: number, projectsPerPage = PROJECTS_PER_PAGE) => {
  const pageIndex = pageNumber - 1;
  const projectsIndexStart = pageIndex * projectsPerPage;
  const projectsIndexEnd = (pageIndex + 1) * projectsPerPage;

  const projectsForPage = projects.slice(projectsIndexStart, projectsIndexEnd);
  return projectsForPage;
};

export {
  areFemaleContributors,
  filterProjectsByTag,
  generatePages,
  getGitHubRepo,
  getProjectsForPage,
  getWebsite,
  numberRange,
  pluralize
};
