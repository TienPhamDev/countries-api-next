"use client";
import { SearchIcon } from "lucide-react";
import { useState } from "react";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const handleSearch = () => {};
  return (
    <div className="gap-4 dark:bg-blue-900 py-6 md:w-[480px] w-full h-14 px-8 rounded-[5px] shadow-[0px_2px_9px_0px_rgba(0,0,0,0.09)] flex items-center ">
      <button>
        <SearchIcon size={17.5} />
      </button>
      <input
        className={"outline-none p-4"}
        type={"text"}
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default Search;
