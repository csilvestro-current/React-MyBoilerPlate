import React from 'react';
import HorzLineCharts from '../charts/HorzLineCharts';

const ChartMed = ({chartMed}) => {
  return (
    <article key={chartMed.id} style={styles.card}>
      <h1>{chartMed.chartHeader}</h1>
      <h2>{chartMed.chartsubHeader}</h2>
      <p><HorzLineCharts /></p>
    </article>
  )
};
export default ChartMed;

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3s',
    minHeight: '100%',
    backgroundColor: 'white',
    height: '40%',
    padding: '1rem',
    marginRight: '1rem'
  }
}
