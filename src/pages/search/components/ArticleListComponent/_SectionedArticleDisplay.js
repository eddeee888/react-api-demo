import React from "react";
import PropTypes from "prop-types";
import { ArticleRow } from "./../../common/components";
import { transformArticleListIntoSections } from "./../../common/functions/";
import { H2 } from "./../../../../common/components/ui";

class SectionedArticleDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sectionedList: {}
    };
  }
  static getDerivedStateFromProps(props) {
    //we use this function to turn the articles in list format into grouped format
    return {
      sectionedList: transformArticleListIntoSections(props.articleList)
    };
  }
  render() {
    const { sectionedList } = this.state;
    return (
      <div>
        {Object.keys(sectionedList).map(sectionId => {
          return (
            <div key={sectionId}>
              <H2>{sectionedList[sectionId].name}</H2>
              {sectionedList[sectionId].articles.map(article => {
                return (
                  <ArticleRow
                    key={article.id}
                    link={article.link}
                    title={article.title}
                    dateOfPublication={article.dateOfPublication}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

SectionedArticleDisplay.propTypes = {
  articleList: PropTypes.array //this will be transformed into a sectioned list within this component
};

export default SectionedArticleDisplay;
