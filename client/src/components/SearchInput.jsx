import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import useConversation from "../zustand/useConversation";
import useConversations from "../hooks/useConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      toast.error(`Search term must be at least 3 characters long`);
    }
    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No user found");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex mt-3  items-center gap-2 w-full"
    >
      <input
        type="text"
        placeholder="Search..."
        className="h-10 m-2 input sm:w-3/4 input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <CiSearch />
      </button>
    </form>
  );
};

export default SearchInput;
