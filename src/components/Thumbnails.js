import React from 'react';
import { Link } from 'react-router-dom';

const Thumbnails = () => (
  <div>
    <ul>
      <li key={0}>
        <Link to={`/video/${1}`}>thumb 1</Link>
      </li>
      <li key={1}>
        <Link to={`/video/${2}`}>thumb 2</Link>
      </li>
      <li key={2}>
        <Link to={`/video/${3}`}>thumb 3</Link>
      </li>
    </ul>
  </div>
);


export default Thumbnails;
