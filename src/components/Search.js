import React from "react";
import { MdSearch } from "react-icons/md";

export const Search = ({ searchText }) => {
  return (
    <div className="search">
      <MdSearch className="search-icon" size="18px" />
      <input
        placeholder="type to search"
        type="text"
        onChange={(event) => searchText(event.target.value)}
      />
    </div>
  );
};
