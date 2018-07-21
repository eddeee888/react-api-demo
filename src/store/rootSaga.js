import { all, fork } from "redux-saga/effects";
import { fetchFromGuardianSaga } from "./search/sagas";

export default function* rootSaga() {
  yield all([fork(fetchFromGuardianSaga)]);
}
