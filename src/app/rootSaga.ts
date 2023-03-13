import counterSaga from "features/counter/counterSaga";
import { all } from "redux-saga/effects";

export function* helloSaga() {
  console.log("helloSaga");
}
export default function* rootSaga() {
  console.log("rootSaga");
  yield all([helloSaga(), counterSaga()]);
}
