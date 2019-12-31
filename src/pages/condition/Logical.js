import React, { Component } from 'react'


class Tirenary extends Component {
  state = {
    isLoaded: true
  };

  render() {
    let { isLoaded } = this.state;
    return (
      <div className="App">
        <h1>
          Logical && (Short Circuit Evaluation with &&)
        </h1>
        {isLoaded && <button>Logout</button>}
      </div>
    );
  } 
}

export default Tirenary
