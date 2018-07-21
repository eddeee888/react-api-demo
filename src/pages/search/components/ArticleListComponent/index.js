import React from "react";
import PropTypes from "prop-types";
import SectionedArticleDisplay from "./_SectionedArticleDisplay";

const ArticleListComponent = ({ articleList, isFetching }) => {
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
        <span>Please wait while our racoons rummage through records...</span>
      )}
      {!isFetching && (
        <div>
          {hasArticles === null && (
            <div>Start typing to search for article</div>
          )}
          {hasArticles === false && <div>No result</div>}
          {hasArticles && <SectionedArticleDisplay articleList={articleList} />}
        </div>
      )}
    </div>
  );
};

ArticleListComponent.propTypes = {
  articleList: PropTypes.array,
  isFetching: PropTypes.bool
};

export default ArticleListComponent;
