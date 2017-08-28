import React from 'react';
import { Link, } from 'react-router-dom';

import NavButton from './NavButton';
import CaretRight from './CaretRight';
import Logo from './Logo';

const RepContact = () => (
    <div>
      <Logo white='#fff' blue='#6ccef5' black='#000' />
  
      <Link to='/'><NavButton><CaretRight />Home</NavButton></Link>
      <Link to='/resume'><NavButton><CaretRight />Resume</NavButton></Link>
      <p>Rep. Contact</p>
    </div>
  )
;

export default RepContact;