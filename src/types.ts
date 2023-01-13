// TODO: have a glossary on the website
// TODO: explain myProjects series
export enum Tag {
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
  Tester = 'Tester'
}

export type Contributor = {
  name: string;
  roles: Role[];
};

export type Project = {
  title: string;
  contributors?: Contributor[];
  github?: string;
  subtitle: string;
  description: string[];
  tags: Tag[];
  website?: string;
  years: number[];
};

export type Language = {
  shortName: string;
  name: string;
};
