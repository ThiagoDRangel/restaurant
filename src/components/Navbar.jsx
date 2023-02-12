import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <main>
        <section className="nav">
          <p
            className="nav-link"
            to='/'
          >
            EatzzZ
          </p>
          <p
            className="bars" />
        </section>
      </main>
    );
  }
}

export default Navbar;
