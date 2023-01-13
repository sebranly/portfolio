import * as React from 'react';
import { Contributor, Project as ProjectType, Role, Tag as TagType } from '../types';
import { pluralize } from '../utils';
import { Tag } from './Tag';
import { useTranslation } from 'react-i18next';

export interface ProjectProps {
  project: ProjectType;
}

const Project: React.FC<ProjectProps> = (props) => {
  const { t } = useTranslation();
  const { project } = props;
  const { contributors, description, github, tags, subtitle, title, website, years } = project;
  const allTags = [...years, ...tags];
  const hasContributors = contributors ? contributors.length > 0 : false;
  const contributorText = pluralize(t('projects.general.contributor'), contributors ? contributors.length : 0);

  return (
    <div className="flex flex-col bg-white px-4 py-4 border-2 w-96 mx-4 sm:mx-2 my-2 rounded-lg border-solid border-gray-50">
      <h2 className="font-bold text-xl">{title}</h2>
      <h3 className="text-lg">{subtitle.startsWith('projects') ? t(subtitle) : subtitle}</h3>
      <div className="border-solid border-black border-2 bg-gray-200 p-2 my-2 text-justify">
        {description.map((sentence: string, index: number) => {
          return (
            <div className="mb-2" key={index}>
              {sentence.startsWith('projects') ? t(sentence) : sentence}
            </div>
          );
        })}
      </div>
      {hasContributors && (
        <div className="inline">
          <div className="font-bold inline">
            {contributorText}
            {t('projects.general.colon')}{' '}
          </div>
          {contributors!.map((contributor: Contributor, index: number) => {
            const { name, roles } = contributor;
            const isLastContributor = index === contributors!.length - 1;
            const suffix = isLastContributor ? '' : ', ';
            const stringifiedContributor = `${name} (${roles
              .map((role: Role) => t(`projects.general.roles.${role}`))
              .join(', ')})${suffix}`;

            return (
              <div className="inline" key={name}>
                {stringifiedContributor}
              </div>
            );
          })}
        </div>
      )}
      {github && (
        <div className="inline">
          <div className="font-bold inline">
            {t('projects.general.code')}
            {t('projects.general.colon')}{' '}
          </div>
          <a
            className="underline inline"
            href={github}
            rel="noopener noreferrer"
            title={`GitHub page for ${title}`}
            target="_blank"
          >
            GitHub
          </a>
        </div>
      )}
      {website && (
        <div className="inline">
          <div className="font-bold inline">
            {t('projects.general.website')}
            {t('projects.general.colon')}{' '}
          </div>
          <a
            className="underline inline"
            href={website}
            rel="noopener noreferrer"
            title={`Website for ${title}`}
            target="_blank"
          >
            {t('projects.general.link')}
          </a>
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
