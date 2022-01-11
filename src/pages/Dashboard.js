import React, {useState} from 'react';
import ChartSmall from '../components/chartCards/ChartSmall';
import ChartMed from '../components/chartCards/ChartMed';
import ChartHorz from '../components/chartCards/ChartHorz';

function Dashboard() {
  const [pageTitle] = ['Dashboard'];
  const [chartHorz] = useState([
    {chartHeader: 'Income Overview'},
    {chartHeader: 'Savings Overview'}
  ]);
  const [chartSmall] = useState([
    {chartHeader: 'Income'},
    {chartHeader: 'Savings'},
    {chartHeader: 'Savings'}
  ]);
  const [chartMed] = useState([
    {
      chartHeader:'Savings Overview', 
      chartsubHeader:'Start saving today'
    },
    {
      chartHeader:'Savings Overview', 
      chartsubHeader:'Start saving today'
    }
  ]);

    return (
      <section style={styles.container}>
        <header style={styles.header}>
          <h1>{pageTitle}</h1>
        </header>
        <p style={styles.chartHorz}>
          {chartHorz.map((chartHorz, id) => (
            <ChartHorz
              key={id}
              id={id}
              chartHorz={chartHorz}
            />
          ))}  
        </p>
        <p style={styles.row}>
          {chartSmall.map((chartSmall, id) => (
            <ChartSmall
              key={id}
              id={id}
              chartSmall={chartSmall}
            />
          ))}  
        </p> 
        <p style={styles.row}>
          {chartMed.map((chartMed, id) => (
            <ChartMed
              key={id}
              id={id}
              chartMed={chartMed}
            />
          ))}  
        </p>  
      </section>
    )
  };

export default Dashboard;
        
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '2%',
  },
  col: {
    display: 'flex',
    flexDirection: 'column'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  chartHorz: {
    display: 'flex',
    flexDirection: 'row'
  }
}