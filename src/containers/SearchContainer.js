import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "./../store/search/actions";
import * as SearchSelectors from "./../store/search/reducer";
import SearchComponent from "../components/SearchComponent";

class SearchContainer extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { searchText, setSearchText } = this.props;
    return (
      <SearchComponent
        searchText={searchText}
        searchTextOnChange={e => setSearchText(e.target.value)}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionCreators, dispatch);
};
const mapStateToProps = state => ({
  searchText: SearchSelectors.getSearchText(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer);
