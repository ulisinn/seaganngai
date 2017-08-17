import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import Logo from '../components/Logo';

export default class Home extends Component {
  
  render() {
    return <Router>
      <Logo white='#fff' blue='#6ccef5' black='#000' />
    </Router>;
  }
}