import React from "react";
import { withPageWrapper } from "./../common/HOCs";
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

export default withPageWrapper(Search);
