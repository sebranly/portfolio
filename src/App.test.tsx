import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders text', () => {
  const { container } = render(<App />);
  expect(container.childNodes).toMatchSnapshot();
});
