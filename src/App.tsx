import React from 'react';
import { Footer } from './components/Footer';
import { projects } from './data/projects';
import { Project } from './components/Project';
import { Language, Project as ProjectType } from './types';
import { Filter } from './components/Filter';
import { useTranslation } from 'react-i18next';
import { languages } from './languages';

function App() {
  const { i18n, t } = useTranslation();

  // TODO: create Header component
  return (
    <>
      <header className="mx-4 my-8 text-center">
      <div>
          {languages.map((language: Language) => {
            const { shortName, name } = language;

            return (
              <button
                className="rounded mr-2"
                key={shortName}
                style={{ fontWeight: i18n.resolvedLanguage === shortName ? 'bold' : 'normal' }}
                type="submit"
                onClick={() => i18n.changeLanguage(shortName)}
              >
                {name}
              </button>
            );
          })}
        </div>
        <h1 className="font-bold sm:text-6xl text-2xl">{t('header.welcome')}</h1>
        <h2 className="sm:text-4xl text-2xl">
          {t('header.author.prefix')}
          <div className="italic inline">sebranly</div>
          {t('header.author.suffix')}
        </h2>
        <div className="sm:text-2xl text-xl">{t('header.introduction')}</div>
        <Filter className="my-4 max-w-3xl mx-auto" />
      </header>
      <div className="py-4 flex flex-wrap  justify-center bg-black">
        {projects.map((project: ProjectType) => {
          const { title } = project;
          return <Project key={title} project={project} />;
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
