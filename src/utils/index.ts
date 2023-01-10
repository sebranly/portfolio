import { Color, Project, Tag } from '../types';
import { flatten, uniq } from 'lodash';

/**
 * @name getTagColor
 * @description Returns the arbitrary color for each tag
 */
const getTagColor = (tag: Tag | number) => {
  switch (tag) {
    case Tag.ThreeDimensional:
      return Color.Red;
    case Tag.Archived:
      return Color.Gray;
    case Tag.C:
      return Color.Yellow;
    case Tag.CSS:
      return Color.Indigo;
    case Tag.HTML:
      return Color.Orange;
    case Tag.JavaScript:
      return Color.Yellow;
    case Tag.MyProjects:
      return Color.Green;
    case Tag.NintendoDS:
      return Color.Red;
    case Tag.OpenGL:
      return Color.Indigo;
    case Tag.SDL:
      return Color.Blue;
    case Tag.VideoGame:
      return Color.Amber;
    case Tag.Website:
      return Color.Purple;
    case Tag.PAlib:
      return Color.Orange;
    case Tag.PHP:
      return Color.Indigo;
    case Tag.SQL:
      return Color.Orange;
    case Tag.Windows:
      return Color.Blue;
    default:
      return Color.Black;
  }
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
  return `bg-${color}-500`;
};

/**
 * @name getTailwindHoverBackgroundColor
 * @description Returns tailwind-ready class for background color on hover
 */
const getTailwindHoverBackgroundColor = (color: Color) => {
  if (color === Color.Black) return `hover:bg-gray-700`;
  if (color === Color.White) return `hover:bg-gray-300`;
  return `hover:bg-${color}-600`;
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
  const allTagsSort = allTagsUniq.sort((a: Tag, b: Tag) => {
    const aLowercase = a.toLowerCase();
    const bLowercase = b.toLowerCase();
    if (aLowercase === bLowercase) return 0;
    return aLowercase > bLowercase ? 1 : -1;
  });

  return allTagsSort;
};

export { getAllTags, getAllYears, getTagColor, getTailwindBackgroundColor, getTailwindHoverBackgroundColor, pluralize };
