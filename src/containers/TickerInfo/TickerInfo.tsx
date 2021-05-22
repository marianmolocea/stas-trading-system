import styles from './TickerInfo.module.css';
import { Row } from 'antd';
import TickerInput from '../../components/TickerInput/TickerInput';
import TickerInfoCell from '../../components/TickerInfoCell/TickerInfoCell';

const TickerInfo = () => {

  return (
    <div className={styles.TickerInfo}>
      <Row className={styles.headerRow}>
        <TickerInput />
        <div>Ticker Name</div>
        <div>Last</div>
      </Row>
      <Row className={styles.fourItemsRow}>
        <TickerInfoCell label="MKT Cap" value={0} />
        <TickerInfoCell label="Float" value={0} />
        <TickerInfoCell label="Vol" value={0} />
        <TickerInfoCell label="Avr Vol" value={0} />
      </Row>
      <Row className={styles.threeItemsRow}>
        <TickerInfoCell label="% Shorts" value={0} colSpan={8} />
        <TickerInfoCell label="Inst Own" value={0} colSpan={8} />
        <TickerInfoCell label="P/E" value={0} colSpan={8} />
      </Row>
      <Row className={styles.fourItemsRow}>
        <TickerInfoCell label="Open" value={0} />
        <TickerInfoCell label="Prev Close" value={0} />
        <TickerInfoCell label="High" value={0} />
        <TickerInfoCell label="Low" value={0} />
      </Row>
      <Row className={styles.threeItemsRow}>
        <TickerInfoCell label="High 52" value={0} colSpan={8} />
        <TickerInfoCell label="Low 52" value={0} colSpan={8} />
        <TickerInfoCell label="EPS" value={0} colSpan={8} />
      </Row>
    </div>
  );
};

export default TickerInfo;
