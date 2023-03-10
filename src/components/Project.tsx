import * as React from 'react';
import { Contributor, Project as ProjectType, Role, Tag as TagType } from '../types';
import { areFemaleContributors, pluralize } from '../utils';
import { alphabetizeTags, enhanceTags } from '../utils/tags';
import { Tag } from './Tag';
import { useTranslation } from 'react-i18next';
import { Code } from './Code';
import { Image } from './Image';
import { Link } from './Link';
import { Swiper } from './Swiper';

export interface ProjectProps {
  project: ProjectType;
}

const Project: React.FC<ProjectProps> = (props) => {
  const { t } = useTranslation();
  const { project } = props;
  const {
    contributors,
    description,
    download,
    github,
    images,
    subtitle,
    title,
    video,
    website,
    years,
    textualSnapshot
  } = project;
  const enhancedTags = enhanceTags(project);
  const hasOneImage = !!images && images.images.length === 1;
  const hasSeveralImages = !!images && images.images.length > 1;
  const allTags = [...years, ...alphabetizeTags(enhancedTags, t)];
  const hasContributors = contributors ? contributors.length > 0 : false;
  const contributorGender = hasContributors && areFemaleContributors(contributors!) ? 'female' : 'male';
  const contributorText = pluralize(
    t(`projects.general.contributor.${contributorGender}`),
    contributors ? contributors.length : 0
  );

  const classnamesImages = 'my-2 lg:w-1/2 md:w-3/5 sm:w-2/3 w-full m-auto';

  return (
    <div className="flex flex-col bg-white px-4 py-4 border-2 mx-4 lg:w-2/5 w-full my-2 rounded-lg border-solid border-gray-50">
      <h2 className="font-bold text-xl">{t(title)}</h2>
      <h3 className="text-lg">{t(subtitle)}</h3>
      {hasOneImage && <Image className={classnamesImages} folder={images.folder} image={images.images[0]} />}
      {hasSeveralImages && <Swiper className={classnamesImages} projectImages={images} />}
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
      {github && <Link keyword="github" link={github} sectionKeyword="code" title={title} />}
      {website && <Link keyword="link" link={website} sectionKeyword="website" title={title} />}
      {video && <Link keyword="demo" link={video} sectionKeyword="video" title={title} />}
      {download && <Link keyword="executable" link={download} sectionKeyword="download" title={title} />}
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
