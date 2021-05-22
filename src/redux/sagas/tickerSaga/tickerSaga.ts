import { put, takeLatest, all, call } from "redux-saga/effects";
import { actions as tickerActions } from "../../reducers/tickerReducer";
import TickerInfoService from "../../../services/TickerInfoService";

export function* getTickerInfo(payload: any) {
  try {
    //@ts-ignore
    const tickerInfo = yield call(TickerInfoService.getTickerInfo, payload);
    yield put(tickerActions.getTickerInfoSuccess(tickerInfo));
  } catch (error) {
    yield put(tickerActions.getTickerInfoFailed(error));
  } finally {
    yield put(tickerActions.getTickerInfoFulfill());
  }
}

export function* watchGetTicker() {
  yield takeLatest(tickerActions.getTickerInfo, getTickerInfo);
}

export default function* rootSaga() {
  yield all([watchGetTicker()]);
}
