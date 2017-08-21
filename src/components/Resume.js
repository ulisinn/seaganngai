import React from 'react';
import { Link, } from 'react-router-dom';

import NavButton from './NavButton';
import CaretRight from './CaretRight';

const Resume = () => (
    <div>
      <Link to='/'><NavButton><CaretRight />Resume</NavButton></Link>
      <Link to='/contact'><NavButton><CaretRight />Contact</NavButton></Link>
      
      <p>Resume</p>
    </div>
  )
;

export default Resume;