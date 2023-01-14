import { Color, Contributor, Project, Tag } from '../types';
import { flatten, uniq } from 'lodash';
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

/**
 * @name alphabetizeTags
 * @description Returns an alphabetized list of the tags
 * TODO: alphabetize with translation if possible
 */
const alphabetizeTags = (tags: Tag[]) => {
  const sortedTags = tags.sort((a: Tag, b: Tag) => {
    const aLowercase = a.toLowerCase();
    const bLowercase = b.toLowerCase();
    if (aLowercase === bLowercase) return 0;
    return aLowercase > bLowercase ? 1 : -1;
  });

  return sortedTags;
};

/**
 * @name enhanceTags
 * @description Returns tags enhanced by some tags that might have been forgotten
 */
const enhanceTags = (project: Project) => {
  const { github, tags, website } = project;

  if (github && !tags.includes(Tag.GitHub)) tags.push(Tag.GitHub);
  if (website && !tags.includes(Tag.Website)) tags.push(Tag.Website);

  return tags;
};

/**
 * @name getTagColor
 * @description Returns the arbitrary color for each tag
 */
const getTagColor = (tag: Tag | number) => {
  switch (tag) {
    case 2011:
      return Color.Black;
    case 2012:
      return Color.Gray;
    case 2013:
      return Color.Red;
    case 2014:
      return Color.Orange;
    case 2015:
      return Color.Yellow;
    case 2016:
      return Color.Green;
    case 2017:
      return Color.Blue;
    case 2018:
      return Color.Indigo;
    case 2019:
      return Color.Purple;
    case 2020:
      return Color.Rose;
    case 2021:
      return Color.White;
    case 2022:
      return Color.Amber;
    case 2023:
      return Color.Pink;
    case Tag.ThreeDimensional:
      return Color.Red;
    case Tag.AIML:
      return Color.Indigo;
    case Tag.Archived:
      return Color.Gray;
    case Tag.C:
      return Color.Yellow;
    case Tag.CSS:
      return Color.Indigo;
    case Tag.CLI:
      return Color.Black;
    case Tag.DNS:
      return Color.Purple;
    case Tag.GitHub:
      return Color.White;
    case Tag.GUI:
      return Color.Green;
    case Tag.HTML:
      return Color.Orange;
    case Tag.i18n:
      return Color.Orange;
    case Tag.JavaScript:
      return Color.Yellow;
    case Tag.Live:
      return Color.Green;
    case Tag.MyProjects:
      return Color.Green;
    case Tag.NintendoDS:
      return Color.Red;
    case Tag.OpenGL:
      return Color.Indigo;
    case Tag.PAlib:
      return Color.Orange;
    case Tag.PHP:
      return Color.Indigo;
    case Tag.Python:
      return Color.Blue;
    case Tag.Puzzle:
      return Color.Purple;
    case Tag.React:
      return Color.Blue;
    case Tag.SchoolProject:
      return Color.Amber;
    case Tag.SDL:
      return Color.Blue;
    case Tag.VideoGame:
      return Color.Amber;
    case Tag.Website:
      return Color.Purple;
    case Tag.TailwindCSS:
      return Color.Blue;
    case Tag.TypeScript:
      return Color.Blue;
    case Tag.SQL:
      return Color.Orange;
    case Tag.Windows:
      return Color.Blue;
    default:
      return Color.Black;
  }
};

/**
 * @name hasTagTranslation
 * @description Returns whether a tag needs a translation
 */
const hasTagTranslation = (tag: Tag | number) => {
  if (typeof tag === 'number') return false;
  const tags = [Tag.Archived, Tag.Live, Tag.SchoolProject, Tag.VideoGame, Tag.Website];
  return tags.includes(tag);
};

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
 * @name getTailwindBackgroundColor
 * @description Returns tailwind-ready class for background color
 */
const getTailwindBackgroundColor = (color: Color) => {
  if ([Color.Black, Color.White].includes(color)) return `bg-${color}`;
  return `bg-${color}-600`;
};

/**
 * @name getTailwindHoverBackgroundColor
 * @description Returns tailwind-ready class for background color on hover
 */
const getTailwindHoverBackgroundColor = (color: Color) => {
  if (color === Color.Black) return `hover:bg-gray-700`;
  if (color === Color.White) return `hover:bg-gray-300`;
  return `hover:bg-${color}-700`;
};

/**
 * @name getAllYears
 * @description Returns all unique years from projects
 */
const getAllYears = (projects: Project[]) => {
  const allYears = projects.map((project: Project) => {
    const { years } = project;
    return years;
  });

  const allYearsFlatten = flatten(allYears);
  const allYearsUniq = uniq(allYearsFlatten);
  const allYearsSort = allYearsUniq.sort();

  return allYearsSort;
};

/**
 * @name getAllTags
 * @description Returns all unique tags from projects
 */
const getAllTags = (projects: Project[]) => {
  const allTags = projects.map((project: Project) => {
    const { tags } = project;
    return tags;
  });

  const allTagsFlatten = flatten(allTags);
  const allTagsUniq = uniq(allTagsFlatten);
  const allTagsSort = alphabetizeTags(allTagsUniq);

  return allTagsSort;
};

export {
  alphabetizeTags,
  areFemaleContributors,
  enhanceTags,
  getAllTags,
  getAllYears,
  getGitHubRepo,
  getTagColor,
  getTailwindBackgroundColor,
  getTailwindHoverBackgroundColor,
  getWebsite,
  hasTagTranslation,
  pluralize
};
