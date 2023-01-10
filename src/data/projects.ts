import { STEPHANE } from '../constants';
import { Project, Role, Tag } from '../types';

// TODO: add myMaze (perfect mazes only)
const projects: Project[] = [
  {
    description: ['2D board game adaptation of CTR', 'same characters', 'one track: crash cove', 'all items/weapons', 'cheat code for penta'],
    title: 'Crash Team Racing 2D',
    tags: [Tag.Archived, Tag.C, Tag.SDL, Tag.VideoGame, Tag.Windows],
    years: [2011]
  },
  {
    contributors: [{ name: STEPHANE, roles: [Role.GraphicDesigner, Role.Tester] }],
    description: [
      'Over a long weekend',
      '4-bit Tetris in space',
      'Squared map 11x11',
      '10, 30, 50, 100 points and hi-score'
    ],
    title: 'TETRISpace',
    subtitle: 'Nintendo DS playable version of Tetris',
    tags: [Tag.Archived, Tag.C, Tag.NintendoDS, Tag.VideoGame, Tag.PAlib],
    years: [2011]
  },
  // TODO: video
  {
    description: ['mini version of paint', 'recursion for filling colors'],
    title: 'myDraw',
    subtitle: 'TODO',
    tags: [Tag.Archived, Tag.C, Tag.MyProjects, Tag.SDL, Tag.Windows],
    years: [2012]
  },
  {
    contributors: [{ name: STEPHANE, roles: [Role.GraphicDesigner, Role.Tester]}],
    description: ['sokoban', '2D-isometric from scratch', 'level editor with game rules (one spawn, etc.), has to be completed to validate a level', 'adventure mode with 20 levels of increasing difficulty', 'progression with save'],
    title: `Bobol's Sokoban 3D`,
    tags: [Tag.Archived, Tag.C, Tag.NintendoDS, Tag.VideoGame, Tag.PAlib],
    years: [2012]
  },
  {
    description: ['challenge on openclassrooms', 'can edit all rules so not just conway', 'two themes', 'zoom for drawing easily'],
    title: 'myLife',
    subtitle: `Conway's Game of Life`,
    tags: [Tag.Archived, Tag.C, Tag.MyProjects, Tag.NintendoDS, Tag.PAlib],
    years: [2013]
  },
  {
    description: ['Create 16x16 or 32x32 pixel art', 'save it on your ds', 'export it on your computer 1024x1024', 'inspired by animal crossing ds and mario kart ds'],
    title: 'myPixelArt',
    subtitle: 'Create pixel art on your Nintendo DS, export it to your computer',
    tags: [Tag.Archived, Tag.C, Tag.SDL, Tag.MyProjects, Tag.NintendoDS, Tag.PAlib],
    years: [2013]
  },
  {
    // TODO: PlayStation theme screenshot
    description: ['tetrispace++', 'multiple themes (classic, gameboy, bubble bobble, Super mario bros, playstation, dice, etc.)', 'player card with avatar (actually coming from myPixelArt), caption, background color', 'challenges to unlock all of it', 'experiment with 3D', 'music'],
    title: 'myTetris',
    tags: [Tag.ThreeDimensional, Tag.OpenGL, Tag.Archived, Tag.C, Tag.MyProjects, Tag.NintendoDS, Tag.VideoGame, Tag.PAlib],
    years: [2013]
  },
  {
    contributors: [{ name: 'Julien', roles: [Role.Algorithm]}],
    description: ['sudoku solver', 'graphical part'],
    title: 'mySudokuTool',
    tags: [Tag.Archived, Tag.C, Tag.MyProjects, Tag.SDL, Tag.Windows],
    years: [2013]
  },
  {
    // TODO: video + guide + download link
    description: ['idea from scratch', 'tetris gameplay with english-french translations', 'letter addition, letter removal, letter in between, anagrams', '1300 available words'],
    title: 'myEnglishGame',
    subtitle: 'Learn English vocabulary while playing',
    tags: [Tag.Archived, Tag.C, Tag.MyProjects, Tag.SDL, Tag.VideoGame, Tag.Windows],
    years: [2013, 2014]
  },
  {
    contributors: [{
      name: STEPHANE,
      roles: [Role.Developer]
    }],
    description: ['first website development', 'all vehicle models from GTAV', 'can create an account, post and rate pictures of vehicles', 'admin module', '50 autres membres qui ont déjà envoyé plus de 250 images et pas moins de 2400 notes !'],
    tags: [Tag.Archived, Tag.JavaScript, Tag.Website, Tag.HTML, Tag.CSS, Tag.PHP, Tag.SQL],
    title: 'GTAV Show Your Cars',
    years: [2014]
  }
];

export { projects };
