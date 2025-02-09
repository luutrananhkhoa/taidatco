import React, { FC } from 'react';

type TableFilterProps = {
  title: string;
  selected: string;
  value: string;
} & React.HTMLAttributes<HTMLDivElement>;

const TableFilter: FC<TableFilterProps> = ({
  title,
  selected,
  value,
  ...props
}) => {
  return (
    <div className={`px-4 py-3 cursor-pointer ${selected === value ? 'bg-gray-200' : ''}`} {...props}>
      <p className='text-md'>{title}</p>
    </div>
  );
};

export default TableFilter;
