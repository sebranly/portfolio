import * as React from 'react';
import classnames from 'classnames';
import { Tag } from '../types';
import { TAB_COUNT } from '../constants';
import { useTranslation } from 'react-i18next';

export interface TabsProps {
  applicationType: Tag;
  onClickTab: (tag: Tag) => void;
}

const Tabs = React.forwardRef((props: TabsProps, ref) => {
  const { applicationType, onClickTab } = props;
  const { t } = useTranslation();

  return (
    <div ref={ref as any} className="mt-4 flex w-full">
      {[Tag.All, Tag.CLI, Tag.GUI, Tag.Website].map((tag: Tag, index: number) => {
        const text = t(`selector.${tag}`);
        const isSelected = applicationType === tag;
        const classnamesTab = classnames(
          {
            'bg-black': isSelected,
            'text-white': isSelected,
            'rounded-tl-lg': isSelected && index !== 0,
            'rounded-tr-lg': isSelected && index !== TAB_COUNT - 1
          },
          'p-2 flex-1'
        );

        return (
          <button
            className={classnamesTab}
            key={tag}
            style={{ fontWeight: isSelected ? 'bold' : 'normal' }}
            type="submit"
            onClick={() => onClickTab(tag)}
          >
            {text}
          </button>
        );
      })}
    </div>
  );
});

export { Tabs };
