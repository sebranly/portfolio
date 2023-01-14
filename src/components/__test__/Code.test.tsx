import * as React from 'react';
import { render } from '@testing-library/react';

import { Code } from '../Code';

test('Code', () => {
  const lines = [
    '+---+---+---+---+',
    '| . | Q | . | . |',
    '+---+---+---+---+',
    '| . | . | . | Q |',
    '+---+---+---+---+',
    '| Q | . | . | . |',
    '+---+---+---+---+',
    '| . | . | Q | . |',
    '+---+---+---+---+'
  ];
  
  const createComponent = () => <Code lines={lines} />;

  const { container } = render(createComponent());
  expect(container.childNodes).toMatchSnapshot();
});
