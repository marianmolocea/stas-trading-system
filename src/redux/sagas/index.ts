import { fork } from 'redux-saga/effects';
import tickerSaga from './tickerSaga/tickerSaga';
export default function* rootSaga() {
  yield fork(tickerSaga);
}
