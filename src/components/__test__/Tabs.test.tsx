import * as React from 'react';
import { render } from '@testing-library/react';

import { Tabs } from '../Tabs';
import { Tag } from '../../types';

test('Tabs', () => {
  const createComponent = () => <Tabs applicationType={Tag.CLI} onClickTab={jest.fn()} />;

  const { container } = render(createComponent());
  expect(container.childNodes).toMatchSnapshot();
});
