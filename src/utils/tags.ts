import { Color, Project, Tag } from '../types';
import { TFunction } from 'i18next';

/**
 * @name alphabetizeTags
 * @description Returns an alphabetized list of the tags
 */
const alphabetizeTags = (tags: Tag[], t: TFunction<'translation', undefined, 'translation'>) => {
  const sortedTags = tags.sort((a: Tag, b: Tag) => {
    const tag1 = hasTagTranslation(a) ? t(`projects.general.tags.${a}`) : a;
    const tag2 = hasTagTranslation(b) ? t(`projects.general.tags.${b}`) : b;

    const aLowercase = tag1.toLowerCase();
    const bLowercase = tag2.toLowerCase();

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
    case Tag.AIML:
      return Color.Indigo;
    case Tag.Archived:
      return Color.Gray;
    case Tag.C:
      return Color.Yellow;
    case Tag.CLI:
      return Color.Black;
    case Tag.CSS:
      return Color.Indigo;
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
    case Tag.NintendoDS:
      return Color.Red;
    case Tag.OpenGL:
      return Color.Indigo;
    case Tag.PAlib:
      return Color.Orange;
    case Tag.PHP:
      return Color.Indigo;
    case Tag.Puzzle:
      return Color.Purple;
    case Tag.Python:
      return Color.Blue;
    case Tag.React:
      return Color.Blue;
    case Tag.SchoolProject:
      return Color.Amber;
    case Tag.SDL:
      return Color.Blue;
    case Tag.SQL:
      return Color.Orange;
    case Tag.TailwindCSS:
      return Color.Blue;
    case Tag.ThreeDimensional:
      return Color.Red;
    case Tag.TypeScript:
      return Color.Blue;
    case Tag.VideoGame:
      return Color.Amber;
    case Tag.Website:
      return Color.Purple;
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

export { alphabetizeTags, enhanceTags, getTagColor, hasTagTranslation };
