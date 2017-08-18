import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Contact from '../components/RepContact';
import Resume from '../components/Resume';
import Video from '../components/Video';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/resume' component={Resume} />
      <Route exact path='/video' component={Video} />
      <Route path='/video/:id' component={Video}/>
    </Switch>
  </main>
);

export default Main;
