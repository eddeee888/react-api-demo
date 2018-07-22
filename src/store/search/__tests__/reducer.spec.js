import { fromJS } from "immutable";
import { Reducer } from "redux-testkit";
import uut from "../reducer";
import * as types from "../types";

const initialState = {
  searchText: "",
  articleList: null,
  selectedArticles: {},
  isFetching: false,
  hasFetchError: false
};

describe("store/search/reducer", () => {
  it("should have initial state", () => {
    expect(uut()).toEqual(initialState);
  });

  it("should not affect state", () => {
    Reducer(uut)
      .expect({ type: "__NOT_EXISTING__" })
      .toEqual(fromJS(initialState));
  });

  /*
  it("should update search text", () => {
    Reducer(uut)
      .expect({ type: types.SET_SEARCH_TEXT, value: "ABC" })
      .toReturnState(fromJS(initialState).set("searchText", "ABC"));
  });*/
});
