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
