import React from 'react';
import { Link, } from 'react-router-dom';

const RepContact = () => (
    <div>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/resume'>Resume</Link></li>
        </ul>
      </nav>
      <p>Rep. Contact</p>
    </div>
  )
;

export default RepContact;