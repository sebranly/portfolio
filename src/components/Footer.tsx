import * as React from 'react';
import { AUTHOR_NAME, CHANGELOG_URL, PROJECT_URL, WEBSITE_VERSION } from '../constants/general';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="my-4 text-lg text-center">
      <div>
        {t('footer.author.prefix')}
        <a
          className="underline"
          href={PROJECT_URL}
          rel="noopener noreferrer"
          title="GitHub page for repository"
          target="_blank"
        >
          {AUTHOR_NAME}
        </a>
        {t('footer.author.suffix')}
      </div>
      <div>
        {t('footer.website')}
        <a
          className="underline"
          href={CHANGELOG_URL}
          rel="noopener noreferrer"
          title="Website changelog"
          target="_blank"
        >
          {WEBSITE_VERSION}
        </a>
      </div>
    </div>
  );
};

export { Footer };
