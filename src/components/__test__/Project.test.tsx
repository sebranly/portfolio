import * as React from 'react';
import { render } from '@testing-library/react';
import { ImageExtension, ImageFolder, Project as ProjectType, Role, Tag } from '../../types';
import { Project } from '../Project';

test('Project', () => {
  const project: ProjectType = {
    contributors: [
      {
        name: 'projects.people.anonymousPerson',
        roles: [Role.Developer]
      }
    ],
    description: ['Some description', 'And another sentence'],
    download: 'some download link',
    images: {
      folder: ImageFolder.ConnectFour,
      images: [{ alt: 'some alt', nb: 1, extension: ImageExtension.PNG }]
    },
    github: 'some github link',
    video: 'some video link',
    website: 'some website link',
    textualSnapshot: [
      '+---+---+---+---+',
      '| #   # |       |',
      '+---+   +   +---+',
      '|     # |   |   |',
      '+   +   +   +   +',
      '|   | #   #   # |',
      '+---+---+---+---+'
    ],
    title: 'Some project',
    subtitle: 'Some subtitle',
    tags: [Tag.Archived, Tag.JavaScript],
    years: [2013]
  };

  const createComponent = () => <Project project={project} />;

  const { container } = render(createComponent());
  expect(container.childNodes).toMatchSnapshot();
});
