import React from 'react';
import { Footer } from './components/Footer';
import { projects } from './data/projects';
import { Project } from './components/Project';
import { Language, Project as ProjectType } from './types';
import { useTranslation } from 'react-i18next';
import { languages } from './languages';
import { HeaderText } from './components/HeaderText';
import { Tag } from './types';
import classnames from 'classnames';
import { filterProjectsByTag } from './utils';
import { TAB_COUNT } from './constants';

function App() {
  const onClickTab = (tag: Tag) => {
    const newProjects = filterProjectsByTag(projects, tag);
    setApplicationType(tag);
    setSelectedProjects(newProjects);
  };

  const { i18n, t } = useTranslation();
  const [applicationType, setApplicationType] = React.useState(Tag.All);
  const [selectedProjects, setSelectedProjects] = React.useState(projects);

  return (
    <>
      <header className="mx-4 mt-8 mb-4 text-center">
        <div className="mb-4">
          {languages.map((language: Language) => {
            const { shortName, name } = language;
            const isSelected = i18n.resolvedLanguage === shortName;

            return (
              <button
                className="rounded mr-2"
                key={shortName}
                style={{
                  fontWeight: isSelected ? 'bold' : 'normal',
                  textDecorationLine: isSelected ? 'underline' : 'none'
                }}
                type="submit"
                onClick={() => i18n.changeLanguage(shortName)}
              >
                {name}
              </button>
            );
          })}
        </div>
        <HeaderText className="mb-8" />
      </header>
      <div className="mt-4 flex w-full">
        {[Tag.All, Tag.CLI, Tag.GUI, Tag.Website].map((tag: Tag, index: number) => {
          const text = t(`selector.${tag}`);
          const isSelected = applicationType === tag;
          const classnamesTab = classnames(
            {
              'bg-black': isSelected,
              'text-white': isSelected,
              'rounded-tl-lg': isSelected && index !== 0,
              'rounded-tr-lg': isSelected && index !== TAB_COUNT - 1
            },
            `p-2 w-1/${TAB_COUNT}`
          );

          return (
            <button
              className={classnamesTab}
              key={tag}
              style={{ fontWeight: isSelected ? 'bold' : 'normal' }}
              type="submit"
              onClick={() => onClickTab(tag)}
            >
              {text}
            </button>
          );
        })}
      </div>
      <div className="py-4 flex flex-wrap justify-center bg-black">
        {selectedProjects.map((project: ProjectType) => {
          const { title } = project;
          return <Project key={title} project={project} />;
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
