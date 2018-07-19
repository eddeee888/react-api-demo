import React from "react";
import TextField from "./../../../common/components/TextField";

const SearchBoxComponent = ({ searchText, searchTextOnChange }) => {
  return (
    <div>
      <TextField
        label="Search"
        placeholder="Start typing to search..."
        value={searchText}
        onChange={searchTextOnChange}
      />
    </div>
  );
};

export default SearchBoxComponent;
