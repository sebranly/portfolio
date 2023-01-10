import * as React from 'react';
import { render } from '@testing-library/react';
import { Project as ProjectType, Tag } from '../../types';
import { Project } from '../Project';

test('Project', () => {
  const project: ProjectType = {
    description: ['Some description', 'And another sentence'],
    title: 'Some project',
    subtitle: 'Some subtitle',
    tags: [Tag.Archived, Tag.JavaScript],
    years: [2013]
  };

  const createComponent = () => <Project project={project} />;

  const { container } = render(createComponent());
  expect(container.childNodes).toMatchSnapshot();
});
