import * as React from 'react';
import { render } from '@testing-library/react';
import { Tag as TagType } from '../../types';
import { Tag } from '../Tag';

test('Tag', () => {
  const tag = TagType.JavaScript;
  const createComponent = () => <Tag tag={tag} />;

  const { container } = render(createComponent());
  expect(container.childNodes).toMatchSnapshot();
});
