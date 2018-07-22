import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "./../../../store/search/actions";
import * as SearchSelectors from "./../../../store/search/reducer";
import ArticleListComponent from "../components/ArticleListComponent";

class ArticleListContainer extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      articleList,
      selectedArticles,
      isFetching,
      hasError,
      toggleArticleInSelectedArticles
    } = this.props;

    return (
      <ArticleListComponent
        hasError={hasError}
        isFetching={isFetching}
        articleList={articleList !== null ? articleList.toJS() : null}
        selectedArticles={
          selectedArticles !== null ? selectedArticles.toJS() : null
        }
        toggleArticleInSelectedArticles={toggleArticleInSelectedArticles}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionCreators, dispatch);
};
const mapStateToProps = state => ({
  articleList: SearchSelectors.getArticleList(state),
  selectedArticles: SearchSelectors.getSelectedArticles(state),
  isFetching: SearchSelectors.getIsFetching(state),
  hasError: SearchSelectors.getHasFetchError(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleListContainer);
