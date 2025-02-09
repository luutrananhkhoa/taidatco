"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Search } from 'lucide-react';
import { CategoryFilter } from '@/components/Admin/CategoryFilter';
import TableFilter from '@/components/Admin/TableFIlter';
import { ProductTablePagination } from '@/components/Admin/ProductTablePagination';
import { ProductTable } from '@/components/Admin/ProductTable';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const filterValues = [
  { id: 1, value: "all", title: 'Tất cả' },
  { id: 2, value:"active", title: 'Kich hoạt' },
  { id: 3, value:"archived", title: 'Lưu trữ' },
];

const summaryData = [
  { id: 1, count: 123, label: 'Sản phẩm', value: "all", },
  { id: 2, count: 123, label: 'Kích hoạt', value:"active" },
  { id: 3, count: 123, label: 'Lưu trữ', value:"archived" },
];

const Products = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-start gap-10">
      <div className="w-full grid grid-cols-3 gap-10">
        {summaryData.map(({ id, count, label }) => (
          <div
            key={id}
            className="px-8 py-12 bg-gray-200 rounded-lg flex flex-col gap-2"
          >
            <h3 className="text-7xl font-bold">{count}</h3>
            <p className="text-lg text-gray-800">{label}</p>
          </div>
        ))}
      </div>

      <div className="flex w-full items-start justify-between gap-4">
        
        <div className="flex gap-4 items-center">
            <div>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none text-grey-200">
                        <Search/>
                    </div>
                    <input 
                        type="search" 
                        className="block p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none" 
                        placeholder="Tên sản phẩm" 
                        required 
                    />
                </div>
            </div>
            <div className="flex items-start justify-start gap-4">
                {filterValues.map(({ id, title, value }) => (
                    <TableFilter
                        key={id}
                        title={title}
                        value={value}
                        selected={selectedFilter}
                        onClick={() => setSelectedFilter(value)}
                    />
                ))}
            </div>
            <div>
                <CategoryFilter />
            </div>
        </div>
        <div>
          <Button variant={"default"} className='flex gap-2 py-6'>
            <span className="">Thêm sản phẩm</span>
            <Plus/>
          </Button>
        </div>
      </div>

      <div className="w-full flex flex-col gap-4">
        <ProductTable selectedFilter={selectedFilter} />
        <ProductTablePagination />
      </div>
    </div>
  );
};

export default Products;
