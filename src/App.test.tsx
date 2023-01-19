import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

jest.mock("./components/Swiper", () => jest.fn());

test('renders text', () => {
  const { container } = render(<App />);
  expect(container.childNodes).toMatchSnapshot();
});
