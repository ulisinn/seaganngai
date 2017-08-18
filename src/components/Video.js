import React from 'react';
import { Link, } from 'react-router-dom';

const Video = (props) => (
    <div>
      <p>Video {parseInt(props.match.params.id, 10)}</p>
      <nav>
        <ul>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/resume'>Resume</Link></li>
          <li><Link to='/'>Home</Link></li>
        </ul>
      </nav>
    </div>
  )
;


export default Video;
