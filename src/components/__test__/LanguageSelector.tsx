import * as React from 'react';
import { render } from '@testing-library/react';

import { LanguageSelector } from '../LanguageSelector';

test('LanguageSelector', () => {
  const createComponent = () => <LanguageSelector />;

  const { container } = render(createComponent());
  expect(container.childNodes).toMatchSnapshot();
});
