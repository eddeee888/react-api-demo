import React from "react";
import PropTypes from "prop-types";
import { transformArticleListIntoSections } from "./../common/functions";
import { Checkbox } from "./../../../common/components/ui";

class ArticleListCheckboxesComponent extends React.Component {
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
    const {
      selectedArticles,
      toggleArticleInSelectedArticles,
      isFetching
    } = this.props;
    return (
      <div>
        {isFetching && <span />}
        {!isFetching && (
          <div>
            {Object.keys(sectionedList).map(sectionId => {
              return (
                <div key={sectionId}>
                  {sectionedList[sectionId].articles.map(article => {
                    return (
                      <Checkbox
                        key={article.id}
                        checked={selectedArticles[article.id] ? true : false}
                        onChange={() =>
                          toggleArticleInSelectedArticles(article)
                        }
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

ArticleListCheckboxesComponent.propTypes = {
  articleList: PropTypes.array, //list of articles - to be sectioned inside this component
  selectedArticles: PropTypes.object, //object containing articles so we know what one we have selected
  toggleArticleInSelectedArticles: PropTypes.func //function to toggle an article in list
};

export default ArticleListCheckboxesComponent;

/* 
NOTE: We can further optimise this by creating Checkbox component to avoid using arrow function for onClick.
This requires more work for minimal performance improvement so I'm leaving it as is
*/
