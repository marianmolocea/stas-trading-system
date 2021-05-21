import React from 'react';

import styles from './TickerInfo.module.css';
import { Row } from 'antd';
import TickerInput from '../../components/TickerInput/TickerInput';

const TickerInfo = () => {
  return (
    <Row className={styles.TickerInfo}>
      <TickerInput />
    </Row>
  );
};

export default TickerInfo;
