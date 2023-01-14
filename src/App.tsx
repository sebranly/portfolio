import React from 'react';
import { Footer } from './components/Footer';
import { projects } from './data/projects';
import { Project } from './components/Project';
import { Language, Project as ProjectType } from './types';
import { Filter } from './components/Filter';
import { useTranslation } from 'react-i18next';
import { languages } from './languages';
import { HeaderText } from './components/HeaderText';

function App() {
  const { i18n } = useTranslation();

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
        <HeaderText />
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
