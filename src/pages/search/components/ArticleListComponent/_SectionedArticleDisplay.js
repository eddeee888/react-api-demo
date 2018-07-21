import React from "react";
import PropTypes from "prop-types";
import {
  ArticleDetails,
  StyledArticleRowWrapper,
  StyledArticleWrapper,
  StyledArticleActionWrapper,
  StyledSectionHeaderWrapper
} from "./../../common/components";
import { H2, Checkbox } from "./../../../../common/components/ui";

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
      sectionedList: SectionedArticleDisplay.transformArticleListIntoSections(
        props.articleList
      )
    };
  }
  static transformArticleListIntoSections(articleList) {
    let sectionedList = {};

    if (articleList) {
      for (const article of articleList) {
        if (!sectionedList[article.sectionId]) {
          sectionedList[article.sectionId] = {
            name: article.sectionName,
            articles: []
          };
        }
        sectionedList[article.sectionId].articles.push(article);
      }
    }

    return sectionedList;
  }
  render() {
    const { sectionedList } = this.state;
    const { selectedArticles, toggleArticleInSelectedArticles } = this.props;
    return (
      <div>
        {Object.keys(sectionedList).map(sectionId => {
          return (
            <div key={sectionId}>
              <StyledSectionHeaderWrapper>
                <H2>{sectionedList[sectionId].name}</H2>
              </StyledSectionHeaderWrapper>
              {sectionedList[sectionId].articles.map(article => {
                return (
                  <StyledArticleRowWrapper key={article.id}>
                    <StyledArticleWrapper>
                      <ArticleDetails
                        link={article.link}
                        title={article.title}
                        dateOfPublication={article.dateOfPublication}
                      />
                    </StyledArticleWrapper>
                    <StyledArticleActionWrapper>
                      <Checkbox
                        checked={selectedArticles[article.id] ? true : false}
                        onChange={() =>
                          toggleArticleInSelectedArticles(article)
                        }
                      />
                    </StyledArticleActionWrapper>
                  </StyledArticleRowWrapper>
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
  articleList: PropTypes.array, //this will be transformed into a sectioned list within this component
  selectedArticles: PropTypes.object,
  toggleArticleInSelectedArticles: PropTypes.func
};

export default SectionedArticleDisplay;
