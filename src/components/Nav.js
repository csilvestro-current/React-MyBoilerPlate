import React from 'react';
//React Router
import { NavLink } from 'react-router-dom';
import { SiDeepin } from 'react-icons/si'; 
import { MdDashboard, MdAttachMoney } from 'react-icons/md';
import { HiBriefcase } from 'react-icons/hi';
import { BsFillPiggyBankFill } from 'react-icons/bs'; 
import { FaMoneyBillWave } from 'react-icons/fa'; 

const Nav = () =>{
    return (
      <nav style={styles.nav}>
        <p style={styles.padding}><SiDeepin /></p>
        <NavLink to="/Dashboard" style={styles.padding}><MdDashboard /></NavLink>
        <NavLink to="/Reports" style={styles.padding}><HiBriefcase /></NavLink>
        <NavLink to="/Income" style={styles.padding}><MdAttachMoney /></NavLink>
        <NavLink to="/Spending"style={styles.padding}><FaMoneyBillWave /></NavLink>
        <NavLink to="/Savings" style={styles.padding}><BsFillPiggyBankFill /></NavLink>
      </nav>
    );
  }
export default Nav

const styles = {
  nav:  {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '1.5rem',
    alignItems: 'center',
    backgroundColor: '#474044',
    padding: '1rem',
    color: 'white',
  },
  padding: {
    paddingBottom: '26px'
  }
}
