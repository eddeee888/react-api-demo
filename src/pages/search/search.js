import React from "react";
import styled from "styled-components";
import { withPageWrapper } from "./../common/HOCs";
import SearchBoxContainer from "./containers/SearchBoxContainer";
import ArticleListContainer from "./containers/ArticleListContainer";
import SelectedArticleListContainer from "./containers/SelectedArticleListContainer";

const StyledMainWrapper = styled.div`
  margin-bottom: 3em;
`;

const StyledSearchAndListWrapper = styled.div`
  padding: 0 2em;
`;

const Search = () => (
  <StyledMainWrapper>
    <StyledSearchAndListWrapper>
      <SearchBoxContainer />
      <ArticleListContainer />
    </StyledSearchAndListWrapper>
    <SelectedArticleListContainer />
  </StyledMainWrapper>
);

export default withPageWrapper(Search);
