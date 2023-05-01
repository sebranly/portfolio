import React from 'react';
import { Footer } from './components/Footer';
import { projects } from './data/projects';
import { Pagination } from './components/Pagination';
import { Project } from './components/Project';
import { Tabs } from './components/Tabs';
import { Project as ProjectType } from './types';
import { HeaderText } from './components/HeaderText';
import { LanguageSelector } from './components/LanguageSelector';
import { Tag as TagType } from './types';
import { filterProjectsByTag } from './utils';
import { generatePages, getProjectsForPage } from './utils/pages';
import { SCROLL_TIMEOUT } from './constants';
import { useCookies } from 'react-cookie';
import { COOKIE_PAGE, COOKIE_TAB } from './constants';
import { sanitizePageCookie, sanitizeTabCookie } from './utils/cookie';
import { Tag } from './components/Tag';

function App() {
  const [cookies, setCookie] = useCookies([COOKIE_PAGE, COOKIE_TAB]);

  const onClickTab = (tag: TagType) => {
    const newProjects = filterProjectsByTag(projects, tag);
    setApplicationType(tag);
    setSelectedProjects(newProjects);
    setPageNumber(1);
  };

  const onClickPage = (page: number) => {
    setPageNumber(page);
  };

  const applicationTypeCookie = sanitizeTabCookie(cookies[COOKIE_TAB]);
  const ref = React.useRef<null | HTMLDivElement>(null);
  const [hasMounted, setHasMounted] = React.useState(false);
  const [applicationType, setApplicationType] = React.useState(applicationTypeCookie);
  const [selectedProjects, setSelectedProjects] = React.useState(filterProjectsByTag(projects, applicationTypeCookie));
  const [pageNumber, setPageNumber] = React.useState(sanitizePageCookie(cookies[COOKIE_PAGE]));

  const projectsForPage = getProjectsForPage(selectedProjects, pageNumber);
  const allPages = generatePages(selectedProjects.length);

  React.useEffect(() => {
    setCookie(COOKIE_PAGE, pageNumber, { path: '/' });
    setCookie(COOKIE_TAB, applicationType, { path: '/' });
  }, [setCookie, applicationType, pageNumber]);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  React.useEffect(() => {
    if (!hasMounted) return;

    const timer = setTimeout(() => {
      ref?.current?.scrollIntoView({ behavior: 'smooth' });
    }, SCROLL_TIMEOUT);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [applicationType, pageNumber]);

  return (
    <>
      <header className="mx-4 mt-8 mb-4 text-center">
        <LanguageSelector />
        <HeaderText className="mb-4" />
        <div className="mb-4">
          <Tag tag={TagType.React} />
          <Tag tag={TagType.TypeScript} />
          <Tag tag={TagType.TailwindCSS} />
        </div>
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
