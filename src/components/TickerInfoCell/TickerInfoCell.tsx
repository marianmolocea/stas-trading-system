import { Col } from 'antd';
import React from 'react';

import styles from './TickerInfoCell.module.css'

type TickerInfoCellProps = {
    label: string;
    value: string | number;
    colSpan?: number
}

const TickerInfoCell = ({label, value, colSpan = 6}: TickerInfoCellProps) => {
const cellStyling = [styles.colSeparator, styles.cell].join(' ');
  return (
    <Col span={colSpan} className={cellStyling}>
      <label>{label}</label>
      <span>{value ?? '-'}</span>
    </Col>
  );
};

export default TickerInfoCell;
