import * as React from 'react';
import { Tag as TagType } from '../types';
import { getAllTags, getAllYears } from '../utils';
import { Tag } from './Tag';
import { projects } from '../data/projects';

export interface FilterProps {
  className?: string;
}

const Filter: React.FC<FilterProps> = (props) => {
  const { className } = props;
  const allYears = getAllYears(projects);
  const tags = getAllTags(projects);
  const allTags = [...allYears, ...tags];

  return (
    <div className={className}>
      {allTags.map((tag: TagType | number) => {
        return <Tag key={tag} tag={tag} />;
      })}
    </div>
  );
};

export { Filter };
