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
      aoc: {
        desc1:
          'Having liked the 2017 edition of Advent of Code, I continue the adventure by retroactively solving puzzles from 2016.',
        desc2:
          'This time I pick JavaScript rather than C, as the latter is too verbose for a challenge based on time completion. I create lots of useful helper files as I solve problems one by one.',
        desc3:
          'These files and functions comes in handy when working on 2018 edition in December 2018 as the puzzles come up daily.',
        subtitle: 'Series of challenges for different years'
      },
      aoc2017: {
        desc1:
          'Some former classmates mention Advent of Code to me, a series of daily programming puzzles in December.',
        desc2:
          'We decide to compete against each other in a friendly way and I go with the language I learnt programming with, C.',
        desc3:
          'After some perseverance and many helper files created, I finish the 25th and last puzzle during this fun experience.',
        subtitle: 'Series of challenges for the end of the year'
      },
      bobolsSokoban3d: {
        desc1:
          'Out of curiosity, I willingly decide to reinvent the wheel by creating a 2D-isometric view from scratch for a game.',
        desc2: 'With a pen and paper, I come up with the rendering formulae which I implement as a Sokoban game.',
        desc3:
          'It becomes a fully fledged game consisting of a 20-level adventure mode with increasing difficulty, a level editor with validation rules and a file save for both modes.',
        subtitle: 'First 2D-isometric experiment'
      },
      connectFour: {
        desc1: 'As part of a school project, we create a Connect Four as a duo.',
        desc2: 'The imposed programming language is Python so we learn some of its graphical libraries.',
        desc3:
          'The final project includes a 2-player mode as well as a basic artificial intelligence in order to play against the computer.',
        subtitle: 'Play against your friend or the computer'
      },
      coolr: {
        desc1: 'As a birthday gift, I create a puzzle game based on mixing colors.',
        desc2:
          "The game features several puzzles based on different video games. It focuses a lot on the player's observation skills. That's all the clues you'll get.",
        desc3: 'I develop it in React and host it on GitHub Pages for anybody to play it.',
        subtitle: 'Puzzle game about mixing colors'
      },
      ctr2d: {
        desc1:
          'Being a fan of the PS1 video game, I decide to practice my programming skills by creating a simplified version of Crash Team Racing.',
        desc2:
          'Despite focusing on one track only, I carefully make sure to include all weapons from the original game as well as the whole character roster (including Penta Penguin through a cheat code).',
        desc3: 'The turn-based nature of the game allows me to create my first 4-player game.',
        subtitle: 'Turn-based multiplayer game'
      },
      // TODO: video
      ctrOcr: {
        desc1:
          "Several years later and still a fan of the Crash Team Racing video game which got a remake on PlayStation 4, I'm active on Discord communities of French players.",
        desc2:
          'Also interested by optical character recognition, I combine both interests and create a website in which users upload screenshots of in-game end results, and in return they obtain a leaderboard of all racing positions.',
        desc3: 'Out of curiosity I also buy a domain name to host my website.',
        subtitle: 'Optical character recognition'
      },
      general: {
        colon: ':',
        contributor: 'Contributor',
        code: 'Source code',
        link: 'link',
        website: 'Website',
        roles: {
          [Role.Algorithm]: Role.Algorithm,
          [Role.Developer]: Role.Developer,
          [Role.Designer]: Role.Designer,
          [Role.Tester]: Role.Tester
        },
        tags: {
          [Tag.Archived]: Tag.Archived,
          [Tag.SchoolProject]: Tag.SchoolProject,
          [Tag.VideoGame]: Tag.VideoGame,
          [Tag.Website]: Tag.Website
        }
      },
      eightQueensPuzzle: {
        desc1:
          'For school, we work on a famous chess puzzle. The goal is to place eight queens on a chessboard so that no two queens threaten each other.',
        desc2: 'We start generating all the permutations for a set of letters thanks to a stack.',
        desc3:
          "After learning that the eight queens puzzle is actually close to letters' permutations, we solve the main puzzle.",
        subtitle: 'A famous chess puzzle'
      },
      GTAV: {
        desc1:
          'My brother welcomes my help on a project he started. Together we develop our first website from scratch.',
        desc2:
          'Users can browse the full list of vehicles (cars, planes, boats, etc.) from the video game Grand Theft Auto V. They can create an account, post a picture of the vehicle they customized within GTA onto our website and receive ratings from other users for said pictures.',
        desc3:
          'Our user base grows to welcome a few hundreds users who submit hundreds of pictures and thousands of ratings, pushing us to tweak our admin section in order to support such a volume.',
        subtitle: 'Our first real website'
      },
      kaleidoscope: {
        desc1:
          'I really liked the interactive movie Bandersnatch on Netflix. When I heard of Kaleidoscope on Netflix, a story told in a non-linear way, I wanted to create a quick website about it.',
        desc2: 'The website allows users to modify the viewing order of the total of eight episodes of the TV show.',
        desc3:
          'Inspired by Wordle, I also include a sharing feature so that users can discuss about their viewing order with other users on social media.',
        subtitle: 'Share your non-linear viewing order'
      },
      magicSquares: {
        desc1:
          'After playing the first episode of Professor Layton, a puzzle adventure video game, I learn the existence of magic squares.',
        desc2: 'Those are squares of numbers in which the sum of each row, column and diagonal is the same.',
        desc3: 'Liking the concept, I decide to follow an algorithm to recreate magic squares.',
        subtitle: 'Squares with interesting properties'
      },
      maze: {
        desc1: `I always liked mazes as a kid, especially thanks to the one featured in Lara's Home in Tomb Raider 2 video game.`,
        desc2:
          'I follow an algorithm in order to generate perfect mazes (as imperfect mazes can easily be generated by starting from a perfect one then breaking some of its walls).',
        desc3:
          'The C implementation I come up with also includes the path solution to go from the top left hand corner of the maze to its bottom right hand corner.',
        desc4: 'On the Nintendo DS in a parallel project, I create a quick 3D render of the maze.',
        subtitle: 'Generate and navigate through perfect mazes'
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
        desc1: 'With a classmate, we decide to work together on a Sudoku Solver as a personal project.',
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
      projectEuler: {
        desc1:
          'In parallel of the other challenge called Advent of Code, I take part in some challenges from Project Euler.',
        desc2: 'I complete the first 20+ challenges by using Python this time.',
        subtitle: 'Some computational problems'
      },
      resume: {
        desc1:
          'Trying to come up with a funny résumé idea for a job search abroad, I spend a day creating a quick and dirty online résumé.',
        desc2:
          'I take inspiration from ebay in order to create a parody of it in which the product is myself. It also marks my first experience with GitHub Pages.',
        desc3: 'This project is now really outdated but I decided to keep it for fun.',
        subtitle: 'An ebay parody featuring myself'
      },
      simpleBot: {
        desc1: 'For a school project, we work on creating a chatbot as a duo.',
        desc2: 'We use a very specific template language called AIML.',
        desc3: `After reading some of its documentation, we implement some of its features (based on pattern recognition) so that the bot can recognize colors, remember the user's name, guess countries' capitals, etc.`,
        subtitle: 'Tiny example of a chatbot'
      },
      templateTs: {
        desc1: 'Having some website ideas in mind, I figure I should create a template first to speed things up.',
        desc2:
          'One afternoon, I create a repository template which allows me to start websites hosted for free on GitHub Pages with up-to-date technologies, in a fast way.',
        desc3:
          'Thanks to this template, lots of websites are started including Kaleidoscope, DMZ and this Portfolio you are browsing.',
        subtitle: 'React + TypeScript Template for websites'
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
