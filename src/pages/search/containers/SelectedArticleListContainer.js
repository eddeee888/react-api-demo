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
    /*  NOTE: 
        we are using `toggleArticleInSelectedArticles` selected article OFF,
        we can create another thunk function to specifically turn it off, doing so wil make it idempotent but 
        in this case, we are removing the article anyways, so there's no point
    */
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
