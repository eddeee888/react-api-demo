import * as types from "./types";
import { fromJS } from "immutable";
import { createReducer } from "./../../common/functions/general_functions";
import moment from "moment";

const initialState = fromJS({
  searchText: "",
  articleList: null,
  selectedArticles: {},
  isFetching: false,
  hasFetchError: false
});

export default createReducer(initialState, {
  [types.SET_SEARCH_TEXT]: (state, { value }) => state.set("searchText", value),
  [types.FETCH_ARTICLES_SUCCEEDED]: (state, { articles }) => {
    //reset state to reset index
    state = state.set("isFetching", false).set("hasFetchError", false);
    state = state.set("articleList", fromJS([]));
    for (const article of articles) {
      state = state.update("articleList", list =>
        list.push(
          fromJS({
            id: article.id,
            title: article.webTitle,
            link: article.webUrl,
            dateOfPublication: moment(article.webPublicationDate).format(
              "DD/MM/YYYY"
            ),
            sectionId: article.sectionId,
            sectionName: article.sectionName
          })
        )
      );
    }
    return state;
  },
  [types.FETCH_ARTICLES_REQUESTED]: state =>
    state.set("isFetching", true).set("hasFetchError", false),
  [types.FETCH_ARTICLES_FAILED]: state =>
    state.set("isFetching", false).set("hasFetchError", true),
  [types.ADD_ARTICLE_TO_SELECTED_LIST]: (state, { articleObject }) =>
    state.setIn(["selectedArticles", articleObject.id], articleObject),
  [types.REMOVE_ARTICLE_FROM_SELECTED_LIST]: (state, { articleId }) =>
    state.update("selectedArticles", selectedArticles =>
      selectedArticles.delete(articleId)
    )
});

/* Selectors/Getters */
export function getSearchText(state) {
  return state.search.get("searchText");
}

export function getArticleList(state) {
  return state.search.get("articleList");
}

export function getSelectedArticles(state) {
  return state.search.get("selectedArticles");
}

export function getIsFetching(state) {
  return state.search.get("isFetching");
}

export function getHasFetchError(state) {
  return state.search.get("hasFetchError");
}
