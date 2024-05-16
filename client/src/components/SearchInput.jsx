import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  return (
    <form className="flex mt-3  items-center gap-2 w-full">
      <input
        type="text"
        placeholder="Search..."
        className="h-10 m-2 input input-bordered rounded-full"
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <CiSearch />
      </button>
    </form>
  );
};

export default SearchInput;
