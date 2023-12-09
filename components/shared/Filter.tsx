'use client';
import React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import HomeFilters from '../Home/HomeFilters';

interface FilterProps {
  filters: { name: string; value: string }[];
  otherClasses?: string;
  containerClasses?: string;
}

const Filter = ({ filters, otherClasses, containerClasses }: FilterProps) => {
  return (
    <>
      <div className={`relative ${containerClasses}`}>
        <Select>
          <SelectTrigger
            className={`${otherClasses} body-regular light-border background-light800_dark300
           text-dark500_light700 border px-5 py-2.5`}
          >
            <div className="line-clamp-1 flex-1 text-left">
              <SelectValue placeholder="Select a Filter" />
            </div>
          </SelectTrigger>
          <SelectContent className="w-full">
            <SelectGroup>
              {filters.map((filter) => (
                <SelectItem key={filter.value} value={filter.value}>
                  {filter.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default Filter;
