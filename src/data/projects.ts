import { STEPHANE } from '../constants';
import { ImageExtension, ImageFolder, Project, Role, Tag } from '../types';
import { getGitHubRepo, getWebsite } from '../utils/urls';
import { isMobile } from 'react-device-detect';

// TODO: add manille and chez as npm
const projects: Project[] = [
  {
    description: ['projects.ctr2d.desc1', 'projects.ctr2d.desc2', 'projects.ctr2d.desc3'],
    images: {
      folder: ImageFolder.CrashTeamRacing2D,
      images: [
        {
          alt: 'Game menu that allows up to 4 players to select their characters',
          nb: 1,
          extension: ImageExtension.PNG
        },
        {
          alt: 'Game screenshot that shows Polar character currently playing its turn on Crash Cove track',
          nb: 2,
          extension: ImageExtension.PNG
        },
        {
          alt: 'End of game screenshot that shows the podium for top 3 characters',
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
    description: ['projects.tetrisSpace.desc1', 'projects.tetrisSpace.desc2', 'projects.tetrisSpace.desc3'],
    images: {
      folder: ImageFolder.TETRISpace,
      images: [
        {
          alt: 'Screenshot of lower screen of Nintendo DS with Tetris game being played',
          nb: 1,
          extension: ImageExtension.PNG
        },
        {
          alt: 'Screenshot of lower screen of Nintendo DS with Tetris game being continued with a 4-block line about to score lots of points',
          nb: 2,
          extension: ImageExtension.PNG
        },
        {
          alt: 'Screenshot of TETRISpace menu referencing Site du Zero, former name for OpenClassrooms',
          nb: 3,
          extension: ImageExtension.PNG
        },
        {
          alt: 'Screenshot of replay menu',
          nb: 4,
          extension: ImageExtension.PNG
        },
        {
          alt: 'Screenshot of current TETRISpace game (1/3)',
          nb: 5,
          extension: ImageExtension.PNG
        },
        {
          alt: 'Screenshot of current TETRISpace game (2/3)',
          nb: 6,
          extension: ImageExtension.PNG
        },
        {
          alt: 'Screenshot of current TETRISpace game (3/3)',
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
  {
    description: ['projects.myDraw.desc1', 'projects.myDraw.desc2', 'projects.myDraw.desc3'],
    images: {
      folder: ImageFolder.myDraw,
      images: [{ alt: 'Homer Simpson drawn in myDraw by Sebas', nb: 1, extension: ImageExtension.PNG }]
    },
    title: 'projects.myDraw.title',
    subtitle: 'projects.myDraw.subtitle',
    tags: [Tag.Archived, Tag.C, Tag.SDL, Tag.Windows, Tag.GUI],
    video: 'https://www.youtube.com/watch?v=blwEK3m85Ok',
    years: [2012]
  },
  {
    contributors: [{ name: STEPHANE, roles: [Role.Designer, Role.Tester] }],
    description: ['projects.bobolsSokoban3d.desc1', 'projects.bobolsSokoban3d.desc2', 'projects.bobolsSokoban3d.desc3'],
    images: {
      folder: ImageFolder.BobolsSokoban3D,
      images: [
        {
          alt: 'Menu of the game with adventure mode icon, level editor play mode, help and level editor edition mode',
          nb: 1,
          extension: ImageExtension.PNG
        },
        {
          alt: `Game of Sokoban in Adventure Mode where purple ice cubes is on a crystal while cyan ice cubes need to be put on a crystal`,
          nb: 2,
          extension: ImageExtension.PNG
        },
        {
          alt: 'Level editor of Sokoban game where user can place several different items including walls, ice cubes and crystals',
          nb: 3,
          extension: ImageExtension.PNG
        },
        {
          alt: 'Credits of Sokoban game with four help pages (second page is shown with tutorial text)',
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
    tags: [Tag.Archived, Tag.C, Tag.NintendoDS, Tag.PAlib, Tag.GUI],
    years: [2013]
  },
  {
    description: ['projects.myPixelArt.desc1', 'projects.myPixelArt.desc2', 'projects.myPixelArt.desc3'],
    title: 'projects.myPixelArt.title',
    subtitle: 'projects.myPixelArt.subtitle',
    tags: [Tag.Archived, Tag.C, Tag.SDL, Tag.NintendoDS, Tag.PAlib, Tag.GUI],
    years: [2013]
  },
  {
    description: [
      'projects.myTetris.desc1',
      'projects.myTetris.desc2',
      'projects.myTetris.desc3',
      'projects.myTetris.desc4'
    ],
    title: 'projects.myTetris.title',
    subtitle: 'projects.myTetris.subtitle',
    tags: [Tag.ThreeDimensional, Tag.OpenGL, Tag.Archived, Tag.GUI, Tag.C, Tag.NintendoDS, Tag.VideoGame, Tag.PAlib],
    years: [2013]
  },
  {
    contributors: [{ name: 'Julien', roles: [Role.Algorithm] }],
    description: ['projects.mySudokuTool.desc1', 'projects.mySudokuTool.desc2', 'projects.mySudokuTool.desc3'],
    images: {
      folder: ImageFolder.mySudokuTool,
      images: [
        {
          alt: 'Graphical user interface of mySudokuTool showing the user adding digit 4 in the center block of the Sudoku grid',
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
        name: 'Alex',
        roles: [Role.Developer]
      }
    ],
    description: ['projects.connectFour.desc1', 'projects.connectFour.desc2', 'projects.connectFour.desc3'],
    github: getGitHubRepo('connect-four'),
    images: {
      folder: ImageFolder.ConnectFour,
      images: [
        {
          alt: 'Game of Connect Four played between two human players with red and yellow tokens',
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
    description: ['projects.myEnglishGame.desc1', 'projects.myEnglishGame.desc2', 'projects.myEnglishGame.desc3'],
    download: 'https://drive.google.com/drive/folders/1vZlziuiVk13iw2XnyRuGXONLLH21e8fM',
    images: {
      folder: ImageFolder.myEnglishGame,
      images: [
        {
          alt: 'Game of myEnglishGame showing that letter B can replace C in COOK in order to turn it into BOOK which is the French translation for Livre',
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
    description: ['projects.GTAV.desc1', 'projects.GTAV.desc2', 'projects.GTAV.desc3'],
    images: {
      folder: ImageFolder.GTAVShowYourCars,
      images: [
        {
          alt: 'Version 2 of the website that shows pictures of vehicles posted by users',
          nb: 1,
          extension: ImageExtension.PNG
        },
        {
          alt: 'Version 1 of the website that shows pictures of vehicles posted by users',
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
        roles: [Role.ProductOwner]
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
    video: 'https://www.youtube.com/watch?v=XjwoKGtEQag',
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
