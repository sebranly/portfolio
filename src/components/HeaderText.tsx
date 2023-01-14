import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { AUTHOR_NAME } from '../constants/general';

export interface HeaderTextProps {}

const HeaderText: React.FC<HeaderTextProps> = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="font-bold sm:text-6xl text-2xl">{t('header.welcome')}</h1>
      <h2 className="sm:text-4xl text-2xl">
        {t('header.author.prefix')}
        <div className="italic inline">{AUTHOR_NAME}</div>
        {t('header.author.suffix')}
      </h2>
      <div className="sm:text-2xl text-xl">{t('header.introduction')}</div>
    </>
  );
};

export { HeaderText };
