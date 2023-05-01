import { STEPHANE } from '../constants';
import { ImageExtension, ImageFolder, Project, Role, Tag } from '../types';
import { getGitHubRepo, getWebsite } from '../utils/urls';
import { isMobile } from 'react-device-detect';

// TODO: add manille and chez as npm
const projects: Project[] = [
  {
    description: ['projects.ctr2d.desc.1', 'projects.ctr2d.desc.2', 'projects.ctr2d.desc.3'],
    images: {
      folder: ImageFolder.CrashTeamRacing2D,
      images: [
        {
          alt: 'projects.ctr2d.alt.2',
          nb: 2,
          extension: ImageExtension.PNG
        },
        {
          alt: 'projects.ctr2d.alt.1',
          nb: 1,
          extension: ImageExtension.PNG
        },
        {
          alt: 'projects.ctr2d.alt.3',
          nb: 3,
          extension: ImageExtension.PNG
        }
      ]
    },
    subtitle: 'projects.ctr2d.subtitle',
    title: 'projects.ctr2d.title',
    tags: [Tag.Archived, Tag.C, Tag.SDL, Tag.VideoGame, Tag.Windows, Tag.GUI],
    years: [2011]
  },
  {
    contributors: [{ name: STEPHANE, roles: [Role.Designer, Role.Tester] }],
    description: ['projects.tetrisSpace.desc.1', 'projects.tetrisSpace.desc.2', 'projects.tetrisSpace.desc.3'],
    images: {
      folder: ImageFolder.TETRISpace,
      images: [
        {
          alt: 'projects.tetrisSpace.alt.1',
          nb: 1,
          extension: ImageExtension.PNG
        },
        {
          alt: 'projects.tetrisSpace.alt.2',
          nb: 2,
          extension: ImageExtension.PNG
        },
        {
          alt: 'projects.tetrisSpace.alt.3',
          nb: 3,
          extension: ImageExtension.PNG
        },
        {
          alt: 'projects.tetrisSpace.alt.4',
          nb: 4,
          extension: ImageExtension.PNG
        },
        {
          alt: 'projects.tetrisSpace.alt.5',
          nb: 5,
          extension: ImageExtension.PNG
        },
        {
          alt: 'projects.tetrisSpace.alt.6',
          nb: 6,
          extension: ImageExtension.PNG
        },
        {
          alt: 'projects.tetrisSpace.alt.7',
          nb: 7,
          extension: ImageExtension.PNG
        }
      ]
    },
    title: 'projects.tetrisSpace.title',
    subtitle: 'projects.tetrisSpace.subtitle',
    tags: [Tag.Archived, Tag.C, Tag.NintendoDS, Tag.VideoGame, Tag.PAlib, Tag.GUI],
    years: [2011]
  },
  {
    description: [
      'projects.eightQueensPuzzle.desc.1',
      'projects.eightQueensPuzzle.desc.2',
      'projects.eightQueensPuzzle.desc.3'
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
  {
    description: ['projects.myDraw.desc.1', 'projects.myDraw.desc.2', 'projects.myDraw.desc.3'],
    images: {
      folder: ImageFolder.myDraw,
      images: [{ alt: 'projects.myDraw.alt.1', nb: 1, extension: ImageExtension.PNG }]
    },
    title: 'projects.myDraw.title',
    subtitle: 'projects.myDraw.subtitle',
    tags: [Tag.Archived, Tag.C, Tag.SDL, Tag.Windows, Tag.GUI],
    video: 'https://www.youtube.com/watch?v=blwEK3m85Ok',
    years: [2012]
  },
  {
    contributors: [{ name: STEPHANE, roles: [Role.Designer, Role.Tester] }],
    description: [
      'projects.bobolsSokoban3d.desc.1',
      'projects.bobolsSokoban3d.desc.2',
      'projects.bobolsSokoban3d.desc.3'
    ],
    images: {
      folder: ImageFolder.BobolsSokoban3D,
      images: [
        {
          alt: 'projects.bobolsSokoban3d.alt.1',
          nb: 1,
          extension: ImageExtension.PNG
        },
        {
          alt: 'projects.bobolsSokoban3d.alt.2',
          nb: 2,
          extension: ImageExtension.PNG
        },
        {
          alt: 'projects.bobolsSokoban3d.alt.3',
          nb: 3,
          extension: ImageExtension.PNG
        },
        {
          alt: 'projects.bobolsSokoban3d.alt.4',
          nb: 4,
          extension: ImageExtension.PNG
        }
      ]
    },
    title: 'projects.bobolsSokoban3d.title',
    subtitle: 'projects.bobolsSokoban3d.subtitle',
    tags: [Tag.Archived, Tag.C, Tag.NintendoDS, Tag.VideoGame, Tag.PAlib, Tag.GUI],
    years: [2012]
  },
  {
    description: ['projects.magicSquares.desc.1', 'projects.magicSquares.desc.2', 'projects.magicSquares.desc.3'],
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
    description: ['projects.myLife.desc.1', 'projects.myLife.desc.2', 'projects.myLife.desc.3'],
    images: {
      folder: ImageFolder.myLife,
      images: [
        {
          alt: 'projects.myLife.alt.1',
          nb: 1,
          extension: ImageExtension.PNG
        },
        {
          alt: 'projects.myLife.alt.2',
          nb: 2,
          extension: ImageExtension.PNG
        },
        {
          alt: 'projects.myLife.alt.3',
          nb: 3,
          extension: ImageExtension.PNG
        }
      ]
    },
    title: 'projects.myLife.title',
    subtitle: 'projects.myLife.subtitle',
    tags: [Tag.Archived, Tag.C, Tag.NintendoDS, Tag.PAlib, Tag.GUI],
    years: [2013]
  },
  {
    description: ['projects.myPixelArt.desc.1', 'projects.myPixelArt.desc.2', 'projects.myPixelArt.desc.3'],
    title: 'projects.myPixelArt.title',
    subtitle: 'projects.myPixelArt.subtitle',
    tags: [Tag.Archived, Tag.C, Tag.SDL, Tag.NintendoDS, Tag.PAlib, Tag.GUI],
    years: [2013]
  },
  {
    description: [
      'projects.myTetris.desc.1',
      'projects.myTetris.desc.2',
      'projects.myTetris.desc.3',
      'projects.myTetris.desc.4'
    ],
    title: 'projects.myTetris.title',
    subtitle: 'projects.myTetris.subtitle',
    tags: [Tag.ThreeDimensional, Tag.OpenGL, Tag.Archived, Tag.GUI, Tag.C, Tag.NintendoDS, Tag.VideoGame, Tag.PAlib],
    years: [2013]
  },
  {
    contributors: [{ name: 'Julien', roles: [Role.Algorithm] }],
    description: ['projects.mySudokuTool.desc.1', 'projects.mySudokuTool.desc.2', 'projects.mySudokuTool.desc.3'],
    images: {
      folder: ImageFolder.mySudokuTool,
      images: [
        {
          alt: 'projects.mySudokuTool.alt.1',
          nb: 1,
          extension: ImageExtension.PNG
        }
      ]
    },
    title: 'projects.mySudokuTool.title',
    subtitle: 'projects.mySudokuTool.subtitle',
    tags: [Tag.Archived, Tag.C, Tag.SDL, Tag.Windows, Tag.GUI],
    years: [2013]
  },
  {
    contributors: [
      {
        name: 'Axel',
        roles: [Role.Developer]
      }
    ],
    description: ['projects.connectFour.desc.1', 'projects.connectFour.desc.2', 'projects.connectFour.desc.3'],
    github: getGitHubRepo('connect-four'),
    images: {
      folder: ImageFolder.ConnectFour,
      images: [
        {
          alt: 'projects.connectFour.alt.1',
          nb: 1,
          extension: ImageExtension.PNG
        }
      ]
    },
    tags: [Tag.Archived, Tag.GitHub, Tag.Python, Tag.SchoolProject, Tag.Windows, Tag.GUI],
    title: 'projects.connectFour.title',
    subtitle: 'projects.connectFour.subtitle',
    years: [2013]
  },
  {
    description: ['projects.myEnglishGame.desc.1', 'projects.myEnglishGame.desc.2', 'projects.myEnglishGame.desc.3'],
    download: 'https://drive.google.com/drive/folders/1vZlziuiVk13iw2XnyRuGXONLLH21e8fM',
    images: {
      folder: ImageFolder.myEnglishGame,
      images: [
        {
          alt: 'projects.myEnglishGame.alt.1',
          nb: 1,
          extension: ImageExtension.PNG
        }
      ]
    },
    title: 'projects.myEnglishGame.title',
    subtitle: 'projects.myEnglishGame.subtitle',
    tags: [Tag.Archived, Tag.C, Tag.SDL, Tag.VideoGame, Tag.Windows, Tag.GUI],
    video: 'https://www.youtube.com/watch?v=P5PY8aHnYiQ',
    years: [2013, 2014]
  },
  {
    contributors: [
      {
        name: STEPHANE,
        roles: [Role.Developer]
      }
    ],
    description: ['projects.GTAV.desc.1', 'projects.GTAV.desc.2', 'projects.GTAV.desc.3'],
    images: {
      folder: ImageFolder.GTAVShowYourCars,
      images: [
        {
          alt: 'projects.GTAV.alt.1',
          nb: 1,
          extension: ImageExtension.PNG
        },
        {
          alt: 'projects.GTAV.alt.2',
          nb: 2,
          extension: ImageExtension.JPG
        }
      ]
    },
    tags: [Tag.Archived, Tag.JavaScript, Tag.Website, Tag.HTML, Tag.CSS, Tag.PHP, Tag.SQL],
    title: 'projects.GTAV.title',
    subtitle: 'projects.GTAV.subtitle',
    years: [2014]
  },
  {
    contributors: [
      {
        name: 'projects.people.anonymousPerson',
        roles: [Role.Developer]
      }
    ],
    description: ['projects.simpleBot.desc.1', 'projects.simpleBot.desc.2', 'projects.simpleBot.desc.3'],
    github: getGitHubRepo('simple-bot'),
    tags: [Tag.Archived, Tag.AIML, Tag.SchoolProject, Tag.CLI],
    title: 'projects.simpleBot.title',
    subtitle: 'projects.simpleBot.subtitle',
    years: [2016]
  },
  {
    description: ['projects.aoc2017.desc.1', 'projects.aoc2017.desc.2', 'projects.aoc2017.desc.3'],
    github: getGitHubRepo('advent-of-code-2017'),
    tags: [Tag.Archived, Tag.C, Tag.GitHub, Tag.CLI, Tag.Puzzle],
    title: 'projects.aoc2017.title',
    subtitle: 'projects.aoc2017.subtitle',
    years: [2017]
  },
  {
    description: ['projects.projectEuler.desc.1', 'projects.projectEuler.desc.2'],
    github: getGitHubRepo('project-euler'),
    tags: [Tag.Archived, Tag.Python, Tag.GitHub, Tag.CLI, Tag.Puzzle],
    title: 'projects.projectEuler.title',
    subtitle: 'projects.projectEuler.subtitle',
    years: [2017]
  },
  {
    description: ['projects.maze.desc.1', 'projects.maze.desc.2', 'projects.maze.desc.3', 'projects.maze.desc.4'],
    github: getGitHubRepo('maze-generators'),
    images: {
      folder: ImageFolder.myMaze,
      images: [
        {
          alt: 'projects.maze.alt.1',
          nb: 1,
          extension: ImageExtension.PNG
        },
        {
          alt: 'projects.maze.alt.2',
          nb: 2,
          extension: ImageExtension.PNG
        }
      ]
    },
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
    description: ['projects.resume.desc.1', 'projects.resume.desc.2', 'projects.resume.desc.3'],
    github: getGitHubRepo('sebranly-resume'),
    tags: [Tag.Archived, Tag.GitHub, Tag.HTML, Tag.JavaScript, Tag.Live, Tag.Website, Tag.CSS],
    title: 'projects.resume.title',
    subtitle: 'projects.resume.subtitle',
    website: isMobile ? undefined : getWebsite('sebranly-resume'),
    years: [2018]
  },
  {
    description: ['projects.aoc.desc.1', 'projects.aoc.desc.2', 'projects.aoc.desc.3'],
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
        roles: [Role.ProductOwner]
      }
    ],
    description: [
      'projects.englishPronunciation.desc.1',
      'projects.englishPronunciation.desc.2',
      'projects.englishPronunciation.desc.3'
    ],
    github: 'https://github.com/fbpellas/fbpellas.github.io',
    tags: [Tag.React, Tag.CSS, Tag.GitHub, Tag.TypeScript, Tag.Live, Tag.Website],
    title: 'projects.englishPronunciation.title',
    subtitle: 'projects.englishPronunciation.subtitle',
    website: 'https://fbpellas.github.io/',
    years: [2020, 2022]
  },
  {
    description: ['projects.coolr.desc.1', 'projects.coolr.desc.2', 'projects.coolr.desc.3'],
    github: getGitHubRepo('coolr'),
    tags: [Tag.Archived, Tag.React, Tag.CSS, Tag.GitHub, Tag.TypeScript, Tag.Live, Tag.Puzzle, Tag.Website],
    title: 'projects.coolr.title',
    subtitle: 'projects.coolr.subtitle',
    years: [2021],
    website: isMobile ? undefined : getWebsite('coolr')
  },
  {
    description: ['projects.ctrOcr.desc.1', 'projects.ctrOcr.desc.2', 'projects.ctrOcr.desc.3'],
    github: getGitHubRepo('ctr-ocr'),
    tags: [Tag.React, Tag.CSS, Tag.GitHub, Tag.TypeScript, Tag.Live, Tag.Website, Tag.DNS],
    title: 'projects.ctrOcr.title',
    subtitle: 'projects.ctrOcr.subtitle',
    years: [2022],
    video: 'https://www.youtube.com/watch?v=XjwoKGtEQag',
    website: 'https://www.crashteamresults.com'
  },
  {
    description: [
      'projects.templateTs.desc.1',
      'projects.templateTs.desc.2',
      'projects.templateTs.desc.3',
      'projects.templateTs.desc.4'
    ],
    github: getGitHubRepo('template-ts'),
    tags: [Tag.React, Tag.CSS, Tag.GitHub, Tag.TypeScript, Tag.Archived, Tag.Website],
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
    description: ['projects.kaleidoscope.desc.1', 'projects.kaleidoscope.desc.2', 'projects.kaleidoscope.desc.3'],
    github: getGitHubRepo('kaleidoscope'),
    tags: [Tag.React, Tag.CSS, Tag.GitHub, Tag.TypeScript, Tag.Live, Tag.Website],
    title: 'projects.kaleidoscope.title',
    subtitle: 'projects.kaleidoscope.subtitle',
    years: [2022, 2023],
    website: getWebsite('kaleidoscope')
  },
  {
    description: ['projects.dmz.desc.1', 'projects.dmz.desc.2', 'projects.dmz.desc.3'],
    github: getGitHubRepo('dmz'),
    tags: [Tag.React, Tag.CSS, Tag.GitHub, Tag.TailwindCSS, Tag.TypeScript, Tag.Live, Tag.Website],
    title: 'projects.dmz.title',
    subtitle: 'projects.dmz.subtitle',
    years: [2023],
    website: getWebsite('dmz')
  },
  {
    description: ['projects.portfolio.desc.1', 'projects.portfolio.desc.2', 'projects.portfolio.desc.3'],
    github: getGitHubRepo('portfolio'),
    tags: [Tag.React, Tag.TailwindCSS, Tag.GitHub, Tag.TypeScript, Tag.Live, Tag.Website, Tag.i18n],
    title: 'projects.portfolio.title',
    subtitle: 'projects.portfolio.subtitle',
    years: [2023],
    website: getWebsite('portfolio')
  }
];

export { projects };
