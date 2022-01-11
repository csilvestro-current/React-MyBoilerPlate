import React from 'react';
import PieCharts from '../charts/PieCharts';

const ChartSmall = ({chartSmall}) => {
  return (
    <article key={chartSmall.id} style={styles.card}>
      <h1 style={styles.h1}>{chartSmall.chartHeader}</h1>
      <PieCharts />
    </article>
  )
};
export default ChartSmall;

const styles = {
  container:{
    //Nothing used yet
  },
  card: {
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3s',
    minHeight: '100%',
    backgroundColor: 'white',
    margin: '1rem',
    padding: '1rem',
    textAlign: 'center'
  },
  h1: {
    borderBottom: '1px solid #474044'
  }
}