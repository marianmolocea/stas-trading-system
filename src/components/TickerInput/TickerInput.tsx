import React from 'react';
import { useDispatch } from 'react-redux';
import { Input } from 'antd';

import { actions as tickerInfoActions } from '../../redux/reducers/tickerReducer';

const { Search } = Input;

const TickerInput = () => {
  const dispatch = useDispatch();
  const onSearch = (symbol: string) => {
    dispatch(tickerInfoActions.getTickerInfo(symbol));
  };

  return <Search placeholder="Ticker" onSearch={onSearch} style={{ width: 150, marginRight: '16px' }} />;
};

export default TickerInput;
