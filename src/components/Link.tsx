import * as React from 'react';
import { useTranslation } from 'react-i18next';

export interface LinkProps {
  keyword: string;
  link: string;
  sectionKeyword: string;
  title: string;
}

const Link: React.FC<LinkProps> = (props) => {
  const { t } = useTranslation();
  const { keyword, link, sectionKeyword, title } = props;
  const tPrefix = 'projects.general';
  const altText = `${t(`${tPrefix}.altText.${sectionKeyword}`)} ${t(title)}`;

  return (
    <div className="inline">
          <div className="font-bold inline">
            {t(`${tPrefix}.${sectionKeyword}`)}
            {t(`${tPrefix}.colon`)}{' '}
          </div>
          <a className="underline inline" href={ link} rel="noopener noreferrer" title={altText} target="_blank">
            {t(`${tPrefix}.${keyword}`)}
          </a>
        </div>
  )
};

export { Link };
