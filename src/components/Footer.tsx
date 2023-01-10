import * as React from 'react';
import { AUTHOR_NAME, CHANGELOG_URL, PROJECT_URL, WEBSITE_VERSION } from '../constants/general';

const Footer = () => (
  <div className="my-4 text-lg text-center">
    <div>
      Developed by{' '}
      <a
        className="underline"
        href={PROJECT_URL}
        rel="noopener noreferrer"
        title="GitHub page for repository"
        target="_blank"
      >
        {AUTHOR_NAME}
      </a>{' '}
      with 🖤
    </div>
    <div>
      Website version{' '}
      <a className="underline" href={CHANGELOG_URL} rel="noopener noreferrer" title="Website changelog" target="_blank">
        {WEBSITE_VERSION}
      </a>
    </div>
  </div>
);

export { Footer };
