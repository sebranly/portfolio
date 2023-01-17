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
  Black = 'black',
  White = 'white',
  Gray = 'gray',
  Red = 'red',
  Orange = 'orange',
  Amber = 'amber',
  Yellow = 'yellow',
  Green = 'green',
  Blue = 'blue',
  Indigo = 'indigo',
  Purple = 'purple',
  Pink = 'pink',
  Rose = 'rose'
}

export enum Role {
  Algorithm = 'Algorithm',
  Developer = 'Developer',
  Designer = 'Designer',
  ProductOwner = 'Product Owner',
  Tester = 'Tester'
}

export type Contributor = {
  female?: boolean;
  name: string;
  roles: Role[];
};

export type Project = {
  download?: string;
  title: string;
  contributors?: Contributor[];
  github?: string;
  subtitle: string;
  description: string[];
  tags: Tag[];
  video?: string;
  website?: string;
  years: number[];
  textualSnapshot?: string[];
};

export type Language = {
  shortName: string;
  name: string;
};
