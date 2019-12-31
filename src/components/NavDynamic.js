import React, { Component } from 'react'
//React Router
import { NavLink } from 'react-router-dom'
//import Button from '@material-ui/core/Button';

class NavDynamic extends Component {
  render() {
    return (
      <nav>
        <NavLink to="/Newsfeed">Newsfeed</NavLink>
        <NavLink to="/Messages">Messages</NavLink>
        <NavLink to="/Watch">Watch</NavLink>
        <NavLink to="/Profile">Profile</NavLink>
        {/* <Button variant="contained">Default</Button> */}
       </nav>
    );
  }
}
export default NavDynamic
