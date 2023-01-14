import * as React from 'react';
import { render } from '@testing-library/react';

import { HeaderText } from '../HeaderText';

test('HeaderText', () => {
  const createComponent = () => <HeaderText />;

  const { container } = render(createComponent());
  expect(container.childNodes).toMatchSnapshot();
});
