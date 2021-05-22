import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input } from 'antd';

const { Search } = Input;

const TickerInput = () => {
  const dispatch = useDispatch();
  const onSearch = () => {
    console.log('Ticker Search');
  };

  return <Search placeholder="Ticker" onSearch={onSearch} style={{ width: 200 }} />;
};

export default TickerInput;
