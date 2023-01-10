import { STEPHANE } from '../constants';
import { Project, Role, Tag } from '../types';

// TODO: add myMaze (perfect mazes only)
const projects: Project[] = [
  {
    description: [
      'Being a fan of the PS1 video game, I decide to practice my programming skills by creating a simplified version of Crash Team Racing.',
      'Despite focusing on one track only, I carefully make sure to include all weapons from the original game as well as the whole character roster (including Penta Penguin through a cheat code).',
      'The turn-based nature of the game allows me to create my first 4-player game.'
    ],
    title: 'Crash Team Racing 2D',
    subtitle: 'Turn-based multiplayer game',
    tags: [Tag.Archived, Tag.C, Tag.SDL, Tag.VideoGame, Tag.Windows],
    years: [2011]
  },
  {
    contributors: [{ name: STEPHANE, roles: [Role.Designer, Role.Tester] }],
    description: [
      'Following pieces of advice from the OpenClassrooms community, I create a version of the famous Tetris videogame over a weekend.',
      'I decide to challenge myself by programming it for the Nintendo DS known for its limitations on sprites.',
      'It becomes TETRISpace, a 4-bit Tetris playable on a 11x11 squared map. The first version includes a scoring system and a save for the hi-score.'
    ],
    title: 'TETRISpace',
    subtitle: 'Nintendo DS playable version of Tetris',
    tags: [Tag.Archived, Tag.C, Tag.NintendoDS, Tag.VideoGame, Tag.PAlib],
    years: [2011]
  },
  // TODO: video
  {
    description: [
      'Intrigued by image processing, I decide to create my own version of Paint.',
      'The final version offers lots of tools: pen, eraser, color picker, brush, rectangle, mirror and inverted modes, etc.',
      'The most complicated tool I implement happens to be the bucket tool which makes me practice recursion.'
    ],
    title: 'myDraw',
    subtitle: 'Mini version of Paint',
    tags: [Tag.Archived, Tag.C, Tag.MyProjects, Tag.SDL, Tag.Windows],
    years: [2012]
  },
  {
    contributors: [{ name: STEPHANE, roles: [Role.Designer, Role.Tester] }],
    description: [
      'Out of curiosity, I willingly decide to reinvent the wheel by creating a 2D-isometric view from scratch for a game.',
      'With a pen and paper, I come up with the rendering formulae which I implement as a Sokoban game.',
      'It becomes a fully fledged game consisting of a 20-level adventure mode with increasing difficulty, a level editor with validation rules and a file save for both modes.'
    ],
    title: `Bobol's Sokoban 3D`,
    subtitle: 'First 2D-isometric experiment',
    tags: [Tag.Archived, Tag.C, Tag.NintendoDS, Tag.VideoGame, Tag.PAlib],
    years: [2012]
  },
  {
    description: [
      `Browsing the OpenClassrooms community, I discover and join a workshop/competition in which members discuss and implement various versions of Conway's Game of Life.`,
      'I decide to program it on the Nintendo DS for originality. It leads to some readibility challenges I overcome by creating two visual themes and allowing users to use different levels of zoom while drawing the initial generation.',
      `Possibilities become much larger than Conway's version as I allow the users to edit the cells' birth and death rules.`
    ],
    title: 'myLife',
    subtitle: `Conway's Game of Life`,
    tags: [Tag.Archived, Tag.C, Tag.MyProjects, Tag.NintendoDS, Tag.PAlib],
    years: [2013]
  },
  {
    description: [
      'Inspired by some gameplay elements from Animal Crossing and Mario Kart which allow you to draw flags/clothing design for your characters, I create a pixel art editor for the same console, the Nintendo DS.',
      'Classic 16x16 or 32x32 pixel art can be recreated and saved on the console.',
      'Another tool I develop in parallel allows you to export this save file (aka your creations) into a bigger picture (e.g. 1024x1024 pixels) so that you can use it on your computer.'
    ],
    title: 'myPixelArt',
    subtitle: 'Pixel art from your DS to your PC',
    tags: [Tag.Archived, Tag.C, Tag.SDL, Tag.MyProjects, Tag.NintendoDS, Tag.PAlib],
    years: [2013]
  },
  {
    // TODO: PlayStation theme screenshot
    description: [
      'This project re-uses two previous ones: TETRISpace for the core gameplay, and myPixelArt for drawing its sprites.',
      'I push the gameplay further by having challenges (e.g. remove 4 lines at once, score 10000 points) which unlock several visual themes (Classic, Gameboy, Bubble Bobble, Super Mario Bros, PlayStation, Dice).',
      'The player also unlocks avatars (also made within myPixelArt) so that they can edit their player card along with their caption and background color.',
      'Now familiar with the Nintendo DS, I decide to learn new things such as playing audio files and experimenting with 3D.'
    ],
    title: 'myTetris',
    subtitle: 'TETRISpace++',
    tags: [
      Tag.ThreeDimensional,
      Tag.OpenGL,
      Tag.Archived,
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
    description: [
      'With a classmate, we decide to work together on a Sudoku Solver.',
      `While Julien focuses on the algorithm itself, I'm in charge of the graphical part of the project. The user can use their mouse and/or keyboard for filling out the initial Sudoku grid. Basic Sudoku rules are applied so that digits remain unique in each row, column and block.`,
      'The user can then press a button and reveal the Sudoku solution if it exists, thanks to a recursive implementation.'
    ],
    title: 'mySudokuTool',
    subtitle: 'Sudoku Solver',
    tags: [Tag.Archived, Tag.C, Tag.MyProjects, Tag.SDL, Tag.Windows],
    years: [2013]
  },
  {
    // TODO: video + guide + download link
    description: [
      'Willing to push students to learn English, I implement an idea from scratch.',
      'A video game based on, but very different from Tetris, is born. It invites French speakers to learn English vocabulary by interacting with letters. Letters are added, replaced or removed in order to move on to the next word in this never-ending gameplay.',
      'Over 1300 words are available and the game features surprising elements such as anagrams.'
    ],
    title: 'myEnglishGame',
    subtitle: 'Learn English vocabulary while playing',
    tags: [Tag.Archived, Tag.C, Tag.MyProjects, Tag.SDL, Tag.VideoGame, Tag.Windows],
    years: [2013, 2014]
  },
  {
    contributors: [
      {
        name: STEPHANE,
        roles: [Role.Developer]
      }
    ],
    description: [
      'My brother welcomes my help on a project he started. Together we develop our first website from scratch.',
      'Users can browse the full list of vehicles (cars, planes, boats, etc.) from the video game Gran Theft Auto V. They can create an account, post a picture of the vehicle they customized within GTA onto our website and receive ratings from other users for said pictures.',
      'Our user base grows to welcome a few hundreds users who submit hundreds of pictures and thousands of ratings, pushing us to tweak our admin section in order to support such a volume.'
    ],
    tags: [Tag.Archived, Tag.JavaScript, Tag.Website, Tag.HTML, Tag.CSS, Tag.PHP, Tag.SQL],
    title: 'GTAV Show Your Cars',
    subtitle: '',
    years: [2014]
  }
];

export { projects };
