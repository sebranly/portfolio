import * as React from 'react';
import classnames from 'classnames';

export interface PaginationProps {
  allPages: number[];
  onClickPage: (nb: number) => void;
  pageNumber: number;
}

const Pagination: React.FC<PaginationProps> = (props) => {
  const { allPages, onClickPage, pageNumber } = props;

  return (
    <div className="flex w-full">
      {allPages.map((page: number, index: number) => {
        const isSelected = pageNumber === page;
        const classnamesTab = classnames(
          {
            'bg-black': isSelected,
            'text-white': isSelected,
            'rounded-bl-lg': isSelected && index !== 0,
            'rounded-br-lg': isSelected && index !== allPages.length - 1
          },
          `p-2 flex-1`
        );

        return (
          <button
            className={classnamesTab}
            key={page}
            style={{ fontWeight: isSelected ? 'bold' : 'normal' }}
            type="submit"
            onClick={() => onClickPage(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export { Pagination };
