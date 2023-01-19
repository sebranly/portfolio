import * as React from 'react';
import { render } from '@testing-library/react';

import { Image } from '../Image';
import { ImageExtension, ImageFolder } from '../../types';

test('Image', () => {
  const folder = ImageFolder.ConnectFour;
  const image = { alt: 'some alt', nb: 1, extension: ImageExtension.PNG };
  const createComponent = () => <Image folder={folder} image={image} />;

  const { container } = render(createComponent());
  expect(container.childNodes).toMatchSnapshot();
});
