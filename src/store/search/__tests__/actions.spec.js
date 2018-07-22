import * as types from "../types";
import { Thunk } from "redux-testkit";
import * as uut from "../actions";
import guardianService from "./../../../services/Guardian";
jest.mock("./../../../services/Guardian");

describe("store/search/actions", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should set search text value and fetch articles", () => {
    const dispatches = Thunk(uut.setAndSearchText).execute();
    expect(dispatches.length).toBe(2);
    expect(dispatches[0].getAction()).toEqual({ type: types.SET_SEARCH_TEXT });
    expect(dispatches[1].getAction()).toEqual({ type: types.FETCH_ARTICLES });
  });

  //TODO: test other exported actions here!
});
