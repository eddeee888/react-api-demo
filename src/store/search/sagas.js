import { call, put, takeLatest } from "redux-saga/effects";
import { fetchContent } from "./../../services/Guardian";
import * as types from "./types";

const fetchArticlesRequested = query => ({
  type: types.FETCH_ARTICLES_REQUESTED
});

const fetchArticleSucceeded = articles => ({
  type: types.FETCH_ARTICLES_SUCCEEDED,
  articles
});
const fetchArticleFailed = articles => ({
  type: types.FETCH_ARTICLES_FAILED
});

function* fetchUsingQueryWorker({ query }) {
  try {
    yield put(fetchArticlesRequested());
    const response = yield call(fetchContent, query);
    if (response.statusCode === 200) {
      const articles = JSON.parse(response.body).response.results;
      yield put(fetchArticleSucceeded(articles));
    } else {
      yield put(fetchArticleFailed());
    }
  } catch (e) {
    yield put(fetchArticleFailed());
  }
}

export function* fetchFromGuardianSaga() {
  yield takeLatest(types.FETCH_ARTICLES, fetchUsingQueryWorker);
}
