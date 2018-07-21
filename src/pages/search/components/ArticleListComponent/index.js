import React from "react";
import PropTypes from "prop-types";
import SectionedArticleDisplay from "./_SectionedArticleDisplay";

const ArticleListComponent = ({ articleList }) => {
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
      {hasArticles === null && <div>Start typing to search for article</div>}
      {hasArticles === false && <div>No result</div>}
      {hasArticles && <SectionedArticleDisplay articleList={articleList} />}
    </div>
  );
};

ArticleListComponent.propTypes = {
  articleList: PropTypes.array
};

export default ArticleListComponent;
