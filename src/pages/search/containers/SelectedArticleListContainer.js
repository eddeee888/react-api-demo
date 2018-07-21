import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "./../../../store/search/actions";
import * as SearchSelectors from "./../../../store/search/reducer";
import SelectedArticleListComponent from "../components/SelectedArticleListComponent";

class SelectedArticleListContainer extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { selectedArticles, toggleArticleInSelectedArticles } = this.props;

    return (
      <SelectedArticleListComponent
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
  selectedArticles: SearchSelectors.getSelectedArticles(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectedArticleListContainer);
