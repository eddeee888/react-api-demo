import React from "react";
import PropTypes from "prop-types";
import { ArticleRow } from "../common/components";
import { A } from "./../../../common/components/ui";

const SelectedArticleListComponent = ({
  selectedArticles,
  toggleArticleInSelectedArticles
}) => {
  return (
    <div>
      {Object.keys(selectedArticles).map(selectedArticleId => {
        return (
          <div key={selectedArticleId}>
            <ArticleRow
              key={selectedArticles[selectedArticleId].id}
              link={selectedArticles[selectedArticleId].link}
              title={selectedArticles[selectedArticleId].title}
              dateOfPublication={
                selectedArticles[selectedArticleId].dateOfPublication
              }
            />
            <A
              onClick={() =>
                toggleArticleInSelectedArticles(
                  selectedArticles[selectedArticleId]
                )
              }
            >
              X
            </A>
          </div>
        );
      })}
    </div>
  );
};

SelectedArticleListComponent.poropTypes = {
  selectedArticles: PropTypes.object, //object with id of each article as key
  toggleArticleInSelectedArticles: PropTypes.func // function to toggle selected article
};

export default SelectedArticleListComponent;

/**
 * Note: we can bring <A /> out into its own component
 * to avoid using arrow function here - minimal performance improvement increase
 */
