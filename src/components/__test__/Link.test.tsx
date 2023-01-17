import * as React from 'react';
import { render } from '@testing-library/react';

import { Link } from '../Link';

test('Link', () => {
  const github = 'some github link';
  const title = 'some title';
  const createComponent = () => <Link keyword='github' link={github} sectionKeyword='code' title={title} />;

  const { container } = render(createComponent());
  expect(container.childNodes).toMatchSnapshot();
});
