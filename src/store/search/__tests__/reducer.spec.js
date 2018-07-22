import { fromJS } from "immutable";
import uut from "../reducer";
import * as types from "../types";

const initialState = fromJS({
  searchText: "",
  articleList: null,
  selectedArticles: {},
  isFetching: false,
  hasFetchError: false
});

describe("store/search/reducer", () => {
  it("should have initial state", () => {
    expect(uut()).toEqual(initialState);
  });

  it("should not affect state", () => {
    expect(uut(initialState, { type: "__NOT_EXISTING__" })).toEqual(
      initialState
    );
  });

  it("should update search text", () => {
    expect(
      uut(initialState, { type: types.SET_SEARCH_TEXT, value: "ABC" })
    ).toEqual(initialState.set("searchText", "ABC"));
  });

  //TODO: do other reducer tests here
});
