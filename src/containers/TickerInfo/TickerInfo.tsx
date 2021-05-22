import styles from './TickerInfo.module.css';
import { Row, Spin } from 'antd';
import TickerInput from '../../components/TickerInput/TickerInput';
import TickerInfoCell from '../../components/TickerInfoCell/TickerInfoCell';
import { useSelector } from 'react-redux';
import { selectors as tickerSelector } from '../../redux/reducers/tickerReducer';

const TickerInfo = () => {
  const tickerData: any = useSelector(tickerSelector.getTickerData);
  const stockName: string = useSelector(tickerSelector.getStockName);
  const isFetching = useSelector(tickerSelector.isFetching);

  return (
    <div className={styles.TickerInfo}>
      <Row className={styles.headerRow}>
        <TickerInput />
        <h3><strong>{stockName}</strong></h3>
      </Row>
      <div className={styles.container}>
        {isFetching && <Spin size="large" className={styles.spinner_overlay} />}
        <Row className={styles.fourItemsRow}>
          <TickerInfoCell label="MKT Cap" value={tickerData.marketCap} />
          <TickerInfoCell label="Float" value={tickerData.float} />
          <TickerInfoCell label="Vol" value={tickerData.vol} />
          <TickerInfoCell label="Avr Vol" value={tickerData.avrVol} />
        </Row>
        <Row className={styles.threeItemsRow}>
          <TickerInfoCell label="% Shorts" value={tickerData.shorts} colSpan={8} />
          <TickerInfoCell label="Inst Own" value={tickerData.instOwn} colSpan={8} />
          <TickerInfoCell label="PreMkt Change" value={tickerData.preMrkChanges} colSpan={8} />
        </Row>
        <Row className={styles.fourItemsRow}>
          <TickerInfoCell label="Open" value={tickerData.open} />
          <TickerInfoCell label="Prev Close" value={tickerData.prevClose} />
          <TickerInfoCell label="High" value={tickerData.dayHigh} />
          <TickerInfoCell label="Low" value={tickerData.dayLow} />
        </Row>
        <Row className={styles.threeItemsRow}>
          <TickerInfoCell label="High 52" value={'-'} colSpan={8} />
          <TickerInfoCell label="Low 52" value={'-'} colSpan={8} />
          <TickerInfoCell label="EPS" value={'-'} colSpan={8} />
        </Row>
      </div>
    </div>
  );
};

export default TickerInfo;
