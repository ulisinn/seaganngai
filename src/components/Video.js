import React from 'react';
import { Link, } from 'react-router-dom';

const Video = (props) => (
    <div>
      <video src={props.location.state.video} poster={props.location.state.thumbnail}
             controls></video>
      <p>ID: {parseInt(props.match.params.id, 10)}</p>
      <p>Title: {props.location.state.title}</p>
      <p>Director: {props.location.state.director}</p>
      <p>Writer: {props.location.state.writer}</p>
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
