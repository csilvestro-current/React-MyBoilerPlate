import React, { Component } from 'react'


class IfElse extends Component {
  state = {text: '', inputText: '', mode:'view'};

  handleChange = (e) => {
    this.setState({ inputText: e.target.value });
  }
  
  handleSave = () => {
    this.setState({text: this.state.inputText, mode: 'view'});
  }

  handleEdit = () => {
    this.setState({mode: 'edit'});
  }

  render () {
    if(this.state.mode === 'view') {
      return (
        <div>
          <h1>iF/Else</h1>
          <p>Text: {this.state.text}</p>
          <button onClick={this.handleEdit}>
            Edit
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>iF/Else</h1>
          <p>Text: {this.state.text}</p>
            <input
              onChange={this.handleChange}
              value={this.state.inputText}
            />
          <button onClick={this.handleSave}>
            Save
          </button>
        </div>
      );
    }
  }
}

export default IfElse