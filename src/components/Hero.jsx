import React, { Component } from 'react';
import Navbar from '../Navbar';

class Hero extends Component {
  state = {
    isOpen: false,
    setIsOpen: false,
  }

  toggle = () => {
    const { isOpen, setIsOpen } = this.state;
    setIsOpen(!isOpen);
    this.setState({
      isOpen,
      setIsOpen,
    });
  };

  render() {
    return (
      <main className="heroContainer">
        <Navbar toggle={this.toggle} />
      </main>
    );
  }
}

export default Hero;
