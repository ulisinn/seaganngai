import React from 'react';
import { Link } from 'react-router-dom';

// import { Icon } from 'react-fa';

const Thumbnail = ({ index, title, imageSrc, state }) => (
    <li key={index}>
      <Link to={{
        pathname: `/video&id=${index}`,
        state: state,
      }}><p>{title}</p>
        <img src={imageSrc} style={{ width: 200 }} alt={title}></img>
      </Link>
    </li>
  )
;

export default Thumbnail;