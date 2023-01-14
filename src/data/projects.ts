import { STEPHANE } from '../constants';
import { Project, Role, Tag } from '../types';
import { getGitHubRepo, getWebsite } from '../utils';
import { isMobile } from 'react-device-detect';

const projects: Project[] = [
  {
    description: ['projects.ctr2d.desc1', 'projects.ctr2d.desc2', 'projects.ctr2d.desc3'],
    subtitle: 'projects.ctr2d.subtitle',
    title: 'projects.ctr2d.title',
    tags: [Tag.Archived, Tag.C, Tag.SDL, Tag.VideoGame, Tag.Windows, Tag.GUI],
    years: [2011]
  },
  {
    contributors: [{ name: STEPHANE, roles: [Role.Designer, Role.Tester] }],
    description: ['projects.tetrisSpace.desc1', 'projects.tetrisSpace.desc2', 'projects.tetrisSpace.desc3'],
    title: 'projects.tetrisSpace.title',
    subtitle: 'projects.tetrisSpace.subtitle',
    tags: [Tag.Archived, Tag.C, Tag.NintendoDS, Tag.VideoGame, Tag.PAlib, Tag.GUI],
    years: [2011]
  },
  {
    description: [
      'projects.eightQueensPuzzle.desc1',
      'projects.eightQueensPuzzle.desc2',
      'projects.eightQueensPuzzle.desc3'
    ],
    github: getGitHubRepo('eight-queens-puzzle'),
    title: 'projects.eightQueensPuzzle.title',
    subtitle: 'projects.eightQueensPuzzle.subtitle',
    tags: [Tag.Archived, Tag.C, Tag.SchoolProject, Tag.CLI, Tag.GitHub, Tag.Puzzle],
    years: [2012],
    textualSnapshot: [
      '+---+---+---+---+',
      '| . | Q | . | . |',
      '+---+---+---+---+',
      '| . | . | . | Q |',
      '+---+---+---+---+',
      '| Q | . | . | . |',
      '+---+---+---+---+',
      '| . | . | Q | . |',
      '+---+---+---+---+'
    ]
  },
  // TODO: video
  {
    description: ['projects.myDraw.desc1', 'projects.myDraw.desc2', 'projects.myDraw.desc3'],
    title: 'projects.myDraw.title',
    subtitle: 'projects.myDraw.subtitle',
    tags: [Tag.Archived, Tag.C, Tag.MyProjects, Tag.SDL, Tag.Windows, Tag.GUI],
    years: [2012]
  },
  {
    contributors: [{ name: STEPHANE, roles: [Role.Designer, Role.Tester] }],
    description: ['projects.bobolsSokoban3d.desc1', 'projects.bobolsSokoban3d.desc2', 'projects.bobolsSokoban3d.desc3'],
    title: 'projects.bobolsSokoban3d.title',
    subtitle: 'projects.bobolsSokoban3d.subtitle',
    tags: [Tag.Archived, Tag.C, Tag.NintendoDS, Tag.VideoGame, Tag.PAlib, Tag.GUI],
    years: [2012]
  },
  {
    description: ['projects.magicSquares.desc1', 'projects.magicSquares.desc2', 'projects.magicSquares.desc3'],
    github: getGitHubRepo('magic-squares'),
    title: 'projects.magicSquares.title',
    subtitle: 'projects.magicSquares.subtitle',
    tags: [Tag.Archived, Tag.C, Tag.CLI, Tag.GitHub, Tag.Puzzle],
    years: [2013],
    textualSnapshot: [
      '+---+---+---+',
      '| 4 | 9 | 2 |',
      '+---+---+---+',
      '| 3 | 5 | 7 |',
      '+---+---+---+',
      '| 8 | 1 | 6 |',
      '+---+---+---+'
    ]
  },
  {
    description: ['projects.myLife.desc1', 'projects.myLife.desc2', 'projects.myLife.desc3'],
    title: 'projects.myLife.title',
    subtitle: 'projects.myLife.subtitle',
    tags: [Tag.Archived, Tag.C, Tag.MyProjects, Tag.NintendoDS, Tag.PAlib, Tag.GUI],
    years: [2013]
  },
  {
    description: ['projects.myPixelArt.desc1', 'projects.myPixelArt.desc2', 'projects.myPixelArt.desc3'],
    title: 'projects.myPixelArt.title',
    subtitle: 'projects.myPixelArt.subtitle',
    tags: [Tag.Archived, Tag.C, Tag.SDL, Tag.MyProjects, Tag.NintendoDS, Tag.PAlib, Tag.GUI],
    years: [2013]
  },
  {
    // TODO: PlayStation theme screenshot
    description: [
      'projects.myTetris.desc1',
      'projects.myTetris.desc2',
      'projects.myTetris.desc3',
      'projects.myTetris.desc4'
    ],
    title: 'projects.myTetris.title',
    subtitle: 'projects.myTetris.subtitle',
    tags: [
      Tag.ThreeDimensional,
      Tag.OpenGL,
      Tag.Archived,
      Tag.GUI,
      Tag.C,
      Tag.MyProjects,
      Tag.NintendoDS,
      Tag.VideoGame,
      Tag.PAlib
    ],
    years: [2013]
  },
  {
    contributors: [{ name: 'Julien', roles: [Role.Algorithm] }],
    description: ['projects.mySudokuTool.desc1', 'projects.mySudokuTool.desc2', 'projects.mySudokuTool.desc3'],
    title: 'projects.mySudokuTool.title',
    subtitle: 'projects.mySudokuTool.subtitle',
    tags: [Tag.Archived, Tag.C, Tag.MyProjects, Tag.SDL, Tag.Windows, Tag.GUI],
    years: [2013]
  },
  // TODO: remove Windows if can run on Mac
  {
    contributors: [
      {
        name: 'Alex',
        roles: [Role.Developer]
      }
    ],
    description: ['projects.connectFour.desc1', 'projects.connectFour.desc2', 'projects.connectFour.desc3'],
    github: getGitHubRepo('connect-four'),
    tags: [Tag.Archived, Tag.GitHub, Tag.Python, Tag.SchoolProject, Tag.Windows, Tag.GUI],
    title: 'projects.connectFour.title',
    subtitle: 'projects.connectFour.subtitle',
    years: [2013]
  },
  {
    // TODO: video + guide + download link
    description: ['projects.myEnglishGame.desc1', 'projects.myEnglishGame.desc2', 'projects.myEnglishGame.desc3'],
    title: 'projects.myEnglishGame.title',
    subtitle: 'projects.myEnglishGame.subtitle',
    tags: [Tag.Archived, Tag.C, Tag.MyProjects, Tag.SDL, Tag.VideoGame, Tag.Windows, Tag.GUI],
    years: [2013, 2014]
  },
  {
    contributors: [
      {
        name: STEPHANE,
        roles: [Role.Developer]
      }
    ],
    description: ['projects.GTAV.desc1', 'projects.GTAV.desc2', 'projects.GTAV.desc3'],
    tags: [Tag.Archived, Tag.JavaScript, Tag.Website, Tag.HTML, Tag.CSS, Tag.PHP, Tag.SQL],
    title: 'projects.GTAV.title',
    subtitle: 'projects.GTAV.subtitle',
    years: [2014]
  },
  {
    // TODO: remember contributors
    description: ['projects.simpleBot.desc1', 'projects.simpleBot.desc2', 'projects.simpleBot.desc3'],
    github: getGitHubRepo('simple-bot'),
    tags: [Tag.Archived, Tag.AIML, Tag.SchoolProject, Tag.CLI],
    title: 'projects.simpleBot.title',
    subtitle: 'projects.simpleBot.subtitle',
    years: [2016]
  },
  {
    description: ['projects.aoc2017.desc1', 'projects.aoc2017.desc2', 'projects.aoc2017.desc3'],
    github: getGitHubRepo('advent-of-code-2017'),
    tags: [Tag.Archived, Tag.C, Tag.GitHub, Tag.CLI, Tag.Puzzle],
    title: 'projects.aoc2017.title',
    subtitle: 'projects.aoc2017.subtitle',
    years: [2017]
  },
  {
    description: ['projects.projectEuler.desc1', 'projects.projectEuler.desc2'],
    github: getGitHubRepo('project-euler'),
    tags: [Tag.Archived, Tag.Python, Tag.GitHub, Tag.CLI, Tag.Puzzle],
    title: 'projects.projectEuler.title',
    subtitle: 'projects.projectEuler.subtitle',
    years: [2017]
  },
  {
    description: ['projects.maze.desc1', 'projects.maze.desc2', 'projects.maze.desc3', 'projects.maze.desc4'],
    github: getGitHubRepo('maze-generators'),
    tags: [Tag.Archived, Tag.C, Tag.GitHub, Tag.CLI, Tag.Puzzle],
    title: 'projects.maze.title',
    subtitle: 'projects.maze.subtitle',
    years: [2018],
    textualSnapshot: [
      '+---+---+---+---+',
      '| #   # |       |',
      '+---+   +   +---+',
      '|     # |   |   |',
      '+   +   +   +   +',
      '|   | #   #   # |',
      '+---+---+---+---+'
    ]
  },
  {
    description: ['projects.resume.desc1', 'projects.resume.desc2', 'projects.resume.desc3'],
    github: getGitHubRepo('sebranly-resume'),
    tags: [Tag.Archived, Tag.GitHub, Tag.HTML, Tag.JavaScript, Tag.Live, Tag.Website, Tag.CSS],
    title: 'projects.resume.title',
    subtitle: 'projects.resume.subtitle',
    website: isMobile ? undefined : getWebsite('sebranly-resume'),
    years: [2018]
  },
  {
    description: ['projects.aoc.desc1', 'projects.aoc.desc2', 'projects.aoc.desc3'],
    github: getGitHubRepo('advent-of-code'),
    tags: [Tag.Archived, Tag.JavaScript, Tag.GitHub, Tag.CLI, Tag.Puzzle],
    title: 'projects.aoc.title',
    subtitle: 'projects.aoc.subtitle',
    years: [2018]
  },
  {
    contributors: [
      {
        female: true,
        name: 'Faith',
        roles: [Role.WebsiteConcept]
      }
    ],
    description: [
      'projects.englishPronunciation.desc1',
      'projects.englishPronunciation.desc2',
      'projects.englishPronunciation.desc3'
    ],
    github: 'https://github.com/fbpellas/fbpellas.github.io',
    tags: [Tag.React, Tag.CSS, Tag.GitHub, Tag.TypeScript, Tag.Live, Tag.Website],
    title: 'projects.englishPronunciation.title',
    subtitle: 'projects.englishPronunciation.subtitle',
    website: 'https://fbpellas.github.io/',
    years: [2020, 2022]
  },
  {
    description: ['projects.coolr.desc1', 'projects.coolr.desc2', 'projects.coolr.desc3'],
    github: getGitHubRepo('coolr'),
    tags: [Tag.Archived, Tag.React, Tag.CSS, Tag.GitHub, Tag.TypeScript, Tag.Live, Tag.Puzzle, Tag.Website],
    title: 'projects.coolr.title',
    subtitle: 'projects.coolr.subtitle',
    years: [2021],
    website: isMobile ? undefined : getWebsite('coolr')
  },
  {
    description: ['projects.ctrOcr.desc1', 'projects.ctrOcr.desc2', 'projects.ctrOcr.desc3'],
    github: getGitHubRepo('ctr-ocr'),
    tags: [Tag.React, Tag.CSS, Tag.GitHub, Tag.TypeScript, Tag.Live, Tag.Website, Tag.DNS],
    title: 'projects.ctrOcr.title',
    subtitle: 'projects.ctrOcr.subtitle',
    years: [2022],
    website: 'https://www.crashteamresults.com'
  },
  {
    description: ['projects.templateTs.desc1', 'projects.templateTs.desc2', 'projects.templateTs.desc3'],
    github: getGitHubRepo('template-ts'),
    tags: [Tag.React, Tag.CSS, Tag.GitHub, Tag.TypeScript, Tag.Live, Tag.Website],
    title: 'projects.templateTs.title',
    subtitle: 'projects.templateTs.subtitle',
    years: [2022],
    website: getWebsite('template-ts')
  },
  {
    contributors: [
      {
        name: STEPHANE,
        roles: [Role.Designer]
      }
    ],
    description: ['projects.kaleidoscope.desc1', 'projects.kaleidoscope.desc2', 'projects.kaleidoscope.desc3'],
    github: getGitHubRepo('kaleidoscope'),
    tags: [Tag.React, Tag.CSS, Tag.GitHub, Tag.TypeScript, Tag.Live, Tag.Website],
    title: 'projects.kaleidoscope.title',
    subtitle: 'projects.kaleidoscope.subtitle',
    years: [2022, 2023],
    website: getWebsite('kaleidoscope')
  },
  {
    description: ['projects.dmz.desc1', 'projects.dmz.desc2', 'projects.dmz.desc3'],
    github: getGitHubRepo('dmz'),
    tags: [Tag.React, Tag.CSS, Tag.GitHub, Tag.TypeScript, Tag.Live, Tag.Website],
    title: 'projects.dmz.title',
    subtitle: 'projects.dmz.subtitle',
    years: [2023],
    website: getWebsite('dmz')
  },
  {
    description: ['projects.portfolio.desc1', 'projects.portfolio.desc2', 'projects.portfolio.desc3'],
    github: getGitHubRepo('portfolio'),
    tags: [Tag.React, Tag.TailwindCSS, Tag.GitHub, Tag.TypeScript, Tag.Live, Tag.Website, Tag.i18n],
    title: 'projects.portfolio.title',
    subtitle: 'projects.portfolio.subtitle',
    years: [2023],
    website: getWebsite('portfolio')
  }
];

export { projects };
