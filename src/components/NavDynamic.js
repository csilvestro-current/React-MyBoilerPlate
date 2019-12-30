//import React, { Component } from 'react'
// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
// import ListItemText from '@material-ui/core/ListItemText'
// import ListItemIcon from '@material-ui/core/ListItemIcon';
//import Avatar from '@material-ui/core/Avatar';
//React Router
//import { NavLink } from 'react-router-dom'

// class NavDynamic extends Component {
//   render() {
//     return (
//       <section className="">
//         fdf
//       </section>
//     );
//   }
// }

// export default NavDynamic



import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import ToggleButton from '@material-ui/lab/ToggleButton';

export default function NavDynamic() {
  const [selected, setSelected] = React.useState(false);

  return (
    <ToggleButton
      value="check"
      selected={selected}
      onChange={() => {
        setSelected(!selected);
      }}
    >
      <CheckIcon />
    </ToggleButton>
  );
}