import * as React from 'react';
import { Tag as TagType } from '../types';
import classnames from 'classnames';
import { getTagColor, getTailwindBackgroundColor, getTailwindHoverBackgroundColor } from '../utils';

export interface TagProps {
  tag: TagType | number;
}

const Tag: React.FC<TagProps> = (props) => {
  const { tag } = props;
  const color = getTagColor(tag);

  const classnamesTag = classnames(
    'border-2 border-black border-solid cursor-pointer inline-block rounded mr-2 my-1 px-4 py-1',
    'text-white',
    getTailwindBackgroundColor(color),
    getTailwindHoverBackgroundColor(color)
  );

  return <div className={classnamesTag}>{tag}</div>;
};

export { Tag };
