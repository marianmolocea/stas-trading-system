import React from 'react';
//@ts-ignore
import TradingViewWidget from 'react-tradingview-widget';
import styles from './SecondaryChart.module.css';
import { Row } from 'antd';

const SecondaryChart = () => {
  const symbol = 'aapl';

  const chartConfig = {
    autosize: true,
    symbol: `NASDAQ:${symbol}`,
    interval: 'D',
    timezone: 'Europe/London',
    locale: 'en',
    hide_top_toolbar: true,
    enable_publishing: false,
    allow_symbol_change: false,
    hide_side_toolbar: false,
  };
  return (
    <Row className={styles.SecondaryChart}>
      <TradingViewWidget {...chartConfig} />
    </Row>
  );
};

export default SecondaryChart;
