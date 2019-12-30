import React, { Component } from 'react'
//React Router
import { NavLink } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <nav>
        <NavLink to="/Newsfeed">Newsfeed</NavLink>
        <NavLink to="/Messages">Messages</NavLink>
        <NavLink to="/Watch">Watch</NavLink>
        <NavLink to="/Profile">Profile</NavLink>
       </nav>
    );
  }
}
export default Nav
