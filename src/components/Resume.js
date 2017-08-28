import React from 'react';
import { Link, } from 'react-router-dom';

import NavButton from './NavButton';
import CaretRight from './CaretRight';
import Logo from './Logo';

const Resume = () => (
    <div>
      <Logo white='#fff' blue='#6ccef5' black='#000' />
      <Link to='/'><NavButton><CaretRight />Home</NavButton></Link>
      <Link to='/contact'><NavButton><CaretRight />Contact</NavButton></Link>
      
      <p>Resume</p>
    </div>
  )
;

export default Resume;