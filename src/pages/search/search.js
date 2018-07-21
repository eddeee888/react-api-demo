import React from "react";
import SearchBoxContainer from "./containers/SearchBoxContainer";
import ArticleListContainer from "./containers/ArticleListContainer";
import ArticleListCheckboxesContainer from "./containers/ArticleListCheckboxesContainer";
import SelectedArticleListContainer from "./containers/SelectedArticleListContainer";

const Search = () => (
  <div>
    <SearchBoxContainer />
    <div>
      <ArticleListContainer />
      <ArticleListCheckboxesContainer />
    </div>
    <SelectedArticleListContainer />
  </div>
);

export default Search;
