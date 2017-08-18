import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom';

import AllThumbnails from './AllThumbnails';

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
        <AllThumbnails />
      </header>
    );
  }
}