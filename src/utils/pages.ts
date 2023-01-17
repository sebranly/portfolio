import { PROJECTS_PER_PAGE } from '../constants';
import { Project } from '../types';

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
 * @name getProjectsForPage
 * @description Returns the projects subpart for the specified page
 */
const getProjectsForPage = (projects: Project[], pageNumber: number, projectsPerPage = PROJECTS_PER_PAGE) => {
  const pageIndex = pageNumber - 1;
  const projectsIndexStart = pageIndex * projectsPerPage;
  const projectsIndexEnd = (pageIndex + 1) * projectsPerPage;

  const projectsForPage = projects.slice(projectsIndexStart, projectsIndexEnd);
  return projectsForPage;
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

export { generatePages, getProjectsForPage, numberRange };
