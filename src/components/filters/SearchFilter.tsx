import React from "react";
import { FaSearch } from "react-icons/fa";

interface SearchFilterProps {
  setSearch: (str: string) => void;
}

const SearchFilter = (props: SearchFilterProps) => {
  return (
    <div className="px-0 py-3">
      <div className="text-lg text-dark mb-1">Search</div>
      <div
        className="bg-accentSecondary rounded-md
        flex flex-row items-center w-48 text-dark
        mb-2 px-3 py-2 shadow-md text-base"
      >
        <div className="w-full cursor-pointer flex flex-row justify-between items-center">
          <FaSearch className="mr-2" size="18px" />
          <input
            className="bg-transparent w-full h-full text-base ml-1 focus:outline-none"
            onChange={(e) => props.setSearch(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
