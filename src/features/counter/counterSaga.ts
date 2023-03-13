import { PayloadAction } from "@reduxjs/toolkit";
import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import { incrementSaga, incrementSuccess } from "./counterSlice";

export function* log(action: PayloadAction<number>) {
  console.log("waiting...");
  yield delay(2000);
  console.log("done");
  yield put(incrementSuccess(action.payload));
}
export default function* counterSaga() {
  yield takeEvery(incrementSaga.toString(), log);
}
