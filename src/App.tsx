import React from 'react';
import { Footer } from './components/Footer';
import { projects } from './data/projects';
import { Project } from './components/Project';
import { Project as ProjectType } from './types';
import { Filter } from './components/Filter';

function App() {
  return (
    <div className="App">
      <>
        <header className="mx-4 my-8 text-center">
          <h1 className="font-bold sm:text-6xl text-2xl">Welcome to my Portfolio!</h1>
          <h2 className="sm:text-4xl text-2xl">
            I'm <div className="italic inline">sebranly</div>, a Software Engineer.
          </h2>
          <div className="sm:text-2xl text-xl">Here are some of my personal projects.</div>
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
    </div>
  );
}

export default App;
