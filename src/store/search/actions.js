import * as types from "./types";
import { fetchContent } from "./../../services/Guardian";

const setSearchText = value => ({
  type: types.SET_SEARCH_TEXT,
  value
});

const updateArticleList = articles => ({
  type: types.UPDATE_ARTICLE_LIST,
  articles
});

/**
 * Function to set search text, at the same time fetch the content - this can be turned into a saga
 * @param {*} value
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
