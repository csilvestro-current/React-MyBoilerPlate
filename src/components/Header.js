import React from 'react';
import { FaBell } from 'react-icons/fa';
import Avatar from '../images/avatar.jpg';

const Header = props => {
    return (
      <header style={styles.container} key={props.id}>
        <h1>Your Wallet</h1>
        <p style={styles.rightSide}>
          <FaBell />
          <img src={Avatar} alt="Dashboard" style={styles.avatar} />
          <h4>John Rogers</h4>
        </p>
      </header>
    )
  };
export default Header;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '2%',
    width: '93vw',
  },
  rightSide: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 'auto',
    alignItems: 'center',
    width: '11vw',
  },
  avatar: {
    height: '30px',
    width: '30px',
    borderRadius: '50%',
    marginLeft: '10%',
    marginRight: '10%',
    border: '1px solid #474044'
  }
}