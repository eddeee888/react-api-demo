import * as types from "./types";
import * as SearchSelectors from "./reducer";
import { fetchContent } from "./../../services/Guardian";

/********** Action creators **********/
const setSearchText = value => ({
  type: types.SET_SEARCH_TEXT,
  value
});

const updateArticleList = articles => ({
  type: types.UPDATE_ARTICLE_LIST,
  articles
});

const addSelectedArticle = articleObject => ({
  type: types.ADD_ARTICLE_TO_SELECTED_LIST,
  articleObject
});

const removeSelectedArticle = articleId => ({
  type: types.REMOVE_ARTICLE_FROM_SELECTED_LIST,
  articleId
});

/********** Action Handler - thunks **********/
/**
 * Function to set search text, at the same time fetch the content - this can be turned into a saga
 * @param {*} value - search text to be used as query
 */
export const setAndSearchText = value => (dispatch, getState) => {
  dispatch(setSearchText(value));
  dispatch(fetchGuardianContent(value));
};

const fetchGuardianContent = (value, page) => (dispatch, getState) => {
  fetchContent(value)
    .then(response => {
      if (response.statusCode === 200) {
        const articles = JSON.parse(response.body).response.results;
        dispatch(updateArticleList(articles));
      } else {
        console.error("Unable to send request to Guardian");
      }
    })
    .catch(error => {
      console.error("Unexpected error in setAndSearchText");
    });
};

/**
 * Thunk to either add or remove article from selected list
 * @param {object} articleObject - article object to be added or removed
 */
export const toggleArticleInSelectedArticles = articleObject => (
  dispatch,
  getState
) => {
  const selectedArticles = SearchSelectors.getSelectedArticles(getState());
  const articleAlreadySeleted = selectedArticles.get(articleObject.id)
    ? true
    : false;
  if (articleAlreadySeleted) {
    dispatch(removeSelectedArticle(articleObject.id));
  } else {
    dispatch(addSelectedArticle(articleObject));
  }
};
