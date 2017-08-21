import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom';

import AllThumbnails from './AllThumbnails';

import NavButton from '../components/NavButton';
import CaretRight from '../components/CaretRight';

export default class Home extends Component {
  
  render() {
    return (
      <section>
        <Link to='/resume'><NavButton><CaretRight />Resume</NavButton></Link>
        <Link to='/contact'><NavButton><CaretRight />Contact</NavButton></Link>
        <AllThumbnails />
      </section>
    );
  }
}