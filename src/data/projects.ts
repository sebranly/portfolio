import { STEPHANE } from '../constants';
import { Project, Role, Tag } from '../types';

// TODO: add myMaze (perfect mazes only)
const projects: Project[] = [
  {
    description: ['projects.ctr2d.desc1', 'projects.ctr2d.desc2', 'projects.ctr2d.desc3'],
    title: 'Crash Team Racing 2D',
    subtitle: 'projects.ctr2d.subtitle',
    tags: [Tag.Archived, Tag.C, Tag.SDL, Tag.VideoGame, Tag.Windows],
    years: [2011]
  },
  {
    contributors: [{ name: STEPHANE, roles: [Role.Designer, Role.Tester] }],
    description: ['projects.tetrisSpace.desc1', 'projects.tetrisSpace.desc2', 'projects.tetrisSpace.desc3'],
    title: 'TETRISpace',
    subtitle: 'projects.tetrisSpace.subtitle',
    tags: [Tag.Archived, Tag.C, Tag.NintendoDS, Tag.VideoGame, Tag.PAlib],
    years: [2011]
  },
  // TODO: video
  {
    description: ['projects.myDraw.desc1', 'projects.myDraw.desc2', 'projects.myDraw.desc3'],
    title: 'myDraw',
    subtitle: 'projects.myDraw.subtitle',
    tags: [Tag.Archived, Tag.C, Tag.MyProjects, Tag.SDL, Tag.Windows],
    years: [2012]
  },
  {
    contributors: [{ name: STEPHANE, roles: [Role.Designer, Role.Tester] }],
    description: ['projects.bobolsSokoban3d.desc1', 'projects.bobolsSokoban3d.desc2', 'projects.bobolsSokoban3d.desc3'],
    title: `Bobol's Sokoban 3D`,
    subtitle: 'projects.bobolsSokoban3d.subtitle',
    tags: [Tag.Archived, Tag.C, Tag.NintendoDS, Tag.VideoGame, Tag.PAlib],
    years: [2012]
  },
  {
    description: ['projects.myLife.desc1', 'projects.myLife.desc2', 'projects.myLife.desc3'],
    title: 'myLife',
    subtitle: 'projects.myLife.subtitle',
    tags: [Tag.Archived, Tag.C, Tag.MyProjects, Tag.NintendoDS, Tag.PAlib],
    years: [2013]
  },
  {
    description: ['projects.myPixelArt.desc1', 'projects.myPixelArt.desc2', 'projects.myPixelArt.desc3'],
    title: 'myPixelArt',
    subtitle: 'projects.myPixelArt.subtitle',
    tags: [Tag.Archived, Tag.C, Tag.SDL, Tag.MyProjects, Tag.NintendoDS, Tag.PAlib],
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
    title: 'myTetris',
    subtitle: 'projects.myTetris.subtitle',
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
    description: ['projects.mySudokuTool.desc1', 'projects.mySudokuTool.desc2', 'projects.mySudokuTool.desc3'],
    title: 'mySudokuTool',
    subtitle: 'projects.mySudokuTool.subtitle',
    tags: [Tag.Archived, Tag.C, Tag.MyProjects, Tag.SDL, Tag.Windows],
    years: [2013]
  },
  {
    // TODO: video + guide + download link
    description: ['projects.myEnglishGame.desc1', 'projects.myEnglishGame.desc2', 'projects.myEnglishGame.desc3'],
    title: 'myEnglishGame',
    subtitle: 'projects.myEnglishGame.subtitle',
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
    description: ['projects.GTAV.desc1', 'projects.GTAV.desc2', 'projects.GTAV.desc3'],
    tags: [Tag.Archived, Tag.JavaScript, Tag.Website, Tag.HTML, Tag.CSS, Tag.PHP, Tag.SQL],
    title: 'GTAV Show Your Cars',
    subtitle: 'projects.GTAV.subtitle',
    years: [2014]
  }
];

export { projects };
