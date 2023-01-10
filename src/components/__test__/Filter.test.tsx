import * as React from 'react';
import { render } from '@testing-library/react';

import { Filter } from '../Filter';

test('Filter', () => {
  const createComponent = () => <Filter />;

  const { container } = render(createComponent());
  expect(container.childNodes).toMatchSnapshot();
});
