import React, { Component, useEffect } from 'react'
import './App.css'
import Routes from './components/Routes'

//React Router
import { BrowserRouter } from 'react-router-dom'
//import KonamiCode from './components/konami/Konami';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
        {/* Or */}
        {/* <div style={styles.container}> */}
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

export default App

// const styles = {
//   container: {
//       backgroundColor: 'gray',
//       display: 'flex',
//       flexDirection: 'row',
//       height: '100vh'
//   }
// }
