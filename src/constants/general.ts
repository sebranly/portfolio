import { getFromEnv } from "../utils";

export const AUTHOR_NAME = 'sebranly';
export const AUTHOR_GITHUB = `https://github.com/${AUTHOR_NAME}`;
export const PROJECT_NAME = 'portfolio';
export const PROJECT_URL = `${AUTHOR_GITHUB}/${PROJECT_NAME}`;
export const CHANGELOG_URL = `${PROJECT_URL}/releases`;
export const GITHUB_PAGES_URL = `https://${AUTHOR_NAME}.github.io`;
export const IMG_URL = `https://raw.githubusercontent.com/${AUTHOR_NAME}/${PROJECT_NAME}/main/public/img`;
export const WEBSITE_TITLE = 'Portfolio';
export const WEBSITE_VERSION = '0.0.1';

export const NODE_ENV = getFromEnv('NODE_ENV') || 'development';
export const IS_TEST = NODE_ENV === 'test';
