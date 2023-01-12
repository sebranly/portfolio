import { Role, Tag } from '../types';

const en = {
  translation: {
    footer: {
      author: {
        prefix: 'Developed by ',
        suffix: ' with 🖤'
      },
      website: 'Website version '
    },
    header: {
      author: {
        prefix: `I'm `,
        suffix: ', a Software Engineer.'
      },
      introduction: 'Here are some of my personal projects.',
      welcome: 'Welcome to my Portfolio!'
    },
    projects: {
      bobolsSokoban3d: {
        desc1:
          'Out of curiosity, I willingly decide to reinvent the wheel by creating a 2D-isometric view from scratch for a game.',
        desc2: 'With a pen and paper, I come up with the rendering formulae which I implement as a Sokoban game.',
        desc3:
          'It becomes a fully fledged game consisting of a 20-level adventure mode with increasing difficulty, a level editor with validation rules and a file save for both modes.',
        subtitle: 'First 2D-isometric experiment'
      },
      ctr2d: {
        desc1:
          'Being a fan of the PS1 video game, I decide to practice my programming skills by creating a simplified version of Crash Team Racing.',
        desc2:
          'Despite focusing on one track only, I carefully make sure to include all weapons from the original game as well as the whole character roster (including Penta Penguin through a cheat code).',
        desc3: 'The turn-based nature of the game allows me to create my first 4-player game.',
        subtitle: 'Turn-based multiplayer game'
      },
      general: {
        contributor: 'Contributor',
        roles: {
          [Role.Algorithm]: Role.Algorithm,
          [Role.Developer]: Role.Developer,
          [Role.Designer]: Role.Designer,
          [Role.Tester]: Role.Tester
        },
        tags: {
          [Tag.Archived]: Tag.Archived,
          [Tag.VideoGame]: Tag.VideoGame,
          [Tag.Website]: Tag.Website
        }
      },
      GTAV: {
        desc1:
          'My brother welcomes my help on a project he started. Together we develop our first website from scratch.',
        desc2:
          'Users can browse the full list of vehicles (cars, planes, boats, etc.) from the video game Gran Theft Auto V. They can create an account, post a picture of the vehicle they customized within GTA onto our website and receive ratings from other users for said pictures.',
        desc3:
          'Our user base grows to welcome a few hundreds users who submit hundreds of pictures and thousands of ratings, pushing us to tweak our admin section in order to support such a volume.',
        subtitle: 'Our first real website'
      },
      myDraw: {
        desc1: 'Intrigued by image processing, I decide to create my own version of Paint.',
        desc2:
          'The final version offers lots of tools: pen, eraser, color picker, brush, rectangle, mirror and inverted modes, etc.',
        desc3: 'The most complicated tool I implement happens to be the bucket tool which makes me practice recursion.',
        subtitle: 'Mini version of Paint'
      },
      myEnglishGame: {
        desc1: 'Willing to push students to learn English, I implement an idea from scratch.',
        desc2:
          'A video game based on, but very different from, Tetris is born. It invites French speakers to learn English vocabulary by interacting with letters. Letters are added, replaced or removed in order to move on to the next word in this never-ending gameplay.',
        desc3: 'Over 1300 words are available and the game features surprising elements such as anagrams.',
        subtitle: 'Learn English vocabulary while playing'
      },
      myLife: {
        desc1: `Browsing the OpenClassrooms community, I discover and join a workshop/competition in which members discuss and implement various versions of Conway's Game of Life.`,
        desc2:
          'I decide to program it on the Nintendo DS for originality. It leads to some readability challenges I overcome by creating two visual themes and allowing users to use different levels of zoom while drawing the initial generation.',
        desc3: `Possibilities become much larger than Conway's version as I allow the users to edit the cells' birth and death rules.`,
        subtitle: `Conway's Game of Life`
      },
      myPixelArt: {
        desc1:
          'Inspired by some gameplay elements from Animal Crossing and Mario Kart which allow you to draw flags/clothing design for your characters, I create a pixel art editor for the same console, the Nintendo DS.',
        desc2: 'Classic 16x16 or 32x32 pixel art can be recreated and saved on the console.',
        desc3:
          'Another tool I develop in parallel allows you to export this save file (aka your creations) into a bigger picture (e.g. 1024x1024 pixels) so that you can use it on your computer.',
        subtitle: 'Pixel art from your DS to your PC'
      },
      mySudokuTool: {
        desc1: 'With a classmate, we decide to work together on a Sudoku Solver.',
        desc2: `While Julien focuses on the algorithm itself, I'm in charge of the graphical part of the project. The user can use their mouse and/or keyboard for filling out the initial Sudoku grid. Basic Sudoku rules are applied so that digits remain unique in each row, column and block.`,
        desc3:
          'The user can then press a button and reveal the Sudoku solution if it exists, thanks to a recursive implementation.',
        subtitle: 'Sudoku Solver'
      },
      myTetris: {
        desc1:
          'This project re-uses two previous ones: TETRISpace for the core gameplay, and myPixelArt for drawing its sprites.',
        desc2:
          'I push the gameplay further by having challenges (e.g. remove 4 lines at once, score 10000 points) which unlock several visual themes (Classic, Gameboy, Bubble Bobble, Super Mario Bros, PlayStation, Dice).',
        desc3:
          'The player also unlocks avatars (also made within myPixelArt) so that they can edit their player card along with their caption and background color.',
        desc4:
          'Now familiar with the Nintendo DS, I decide to learn new things such as playing audio files and experimenting with 3D.',
        subtitle: 'TETRISpace++'
      },
      tetrisSpace: {
        desc1:
          'Following pieces of advice from the OpenClassrooms community, I create a version of the famous Tetris videogame over a weekend.',
        desc2:
          'I decide to challenge myself by programming it for the Nintendo DS known for its limitations on sprites.',
        desc3:
          'It becomes TETRISpace, a 4-bit Tetris playable on a 11x11 squared map. The first version includes a scoring system and a save for the hi-score.',
        subtitle: 'Nintendo DS playable version of Tetris'
      }
    }
  }
};

export { en };
