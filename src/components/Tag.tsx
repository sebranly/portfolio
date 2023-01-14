import * as React from 'react';
import { Color, Tag as TagType } from '../types';
import classnames from 'classnames';
import { getTagColor, getTailwindBackgroundColor, getTailwindHoverBackgroundColor, hasTagTranslation } from '../utils';
import { useTranslation } from 'react-i18next';

export interface TagProps {
  tag: TagType | number;
}

const Tag: React.FC<TagProps> = (props) => {
  const { t } = useTranslation();
  const { tag } = props;
  const color = getTagColor(tag);
  const tagText = hasTagTranslation(tag) ? t(`projects.general.tags.${tag}`) : tag;
  const isWhite = color === Color.White;

  const classnamesTag = classnames(
    'border-2 border-black border-solid cursor-pointer inline-block rounded mr-2 my-1 px-4 py-1',
    { 'text-white': !isWhite, 'text-black': isWhite },
    getTailwindBackgroundColor(color),
    getTailwindHoverBackgroundColor(color)
  );

  return <div className={classnamesTag}>{tagText}</div>;
};

export { Tag };
