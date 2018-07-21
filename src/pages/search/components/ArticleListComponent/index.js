import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import SectionedArticleDisplay from "./_SectionedArticleDisplay";

const StyledResultWrapper = styled.div`
  margin-top: 1em;
`;

const ArticleListComponent = ({
  articleList,
  selectedArticles,
  isFetching,
  toggleArticleInSelectedArticles
}) => {
  //hasArticles can have 3 values:
  //- null means user has not start searching
  //- empty array means it does not have articles
  //- non empty array means ther are some values to be shown
  let hasArticles = null;
  if (articleList && articleList.length == 0) {
    hasArticles = false;
  } else if (articleList && articleList.length > 0) {
    hasArticles = true;
  }

  return (
    <div>
      {isFetching && (
        <StyledResultWrapper>
          Please wait while our racoons rummage through records...
        </StyledResultWrapper>
      )}
      {!isFetching && (
        <StyledResultWrapper>
          {hasArticles === null && (
            <div>Start typing to search for articles</div>
          )}
          {hasArticles === false && <div>No result</div>}
          {hasArticles && (
            <SectionedArticleDisplay
              articleList={articleList}
              selectedArticles={selectedArticles}
              toggleArticleInSelectedArticles={toggleArticleInSelectedArticles}
            />
          )}
        </StyledResultWrapper>
      )}
    </div>
  );
};

ArticleListComponent.propTypes = {
  articleList: PropTypes.array,
  selectedArticles: PropTypes.object,
  isFetching: PropTypes.bool,
  toggleArticleInSelectedArticles: PropTypes.func
};

export default ArticleListComponent;
