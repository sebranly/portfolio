import { Role, Tag } from "../types";

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
      welcome: 'Welcome to my Portfolio!',
    },
    projects: {
      ctr2d: {
        desc1: 'Being a fan of the PS1 video game, I decide to practice my programming skills by creating a simplified version of Crash Team Racing.',
        desc2: 'Despite focusing on one track only, I carefully make sure to include all weapons from the original game as well as the whole character roster (including Penta Penguin through a cheat code).',
        desc3: 'The turn-based nature of the game allows me to create my first 4-player game.',
        subtitle: 'Turn-based multiplayer game'
      },
      general: {
        contributor: 'Contributor',
        roles: {
          [Role.Algorithm]: Role.Algorithm,
        [Role.Developer]: Role.Developer,
        [Role.Designer]: Role.Designer,
        [Role.Tester]: Role.Tester,
        },
        tags: {
          [Tag.Archived]: Tag.Archived,
          [Tag.VideoGame]: Tag.VideoGame,
          [Tag.Website]: Tag.Website
        }
      },
      myDraw: {
        desc1: 'Intrigued by image processing, I decide to create my own version of Paint.',
        desc2: 'The final version offers lots of tools: pen, eraser, color picker, brush, rectangle, mirror and inverted modes, etc.',
        desc3: 'The most complicated tool I implement happens to be the bucket tool which makes me practice recursion.',
        subtitle: 'Mini version of Paint'
      },
      tetrisSpace: {
        desc1: 'Following pieces of advice from the OpenClassrooms community, I create a version of the famous Tetris videogame over a weekend.',
        desc2: 'I decide to challenge myself by programming it for the Nintendo DS known for its limitations on sprites.',
        desc3: 'It becomes TETRISpace, a 4-bit Tetris playable on a 11x11 squared map. The first version includes a scoring system and a save for the hi-score.',
        subtitle: 'Nintendo DS playable version of Tetris'
      }
    }
  }};

  export { en };