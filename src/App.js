import React, { Component } from 'react'
import './App.css'
import Routes from './components/Routes'
// import Footer from './components/Footer'
import Nav from './components/Nav';

//React Router
import { BrowserRouter as Router} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Routes />
        </div>
      </Router>
    );
  }
}

export default App
