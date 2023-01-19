import { AUTHOR_GITHUB, GITHUB_PAGES_URL } from '../constants/general';

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

export { getGitHubRepo, getWebsite };
