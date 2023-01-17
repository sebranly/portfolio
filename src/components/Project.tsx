import * as React from 'react';
import { Contributor, Project as ProjectType, Role, Tag as TagType } from '../types';
import { alphabetizeTags, areFemaleContributors, enhanceTags, pluralize } from '../utils';
import { Tag } from './Tag';
import { useTranslation } from 'react-i18next';
import { Code } from './Code';

export interface ProjectProps {
  project: ProjectType;
}

const Project: React.FC<ProjectProps> = (props) => {
  const { t } = useTranslation();
  const { project } = props;
  const { contributors, description, download, github, subtitle, title, video, website, years, textualSnapshot } =
    project;
  const enhancedTags = enhanceTags(project);
  const allTags = [...years, ...alphabetizeTags(enhancedTags)];
  const hasContributors = contributors ? contributors.length > 0 : false;
  const contributorGender = hasContributors && areFemaleContributors(contributors!) ? 'female' : 'male';
  const contributorText = pluralize(
    t(`projects.general.contributor.${contributorGender}`),
    contributors ? contributors.length : 0
  );

  const downloadAltText = `${t('projects.general.altText.download')} ${t(title)}`;
  const githubAltText = `${t('projects.general.altText.github')} ${t(title)}`;
  const videoAltText = `${t('projects.general.altText.video')} ${t(title)}`;
  const websiteAltText = `${t('projects.general.altText.website')} ${t(title)}`;

  return (
    <div className="flex flex-col bg-white px-4 py-4 border-2 mx-4 lg:w-2/5 w-full my-2 rounded-lg border-solid border-gray-50">
      <h2 className="font-bold text-xl">{t(title)}</h2>
      <h3 className="text-lg">{t(subtitle)}</h3>
      {textualSnapshot && <Code className="text-black text-sm" lines={textualSnapshot} />}
      <div className="border-solid border-black border-2 bg-gray-200 p-2 my-2 text-justify">
        {description.map((sentence: string, index: number) => {
          return (
            <div className="mb-2" key={index}>
              {t(sentence)}
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
            const contributorName = name.startsWith('projects.') ? t(name) : name;
            const stringifiedContributor = `${contributorName} (${roles
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
          <a className="underline inline" href={github} rel="noopener noreferrer" title={githubAltText} target="_blank">
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
            title={websiteAltText}
            target="_blank"
          >
            {t('projects.general.link')}
          </a>
        </div>
      )}
      {video && (
        <div className="inline">
          <div className="font-bold inline">
            {t('projects.general.video')}
            {t('projects.general.colon')}{' '}
          </div>
          <a className="underline inline" href={video} rel="noopener noreferrer" title={videoAltText} target="_blank">
            {t('projects.general.demo')}
          </a>
        </div>
      )}
      {download && (
        <div className="inline">
          <div className="font-bold inline">
            {t('projects.general.download')}
            {t('projects.general.colon')}{' '}
          </div>
          <a
            className="underline inline"
            href={download}
            rel="noopener noreferrer"
            title={downloadAltText}
            target="_blank"
          >
            {t('projects.general.executable')}
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
