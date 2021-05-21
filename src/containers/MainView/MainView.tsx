import { Col, Row } from 'antd';
import React from 'react';
import News from '../News/News';
import PatternFilters from '../PatternFilters/PatternFilters';
import PositionDetails from '../PositionDetails/PositionDetails';
import PrimaryChart from '../PrimaryChart/PrimaryChart';
import TickerInfo from '../TickerInfo/TickerInfo';
import Watchlist from '../Watchlis/Watchlist';
import styles from './MainView.module.css';

const MainView = () => {
  return (
    <Row className={styles.MainView}>
      <Col span={6}>
        <TickerInfo />
        <Watchlist />
        <News />
      </Col>
      <Col span={12}>
        <PrimaryChart />
      </Col>
      <Col span={6}>
        <PatternFilters />
        <PositionDetails />
      </Col>
    </Row>
  );
};

export default MainView;
