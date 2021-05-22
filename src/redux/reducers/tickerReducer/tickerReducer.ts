import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IRootTickerInfoState {
  TickerInfo: ITickerInfoState;
}
interface ITickerInfoState {
  tickerInfo: {};
  symbol: string
  fetching: boolean;
  error: any;
}

export const initialState: ITickerInfoState = {
  tickerInfo: {},
  symbol: '',
  fetching: false,
  error: null,
};

/* eslint-disable no-param-reassign, @typescript-eslint/no-unused-vars */
const { actions, reducer } = createSlice({
  name: 'ticker',
  initialState,
  reducers: {
    getTickerInfo: (state: ITickerInfoState, { payload }) => {
      state.fetching = true;
      state.symbol = payload
    },
    getTickerInfoSuccess: (state: ITickerInfoState, { payload }) => {
        console.log("SUCCES FETCH!")
      state.tickerInfo = payload;
    },
    getTickerInfoFailed: (state: ITickerInfoState, { payload }) => {
      state.error = payload;
    },
    getTickerInfoFulfill: (state) => {
      state.fetching = false;
    },
  },
});

const fetching = (state: IRootTickerInfoState) => state.TickerInfo.fetching;
const tickerInfoList = (state: IRootTickerInfoState) => state.TickerInfo.tickerInfo;

const selectors = {
  isFetching: createSelector(fetching, (fetching) => fetching),
  getTickerInfo: createSelector(tickerInfoList, (tickerInfoList) => tickerInfoList),
};

export { actions, selectors };
export default reducer;
