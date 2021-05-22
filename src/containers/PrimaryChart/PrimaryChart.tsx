import React from 'react';
//@ts-ignore
import TradingViewWidget from 'react-tradingview-widget';
import styles from './PrimaryChart.module.css';
import { Row } from 'antd';
import { useSelector } from 'react-redux';
import {selectors as tickerSelector } from '../../redux/reducers/tickerReducer'

const PrimaryChart = () => {
  const symbol = useSelector(tickerSelector.getTickerSymbol);

  const chartConfig = {
    autosize: true,
    symbol: `NASDAQ:${symbol}`,
    interval: "1",
    timezone: "Europe/London",
    locale: "en",
    enable_publishing: false,
    allow_symbol_change: false,
    withdateranges: true,
    hide_side_toolbar: false,
  }
  return (
    <Row className={styles.PrimaryChart}>
      <TradingViewWidget {...chartConfig}/>
    </Row>
  );
};

export default PrimaryChart;
