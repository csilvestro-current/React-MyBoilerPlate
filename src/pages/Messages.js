import React, { Component } from 'react'
import IfElse from '../pages/condition/IfElse';
import Tirenary from '../pages/condition/Tirenary';
import Logical from '../pages/condition/Logical';
import Nav from '../components/Nav';

class Messages extends Component {
  render() {
    return (
      <section className="">
        <Nav />
        <div>
          ...
        </div>
        <IfElse />
        <Tirenary />
        <Logical />
      </section>
    );
  }
}

export default Messages
