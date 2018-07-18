import * as types from "./types";
import Immutable from "immutable";
import { createReducer } from "./../../common/functions/general_functions";

const initialState = Immutable.fromJS({
  searchText: ""
});

export default createReducer(initialState, {
  [types.SET_SEARCH_TEXT]: (state, { value }) => state.set("searchText", value)
});

export function getSearchText(state) {
  return state.search.get("searchText");
}
