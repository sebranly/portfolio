import { alphabetizeTags, enhanceTags, getTagColor, hasTagTranslation } from '../tags';
import { Tag, Color } from '../../types';

test('alphabetizeTags', () => {
  const t = ((value: string) => {
    const splits = value.split('.');
    const word = splits[splits.length - 1];
    return word;
  }) as any;

  expect(alphabetizeTags([], t)).toStrictEqual([]);
  expect(alphabetizeTags([Tag.GitHub, Tag.CSS, Tag.Website, Tag.TypeScript], t)).toStrictEqual([
    Tag.CSS,
    Tag.GitHub,
    Tag.TypeScript,
    Tag.Website
  ]);

  const tFrench = ((value: string) => {
    const splits = value.split('.');
    const word = splits[splits.length - 1];
    switch (word) {
      case Tag.Website:
        return 'Site web';
      default:
        return word;
    }
  }) as any;

  expect(alphabetizeTags([Tag.GitHub, Tag.CSS, Tag.Website, Tag.TypeScript], tFrench)).toStrictEqual([
    Tag.CSS,
    Tag.GitHub,
    Tag.Website,
    Tag.TypeScript
  ]);
});

test('enhanceTags', () => {
  expect(
    enhanceTags({
      description: ['Some description'],
      title: 'Project 1',
      subtitle: 'Some subtitle',
      tags: [Tag.Archived, Tag.C],
      years: [2012]
    })
  ).toStrictEqual([Tag.Archived, Tag.C]);

  expect(
    enhanceTags({
      description: ['Some description'],
      title: 'Project 1',
      subtitle: 'Some subtitle',
      tags: [Tag.Archived, Tag.C],
      website: 'something',
      years: [2012]
    })
  ).toStrictEqual([Tag.Archived, Tag.C, Tag.Website]);

  expect(
    enhanceTags({
      description: ['Some description'],
      title: 'Project 1',
      subtitle: 'Some subtitle',
      tags: [Tag.Archived, Tag.C],
      github: 'something',
      years: [2012]
    })
  ).toStrictEqual([Tag.Archived, Tag.C, Tag.GitHub]);

  expect(
    enhanceTags({
      description: ['Some description'],
      title: 'Project 1',
      subtitle: 'Some subtitle',
      tags: [Tag.Archived, Tag.C],
      github: 'something',
      years: [2012],
      website: 'something'
    })
  ).toStrictEqual([Tag.Archived, Tag.C, Tag.GitHub, Tag.Website]);

  expect(
    enhanceTags({
      description: ['Some description'],
      title: 'Project 1',
      subtitle: 'Some subtitle',
      tags: [Tag.Archived, Tag.C, Tag.GitHub, Tag.Website],
      github: 'something',
      years: [2012],
      website: 'something'
    })
  ).toStrictEqual([Tag.Archived, Tag.C, Tag.GitHub, Tag.Website]);
});

test('getTagColor', () => {
  expect(getTagColor(2011)).toBe(Color.Black);
  expect(getTagColor(2012)).toBe(Color.Gray);
  expect(getTagColor(2013)).toBe(Color.Red);
  expect(getTagColor(2014)).toBe(Color.Orange);
  expect(getTagColor(2015)).toBe(Color.Yellow);
  expect(getTagColor(2016)).toBe(Color.Green);
  expect(getTagColor(2017)).toBe(Color.Blue);
  expect(getTagColor(2018)).toBe(Color.Indigo);
  expect(getTagColor(2019)).toBe(Color.Purple);
  expect(getTagColor(2020)).toBe(Color.Rose);
  expect(getTagColor(2021)).toBe(Color.White);
  expect(getTagColor(2022)).toBe(Color.Amber);
  expect(getTagColor(2023)).toBe(Color.Pink);

  expect(getTagColor(Tag.AIML)).toBe(Color.Indigo);
  expect(getTagColor(Tag.Archived)).toBe(Color.Gray);
  expect(getTagColor(Tag.C)).toBe(Color.Yellow);
  expect(getTagColor(Tag.CLI)).toBe(Color.Black);
  expect(getTagColor(Tag.CSS)).toBe(Color.Indigo);
  expect(getTagColor(Tag.DNS)).toBe(Color.Purple);
  expect(getTagColor(Tag.GitHub)).toBe(Color.White);
  expect(getTagColor(Tag.GUI)).toBe(Color.Green);
  expect(getTagColor(Tag.HTML)).toBe(Color.Orange);
  expect(getTagColor(Tag.i18n)).toBe(Color.Orange);
  expect(getTagColor(Tag.JavaScript)).toBe(Color.Yellow);
  expect(getTagColor(Tag.Live)).toBe(Color.Green);
  expect(getTagColor(Tag.NintendoDS)).toBe(Color.Red);
  expect(getTagColor(Tag.OpenGL)).toBe(Color.Indigo);
  expect(getTagColor(Tag.PAlib)).toBe(Color.Orange);
  expect(getTagColor(Tag.PHP)).toBe(Color.Indigo);
  expect(getTagColor(Tag.Puzzle)).toBe(Color.Purple);
  expect(getTagColor(Tag.Python)).toBe(Color.Blue);
  expect(getTagColor(Tag.React)).toBe(Color.Blue);
  expect(getTagColor(Tag.SchoolProject)).toBe(Color.Amber);
  expect(getTagColor(Tag.SDL)).toBe(Color.Blue);
  expect(getTagColor(Tag.SQL)).toBe(Color.Orange);
  expect(getTagColor(Tag.TailwindCSS)).toBe(Color.Blue);
  expect(getTagColor(Tag.ThreeDimensional)).toBe(Color.Red);
  expect(getTagColor(Tag.TypeScript)).toBe(Color.Blue);
  expect(getTagColor(Tag.VideoGame)).toBe(Color.Amber);
  expect(getTagColor(Tag.Website)).toBe(Color.Purple);
  expect(getTagColor(Tag.Windows)).toBe(Color.Blue);
});

test('hasTagTranslation', () => {
  expect(hasTagTranslation(Tag.Archived)).toBe(true);
  expect(hasTagTranslation(Tag.Live)).toBe(true);
  expect(hasTagTranslation(Tag.SchoolProject)).toBe(true);
  expect(hasTagTranslation(Tag.VideoGame)).toBe(true);
  expect(hasTagTranslation(Tag.Website)).toBe(true);
  expect(hasTagTranslation(Tag.C)).toBe(false);
  expect(hasTagTranslation(2014)).toBe(false);
});
