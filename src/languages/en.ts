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
          'Having liked the 2017 edition of Advent of Code, I continued the adventure by retroactively solving puzzles from 2016.',
        desc2:
          'This time I picked JavaScript rather than C, as the latter is too verbose for a challenge based on time completion. I created lots of useful helper files as I solved problems one by one.',
        desc3:
          'These files and functions came in handy when working on 2018 edition in December 2018 as the puzzles came up daily.',
        subtitle: 'Series of challenges for different years',
        title: 'Advent of Code 2016 and 2018'
      },
      aoc2017: {
        desc1:
          'Some former classmates mentioned Advent of Code to me, a series of daily programming puzzles in December.',
        desc2:
          'We decided to compete against each other in a friendly way and I went with the language I learnt programming with, C.',
        desc3:
          'After some perseverance and many helper files created, I finished the 25th and last puzzle during this fun experience.',
        subtitle: 'Series of challenges for the end of the year',
        title: 'Advent of Code 2017'
      },
      bobolsSokoban3d: {
        desc1:
          'Out of curiosity, I willingly decided to reinvent the wheel by creating a 2D-isometric view from scratch for a game.',
        desc2: 'With a pen and paper, I came up with the rendering formulae which I implemented as a Sokoban game.',
        desc3:
          'It became a fully fledged game consisting of a 20-level adventure mode with increasing difficulty, a level editor with validation rules and a file save for both modes.',
        subtitle: 'First 2D-isometric experiment',
        title: `Bobol's Sokoban 3D`
      },
      connectFour: {
        desc1: 'As part of a school project, we created a Connect Four as a duo.',
        desc2: 'The imposed programming language was Python so we learnt some of its graphical libraries.',
        desc3:
          'The final project includes a 2-player mode as well as a basic artificial intelligence in order to play against the computer.',
        subtitle: 'Play against your friend or the computer',
        title: 'Connect Four'
      },
      coolr: {
        desc1: 'As a birthday gift, I created a puzzle game based on mixing colors.',
        desc2:
          "The game features several puzzles based on different video games. It focuses a lot on the player's observation skills. That's all the clues you'll get.",
        desc3: 'I developed it in React and hosted it on GitHub Pages for anybody to play it.',
        subtitle: 'Puzzle game about mixing colors',
        title: 'Coolr'
      },
      ctr2d: {
        desc1:
          'Being a fan of the PS1 video game, I decided to practice my programming skills by creating a simplified version of Crash Team Racing.',
        desc2:
          'Despite focusing on one track only, I carefully made sure to include all weapons from the original game as well as the whole character roster (including Penta Penguin through a cheat code).',
        desc3: 'The turn-based nature of the game allowed me to create my first 4-player game.',
        subtitle: 'Turn-based multiplayer game',
        title: 'Crash Team Racing 2D'
      },
      // TODO: video
      ctrOcr: {
        desc1:
          "Several years later and still a fan of the Crash Team Racing video game which got a remake on PlayStation 4, I've been active on Discord communities of French players.",
        desc2:
          'Also interested by optical character recognition, I combined both interests and created a website in which users can upload screenshots of in-game end results, and in return they obtain a leaderboard of all racing positions.',
        desc3: 'Out of curiosity I also bought a domain name to host my website.',
        subtitle: 'Optical character recognition',
        title: 'Crash Team Results'
      },
      dmz: {
        desc1:
          'With the recent release of the Warzone 2.0 video game, I took part in its DMZ mode and noticed that a gameplay element was a bit confusing for fans.',
        desc2:
          'I created a website around it, it focuses on setting up timers and displaying a live conversion of the virtual money equivalent.',
        desc3: 'The reddit community welcomed this project in a very positive way.',
        subtitle: 'Currency to Cooldown Converter',
        title: 'DMZ Converter'
      },
      englishPronunciation: {
        desc1:
          "For her Master's Degree's thesis, Faith asked my help to gather her resources into a website that I developed for her.",
        desc2:
          'I implemented the pronunciation tables with the audio files she provided, as well as the quizzes she invented.',
        desc3:
          'The website is hosted on GitHub Pages so that anyone can learn more about English pronunciation. With no more strict deadline, a mobile-optimized version was developed in 2022.',
        subtitle: 'Website for a Thesis',
        title: 'English Pronunciation'
      },
      general: {
        colon: ':',
        contributor: {
          female: 'Contributor',
          male: 'Contributor'
        },
        code: 'Source code',
        altText: {
          github: 'GitHub repository for',
          website: 'Website for'
        },
        link: 'link',
        website: 'Website',
        roles: {
          [Role.Algorithm]: Role.Algorithm,
          [Role.Developer]: Role.Developer,
          [Role.Designer]: Role.Designer,
          [Role.ProductOwner]: Role.ProductOwner,
          [Role.Tester]: Role.Tester
        },
        tags: {
          [Tag.Archived]: Tag.Archived,
          [Tag.Live]: Tag.Live,
          [Tag.SchoolProject]: Tag.SchoolProject,
          [Tag.VideoGame]: Tag.VideoGame,
          [Tag.Website]: Tag.Website
        }
      },
      eightQueensPuzzle: {
        desc1:
          'For school, we worked on a famous chess puzzle. The goal is to place eight queens on a chessboard so that no two queens threaten each other.',
        desc2: 'We started generating all the permutations for a set of letters thanks to a stack.',
        desc3:
          "After learning that the eight queens puzzle is actually close to letters' permutations, we solved the main puzzle.",
        subtitle: 'A famous chess puzzle',
        title: 'Eight Queens Puzzle'
      },
      GTAV: {
        desc1:
          'My brother welcomed my help on a project he started. Together we developed our first website from scratch.',
        desc2:
          'Users could browse the full list of vehicles (cars, planes, boats, etc.) from the video game Grand Theft Auto V. They could create an account, post a picture of the vehicle they customized within GTA onto our website and receive ratings from other users for said pictures.',
        desc3:
          'Our user base grew to welcome a few hundreds users who submitted hundreds of pictures and thousands of ratings, pushing us to tweak our admin section in order to support such a volume.',
        subtitle: 'Our first real website',
        title: 'GTAV Show Your Cars'
      },
      kaleidoscope: {
        desc1:
          'I really liked the interactive movie Bandersnatch on Netflix. When I heard of Kaleidoscope on Netflix, a story told in a non-linear way, I wanted to create a quick website about it.',
        desc2: 'The website allows users to modify the viewing order of the total of eight episodes of the TV show.',
        desc3:
          'Inspired by Wordle, I also included a sharing feature so that users can talk about their viewing order with other users on social media.',
        subtitle: 'Share your non-linear viewing order',
        title: 'Kaleidoscope'
      },
      magicSquares: {
        desc1:
          'After playing the first episode of Professor Layton, a puzzle adventure video game, I learnt the existence of magic squares.',
        desc2: 'Those are squares of numbers in which the sum of each row, column and diagonal is the same.',
        desc3: 'Liking the concept, I followed an algorithm to recreate magic squares.',
        subtitle: 'Squares with interesting properties',
        title: 'Magic Squares'
      },
      maze: {
        desc1: `I always liked mazes as a kid, especially thanks to the one featured in Lara's Home in Tomb Raider 2 video game.`,
        desc2:
          'I followed an algorithm in order to generate perfect mazes (as imperfect mazes can easily be generated by starting from a perfect one then breaking some of its walls).',
        desc3:
          'The C implementation I came up with also includes the path solution to go from the top left hand corner of the maze to its bottom right hand corner.',
        desc4: 'On the Nintendo DS in a parallel project, I created a quick 3D render of the maze.',
        subtitle: 'Generate and navigate through perfect mazes',
        title: 'Maze Generator'
      },
      myDraw: {
        desc1: 'Intrigued by image processing, I decided to create my own version of Paint.',
        desc2:
          'The final version offers lots of tools: pen, eraser, color picker, brush, rectangle, mirror and inverted modes, etc.',
        desc3:
          'The most complicated tool I implemented happened to be the bucket tool which made me practice recursion.',
        subtitle: 'Mini version of Paint',
        title: 'myDraw'
      },
      myEnglishGame: {
        desc1: 'Willing to push students to learn English, I implemented an idea from scratch.',
        desc2:
          'A video game based on, but very different from, Tetris was born. It invites French speakers to learn English vocabulary by interacting with letters. Letters are added, replaced or removed in order to move on to the next word in this never-ending gameplay.',
        desc3: 'Over 1300 words are available and the game features surprising elements such as anagrams.',
        subtitle: 'Learn English vocabulary while playing',
        title: 'myEnglishGame'
      },
      myLife: {
        desc1: `Browsing the OpenClassrooms community, I joined a workshop/competition in which members were discussing and implementing various versions of Conway's Game of Life.`,
        desc2:
          'I decided to program it on the Nintendo DS for originality. It led to some readability challenges I overcame by creating two visual themes and allowing users to use different levels of zoom while drawing the initial generation.',
        desc3: `Possibilities became much larger than Conway's version as I allowed the users to edit the cells' birth and death rules.`,
        subtitle: `Conway's Game of Life`,
        title: 'myLife'
      },
      myPixelArt: {
        desc1:
          'Inspired by some gameplay elements from Animal Crossing and Mario Kart which allow you to draw flags/clothing design for your characters, I created a pixel art editor for the same console, the Nintendo DS.',
        desc2: 'Classic 16x16 or 32x32 pixel art can be recreated and saved on the console.',
        desc3:
          'Another tool I developed in parallel allows you to export this save file (aka your creations) into a bigger picture (e.g. 1024x1024 pixels) so that you can use it on your computer.',
        subtitle: 'Pixel art from your DS to your PC',
        title: 'myPixelArt'
      },
      mySudokuTool: {
        desc1: 'With a classmate, we worked together on a Sudoku Solver as a personal project.',
        desc2: `While Julien focused on the algorithm itself, I was in charge of the graphical part of the project. The user can use their mouse and/or keyboard for filling out the initial Sudoku grid. Basic Sudoku rules are applied so that digits remain unique in each row, column and block.`,
        desc3:
          'The user can then press a button and reveal the Sudoku solution if it exists, thanks to a recursive implementation.',
        subtitle: 'Sudoku Solver',
        title: 'mySudokuTool'
      },
      myTetris: {
        desc1:
          'This project re-used two previous ones: TETRISpace for the core gameplay, and myPixelArt for drawing its sprites.',
        desc2:
          'I pushed the gameplay further by having challenges (e.g. remove 4 lines at once, score 10000 points) which unlock several visual themes (Classic, Gameboy, Bubble Bobble, Super Mario Bros, PlayStation, Dice).',
        desc3:
          'The player also unlocks avatars (also made within myPixelArt) so that they can edit their player card along with their caption and background color.',
        desc4:
          'Now familiar with the Nintendo DS, I decided to learn new things such as playing audio files and experimenting with 3D.',
        subtitle: 'TETRISpace++',
        title: 'myTetris'
      },
      portfolio: {
        desc1:
          'Before moving on to another exciting project I had in mind, I took a step back and worked towards a portfolio.',
        desc2:
          'This is the website you are currently browsing. After learning about recursion and loving Inception movie that much, I knew it only made sense to include this project as part of my Portfolio.',
        desc3: 'I used TailwindCSS to have cleaner CSS and made sure that French speakers could select their language.',
        subtitle: 'Overview of my personal projects',
        title: 'Portfolio'
      },
      projectEuler: {
        desc1:
          'In parallel of the other challenge called Advent of Code, I took part in some challenges from Project Euler.',
        desc2: 'I completed the first 20+ challenges by using Python this time.',
        subtitle: 'Some computational problems',
        title: 'Project Euler'
      },
      resume: {
        desc1:
          'Trying to come up with a funny résumé idea for a job search abroad, I spent a day creating a quick and dirty online résumé.',
        desc2:
          'I took inspiration from ebay in order to create a parody of it in which the product was myself. It also marked my first experience with GitHub Pages.',
        desc3: 'This project is now really outdated but I decided to keep it available for fun.',
        subtitle: 'An ebay parody featuring myself',
        title: 'Online Résumé'
      },
      simpleBot: {
        desc1: 'For a school project, we worked on creating a chatbot as a duo.',
        desc2: 'We used a very specific template language called AIML.',
        desc3: `After reading some of its documentation, we implemented some of its features (based on pattern recognition) so that the bot could recognize colors, remember the user's name, guess countries' capitals, etc.`,
        subtitle: 'Tiny example of a chatbot',
        title: 'Simple Bot'
      },
      templateTs: {
        desc1: 'Having some website ideas in mind, I figured I should create a template first to speed things up.',
        desc2:
          'One afternoon, I created a repository template which allows me to start websites hosted for free on GitHub Pages with up-to-date technologies, in a fast way.',
        desc3:
          'Thanks to this template, lots of websites were started including Kaleidoscope, DMZ and this Portfolio you are browsing.',
        subtitle: 'React + TypeScript Template for websites',
        title: 'Template TS'
      },
      tetrisSpace: {
        desc1:
          'Following pieces of advice from the OpenClassrooms community, I created a version of the famous Tetris videogame over a weekend.',
        desc2:
          'I decided to challenge myself by programming it for the Nintendo DS known for its limitations on sprites.',
        desc3:
          'It became TETRISpace, a 4-bit Tetris playable on a 11x11 squared map. The first version included a scoring system and a save for the hi-score.',
        subtitle: 'Nintendo DS playable version of Tetris',
        title: 'TETRISpace'
      }
    }
  }
};

export { en };
