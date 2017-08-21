import React from 'react';
import { Link, } from 'react-router-dom';

import NavButton from './NavButton';
import CaretRight from './CaretRight';

const RepContact = () => (
    <div>
      <Link to='/'><NavButton><CaretRight />Home</NavButton></Link>
      <Link to='/contact'><NavButton><CaretRight />Contact</NavButton></Link>
      <p>Rep. Contact</p>
    </div>
  )
;

export default RepContact;