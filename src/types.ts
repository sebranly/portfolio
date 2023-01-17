// TODO: have a glossary on the website
// TODO: explain myProjects series
export enum Tag {
  All = 'All',
  ThreeDimensional = '3D',
  AIML = 'AIML',
  Archived = 'archived',
  C = 'C',
  CSS = 'CSS',
  CLI = 'CLI',
  DNS = 'DNS',
  GitHub = 'GitHub',
  GUI = 'GUI',
  HTML = 'HTML',
  i18n = 'i18n',
  JavaScript = 'JavaScript',
  Live = 'live',
  MyProjects = 'myProjects',
  NintendoDS = 'Nintendo DS',
  OpenGL = 'OpenGL',
  Puzzle = 'puzzle',
  Python = 'Python',
  React = 'React',
  SchoolProject = 'school project',
  SDL = 'SDL',
  VideoGame = 'video game',
  Website = 'website',
  PAlib = 'PAlib',
  PHP = 'PHP',
  SQL = 'SQL',
  TailwindCSS = 'TailwindCSS',
  TypeScript = 'TypeScript',
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
