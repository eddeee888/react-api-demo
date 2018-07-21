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
    const { articleList, isFetching } = this.props;

    return (
      <ArticleListComponent
        isFetching={isFetching}
        articleList={articleList !== null ? articleList.toJS() : null}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionCreators, dispatch);
};
const mapStateToProps = state => ({
  articleList: SearchSelectors.getArticleList(state),
  isFetching: SearchSelectors.getIsFetching(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleListContainer);
