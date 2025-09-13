import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="gap-4 dark:bg-blue-900 py-6 w-[480px] h-14 px-8 rounded-[5px] shadow-[0px_2px_9px_0px_rgba(0,0,0,0.09)] flex items-center ">
      <button>
        <SearchIcon size={17.5} />
      </button>
      <input
        className={"outline-none p-4"}
        type={"text"}
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default Search;
