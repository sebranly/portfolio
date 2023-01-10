import * as React from 'react';
import { Contributor, Project as ProjectType, Tag as TagType } from '../types';
import { pluralize } from '../utils';
import { Tag } from './Tag';

export interface ProjectProps {
  project: ProjectType;
}

const Project: React.FC<ProjectProps> = (props) => {
  const { project } = props;
  const { contributors, description, tags, subtitle, title, years } = project;
  const allTags = [...years, ...tags];
  const hasContributors = contributors ? contributors.length > 0 : false;
  const contributorText = pluralize('Contributor', contributors ? contributors.length : 0);

  return (
    <div className="flex flex-col bg-white px-4 py-4 border-2 w-96 mx-4 sm:mx-2 my-2 rounded-lg border-solid border-gray-50">
      <h2 className="font-bold text-xl">{title}</h2>
      <h3 className="text-lg">{subtitle}</h3>
      <div className="border-solid border-black border-2 bg-gray-200 p-2 my-2 text-justify">
        {description.map((sentence: string, index: number) => {
          return (
            <div className="mb-2" key={index}>
              {sentence}
            </div>
          );
        })}
      </div>
      {hasContributors && (
        <div className="inline">
          <div className="font-bold inline">{contributorText}: </div>
          {contributors!.map((contributor: Contributor, index: number) => {
            const { name, roles } = contributor;
            const isLastContributor = index === contributors!.length - 1;
            const suffix = isLastContributor ? '' : ', ';
            const stringifiedContributor = `${name} (${roles.join(', ')})${suffix}`;

            return (
              <div className="inline" key={name}>
                {stringifiedContributor}
              </div>
            );
          })}
        </div>
      )}
      <div className="grow h-4" />
      <div>
        {allTags.map((tag: TagType | number) => {
          return <Tag key={tag} tag={tag} />;
        })}
      </div>
    </div>
  );
};

export { Project };
