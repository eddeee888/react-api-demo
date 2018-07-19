import React from "react";
import PropTypes from "prop-types";
import ArticleRow from "./_ArticleRow";

const ArticleListComponent = ({ articleList }) => {
  let hasArticles = false;
  if (articleList && articleList.length > 0) {
    hasArticles = true;
  }
  console.log();
  return (
    <div>
      <div>
        <div>Title</div>
        <div>Date of publication</div>
        <div />
      </div>
      {!hasArticles && <div>No result</div>}
      {hasArticles &&
        articleList.map(article => (
          <ArticleRow
            key={article.id}
            title={article.title}
            link={article.link}
            dateOfPublication={article.dateOfPublication}
          />
        ))}
    </div>
  );
};

ArticleRow.propTypes = {
  articleList: PropTypes.array
};

export default ArticleListComponent;
