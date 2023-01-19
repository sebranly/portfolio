// TODO: have a glossary on the website
export enum Tag {
  AIML = 'AIML',
  All = 'All',
  Archived = 'archived',
  C = 'C',
  CLI = 'CLI',
  CSS = 'CSS',
  DNS = 'DNS',
  GitHub = 'GitHub',
  GUI = 'GUI',
  HTML = 'HTML',
  i18n = 'i18n',
  JavaScript = 'JavaScript',
  Live = 'live',
  NintendoDS = 'Nintendo DS',
  OpenGL = 'OpenGL',
  PAlib = 'PAlib',
  PHP = 'PHP',
  Puzzle = 'puzzle',
  Python = 'Python',
  React = 'React',
  SchoolProject = 'school project',
  SDL = 'SDL',
  SQL = 'SQL',
  TailwindCSS = 'TailwindCSS',
  ThreeDimensional = '3D',
  TypeScript = 'TypeScript',
  VideoGame = 'video game',
  Website = 'website',
  Windows = 'Windows'
}

export enum Color {
  Amber = 'amber',
  Black = 'black',
  Blue = 'blue',
  Gray = 'gray',
  Green = 'green',
  Indigo = 'indigo',
  Orange = 'orange',
  Pink = 'pink',
  Purple = 'purple',
  Red = 'red',
  Rose = 'rose',
  White = 'white',
  Yellow = 'yellow'
}

export enum Role {
  Algorithm = 'Algorithm',
  Designer = 'Designer',
  Developer = 'Developer',
  ProductOwner = 'Product Owner',
  Tester = 'Tester'
}

export enum ImageFolder {
  BobolsSokoban3D = 'BobolsSokoban3D',
  ConnectFour = 'ConnectFour',
  CrashTeamRacing2D = 'CrashTeamRacing2D',
  GTAVShowYourCars = 'GTAVShowYourCars',
  TETRISpace = 'TETRISpace',
  myDraw = 'myDraw',
  myEnglishGame = 'myEnglishGame',
  myLife = 'myLife',
  myMaze = 'myMaze',
  mySudokuTool = 'mySudokuTool'
}

export enum ImageExtension {
  JPG = 'jpg',
  PNG = 'png'
}

export type Contributor = {
  female?: boolean;
  name: string;
  roles: Role[];
};

export type Project = {
  contributors?: Contributor[];
  description: string[];
  download?: string;
  github?: string;
  images?: ProjectImages;
  subtitle: string;
  tags: Tag[];
  textualSnapshot?: string[];
  title: string;
  website?: string;
  video?: string;
  years: number[];
};

export type Language = {
  name: string;
  shortName: string;
};

export type ProjectImages = {
  folder: ImageFolder;
  images: Image[];
};

export type Image = {
  alt: string;
  nb: number;
  extension: ImageExtension;
};
