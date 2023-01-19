import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

jest.mock('./components/Swiper', () => 'MockedSwiper');

test('renders text', () => {
  const { container } = render(<App />);
  expect(container.childNodes).toMatchSnapshot();
});
