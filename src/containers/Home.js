import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';

export default class Home extends Component {
  
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/resume'>Resume</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}