import React, { Component } from 'react'


class Tirenary extends Component {
  state = {
    isLoaded: false
  };

  render() {
    let { isLoaded } = this.state;
    return (
      <div className="App">
        <h1>
          Tirenary
        </h1>
        {isLoaded ? <button>Logout</button> : <button>Login</button>}
      </div>
    );
  } 
}

export default Tirenary
