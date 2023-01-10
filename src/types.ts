// TODO: have a glossary on the website
// TODO: explain myProjects series
export enum Tag {
  ThreeDimensional = '3D',
  Archived = 'archived',
  C = 'C',
  CSS = 'CSS',
  HTML = 'HTML',
  JavaScript = 'JavaScript',
  MyProjects = 'myProjects',
  NintendoDS = 'Nintendo DS',
  OpenGL = 'OpenGL',
  SDL = 'SDL',
  VideoGame = 'video game',
  Website = 'website',
  PAlib = 'PAlib',
  PHP = 'PHP',
  SQL = 'SQL',
  Windows = 'Windows'
}

export enum Role {
  Algorithm = 'Algorithm',
  Developer = 'Developer',
  GraphicDesigner = 'Graphic Designer',
  Tester = 'Tester'
}

export type Contributor = {
  name: string;
  roles: Role[];
};

export type Project = {
  title: string;
  contributors?: Contributor[];
  subtitle?: string;
  description: string[];
  tags: Tag[];
  years: number[];
};
