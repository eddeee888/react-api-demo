import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "./../../../store/search/actions";
import * as SearchSelectors from "./../../../store/search/reducer";
import SearchComponent from "../components/SearchComponent";

class SearchContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this._searchTextOnChange = this._searchTextOnChange.bind(this);
  }
  _searchTextOnChange(e) {
    const { setSearchText } = this.props;
    setSearchText(e.target.value);
  }
  render() {
    const { searchText } = this.props;
    return (
      <SearchComponent
        searchText={searchText}
        searchTextOnChange={this._searchTextOnChange}
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
