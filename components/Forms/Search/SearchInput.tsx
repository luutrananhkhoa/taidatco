// import { searchHandler } from "@/actions/search";
// import { Search } from "@/components/Icons/Search";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import React, { FC } from "react";

interface SearchInputProps {}

const SearchInput: FC<SearchInputProps> = ({}) => {
  return (
    <form 
        // action={searchHandler}
    >
      <div
        className="w-full rounded-lg p-2 md:p-4 bg-white flex items-center gap-4"
        style={{ boxShadow: " 0px 4px 140px 0px rgba(175, 173, 181, 0.20)" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M15.3332 28C22.3288 28 27.9998 22.3289 27.9998 15.3333C27.9998 8.33769 22.3288 2.66663 15.3332 2.66663C8.33756 2.66663 2.6665 8.33769 2.6665 15.3333C2.6665 22.3289 8.33756 28 15.3332 28Z" stroke="#AFADB5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M29.3332 29.3333L26.6665 26.6666" stroke="#AFADB5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <input
          type="text"
          name="searchKey"
          placeholder="Search for a product"
          className="h-full w-full text-black border-none outline-none"
        />
        <PrimaryButton text="Search" />
      </div>
    </form>
  );
};

export default SearchInput;