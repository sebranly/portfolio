import * as React from 'react';
import { render } from '@testing-library/react';

import { Pagination } from '../Pagination';

test('Pagination', () => {
  const createComponent = () => <Pagination allPages={[1, 2]} onClickPage={jest.fn()} pageNumber={2} />;

  const { container } = render(createComponent());
  expect(container.childNodes).toMatchSnapshot();
});
