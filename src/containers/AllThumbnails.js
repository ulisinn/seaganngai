import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Video from '../components/Video';
import Thumbnails from '../components/Thumbnails';

// The Thumbnails component matches one of two different routes
// depending on the full pathname
const AllThumbnails = () => (
  <div>
    <p>thumbs</p>
    <Switch>
      <Route path='/' component={Thumbnails} />
      <Route path='/videos/:id' component={Video} />
    </Switch>
  </div>
);


export default AllThumbnails;
