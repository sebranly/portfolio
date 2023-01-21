import { AUTHOR_GITHUB, GITHUB_PAGES_URL, IMG_URL } from '../constants/general';
import { ImageExtension, ImageFolder } from '../types';

/**
 * @name getGitHubRepo
 * @description Returns the link to the project repository
 */
const getGitHubRepo = (project: string) => `${AUTHOR_GITHUB}/${project}`;

/**
 * @name getImageLink
 * @description Returns the public URL for said image
 */
const getImageLink = (folder: ImageFolder, imgNumber: number, extension: ImageExtension) => {
  const link = `${IMG_URL}/projects_wrong/${folder}/img${imgNumber}.${extension}`;

  return link;
};

/**
 * @name getWebsite
 * @description Returns the link to the project website
 */
const getWebsite = (project: string) => `${GITHUB_PAGES_URL}/${project}`;

export { getGitHubRepo, getImageLink, getWebsite };
