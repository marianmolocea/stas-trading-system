import { PayloadAction } from '@reduxjs/toolkit';
import { createSelector, createSlice } from '@reduxjs/toolkit';

interface IRootTickerInfoState {
  tickerState: ITickerInfoState;
}

interface ITickerInfo {
  marketCap: string;
  float: string;
  vol: string;
  avrVol: string;
  shorts: string;
  instOwn: string;
  preMrkChanges: string;
  open: string;
  prevClose: string;
  dayHigh: string;
  dayLow: string;
  high52: string;
  low52: string;
}
interface ITickerInfoState {
  tickerInfo: ITickerInfo;
  stockName: string;
  symbol: string;
  fetching: boolean;
  error: any;
}

export const initialState: ITickerInfoState = {
  tickerInfo: {
    marketCap: '-',
    float: '-',
    vol: '-',
    avrVol: '-',
    shorts: '-',
    instOwn: '-',
    preMrkChanges: '-',
    open: '-',
    prevClose: '-',
    dayHigh: '-',
    dayLow: '-',
    high52: '-',
    low52: '-',
  },
  stockName: '',
  symbol: 'tsla',
  fetching: false,
  error: null,
};

/* eslint-disable no-param-reassign, @typescript-eslint/no-unused-vars */
const { actions, reducer } = createSlice({
  name: 'ticker',
  initialState,
  reducers: {
    getTickerInfo: (state: ITickerInfoState, { payload }: PayloadAction<Object>) => {
      state.fetching = true;
    },
    getTickerInfoSuccess: (state: ITickerInfoState, { payload }: any) => {
      state.tickerInfo = {
        marketCap: payload?.price?.marketCap?.fmt,
        float: payload?.defaultKeyStatistics?.floatShares?.fmt,
        vol: payload?.summaryDetail?.volume?.fmt,
        avrVol: payload?.price?.averageDailyVolume10Day?.fmt,
        shorts: payload?.defaultKeyStatistics?.shortPercentOfFloat?.fmt,
        instOwn: payload?.majorHoldersBreakdown?.institutionsFloatPercentHeld?.fmt,
        preMrkChanges: payload?.price?.preMarketChange?.fmt,
        open: payload?.price?.regularMarketOpen?.fmt,
        prevClose: payload?.price?.regularMarketPreviousClose?.fmt,
        dayHigh: payload?.price?.regularMarketDayHigh?.fmt,
        dayLow: payload?.price?.regularMarketDayLow?.fmt,
        high52: '-',
        low52: '-',
      };
      state.stockName = payload?.price?.shortName
      state.symbol = payload.symbol;
    },
    getTickerInfoFailed: (state: ITickerInfoState, { payload }: PayloadAction<Error>) => {
      state.error = payload;
    },
    getTickerInfoFulfill: (state: ITickerInfoState) => {
      state.fetching = false;
    },
  },
});

const fetching = (state: IRootTickerInfoState) => state.tickerState.fetching;
const tickerInfoList = (state: IRootTickerInfoState) => state.tickerState.tickerInfo;
const stockName = (state: IRootTickerInfoState) => state.tickerState.stockName;
const tickerSymbol = (state: IRootTickerInfoState) => state.tickerState.symbol;

const selectors = {
  isFetching: createSelector(fetching, (fetching) => fetching),
  getTickerData: createSelector(tickerInfoList, (tickerInfoList) => tickerInfoList),
  getStockName: createSelector(stockName, (stockName) => stockName),
  getTickerSymbol: createSelector(tickerSymbol, (tickerSymbol) => tickerSymbol),
};

export { actions, selectors };
export default reducer;
