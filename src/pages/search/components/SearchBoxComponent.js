import React from "react";
import PropTypes from "prop-types";
import { TextField } from "./../../../common/components/ui";

const SearchBoxComponent = ({ searchText, searchTextOnChange }) => {
  return (
    <div>
      <TextField
        label="Search"
        value={searchText}
        onChange={searchTextOnChange}
      />
    </div>
  );
};

SearchBoxComponent.propTypes = {
  searchText: PropTypes.string, //this is the value to be changed
  searchTextOnChange: PropTypes.func // this is the function to change searchText
};

export default SearchBoxComponent;
