import React from 'react';
//React Router
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import Income from './pages/Income';
import Spending from './pages/Spending'; 
import Savings from './pages/Savings';
import Settings from './pages/Settings';

function App() {
  return (
      <div style={styles.container}>
        <Nav />
        <section style={styles.header}>
          <Header />    
          <Routes>
            <Route exact path='/' element={<Dashboard />} /> 
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/Reports' element={<Reports />} />
            <Route path='/Income' element={<Income />} />
            <Route path='/Spending' element={<Spending />} />
            <Route path='/Savings' element={<Savings />} />
            <Route path='/Settings' element={<Settings />} /> 
          </Routes>
        </section>
      </div>
    );
  }
export default App;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row'
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
}
