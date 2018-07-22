import { fromJS } from "immutable";
import * as uut from "../reducer";

const initialState = {
  search: fromJS({
    searchText: "ABC",
    articleList: [
      {
        id: "article1",
        title: "article 1",
        link: "https://www.article1.com.au"
      },
      {
        id: "article2",
        title: "article 2",
        link: "https://www.article2.com.au"
      }
    ],
    selectedArticles: {},
    isFetching: false,
    hasFetchError: false
  })
};

describe("store/search/selectors", () => {
  it("should get searchText", () => {
    expect(uut.getSearchText(initialState)).toEqual("ABC");
  });

  it("should get articleList", () => {
    expect(uut.getArticleList(initialState)).toEqual(
      fromJS([
        {
          id: "article1",
          title: "article 1",
          link: "https://www.article1.com.au"
        },
        {
          id: "article2",
          title: "article 2",
          link: "https://www.article2.com.au"
        }
      ])
    );
  });

  //TODO: do other selector tests here
});
