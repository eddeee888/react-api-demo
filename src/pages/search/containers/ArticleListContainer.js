import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "./../../../store/search/actions";
import * as SearchSelectors from "./../../../store/search/reducer";
import ArticleListComponent from "../components/ArticleListComponent";

class ArticleListContainer extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { articleList } = this.props;

    return <ArticleListComponent articleList={articleList.toJS()} />;
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionCreators, dispatch);
};
const mapStateToProps = state => ({
  articleList: SearchSelectors.getArticleList(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleListContainer);
