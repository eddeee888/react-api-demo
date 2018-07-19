import React from "react";

const SearchComponent = ({ searchText, searchTextOnChange }) => {
  return (
    <div>
      <input value={searchText} onChange={searchTextOnChange} />
    </div>
  );
};

export default SearchComponent;
