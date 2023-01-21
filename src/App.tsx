import React from 'react';
import { Footer } from './components/Footer';
import { projects } from './data/projects';
import { Pagination } from './components/Pagination';
import { Project } from './components/Project';
import { Tabs } from './components/Tabs';
import { Project as ProjectType } from './types';
import { HeaderText } from './components/HeaderText';
import { LanguageSelector } from './components/LanguageSelector';
import { Tag } from './types';
import { filterProjectsByTag } from './utils';
import { generatePages, getProjectsForPage } from './utils/pages';

function App() {
  const onClickTab = (tag: Tag) => {
    const newProjects = filterProjectsByTag(projects, tag);
    setApplicationType(tag);
    setSelectedProjects(newProjects);
    setPageNumber(1);
  };

  const onClickPage = (page: number) => {
    setPageNumber(page);
  };

  const ref = React.useRef<null | HTMLDivElement>(null);
  const [hasMounted, setHasMounted] = React.useState(false);
  const [applicationType, setApplicationType] = React.useState(Tag.All);
  const [selectedProjects, setSelectedProjects] = React.useState(projects);
  const [pageNumber, setPageNumber] = React.useState(1);

  const projectsForPage = getProjectsForPage(selectedProjects, pageNumber);
  const allPages = generatePages(selectedProjects.length);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  React.useEffect(() => {
    if (!hasMounted) return;

    const timer = setTimeout(() => {
      ref?.current?.scrollIntoView({ behavior: 'smooth' });
    }, 1000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  return (
    <>
      <header className="mx-4 mt-8 mb-4 text-center">
        <LanguageSelector />
        <HeaderText className="mb-8" />
      </header>
      <Tabs applicationType={applicationType} onClickTab={onClickTab} ref={ref} />
      <div className="py-4 border border-black flex flex-wrap justify-center bg-black">
        {projectsForPage.map((project: ProjectType) => {
          const { title } = project;
          return <Project key={title} project={project} />;
        })}
      </div>
      <Pagination allPages={allPages} onClickPage={onClickPage} pageNumber={pageNumber} />
      <Footer />
    </>
  );
}

export default App;
