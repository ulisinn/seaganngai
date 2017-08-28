import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom';

import AllThumbnails from './AllThumbnails';

import NavButton from '../components/NavButton';
import CaretRight from '../components/CaretRight';
import Logo from '../components/Logo';

export default class Home extends Component {
  
  render() {
    return (
      <section>
        <Logo white='#fff' blue='#6ccef5' black='#000' />
  
        <Link to='/resume'><NavButton><CaretRight />Resume</NavButton></Link>
        <Link to='/contact'><NavButton><CaretRight />Contact</NavButton></Link>
        <AllThumbnails />
      </section>
    );
  }
}