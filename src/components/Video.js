import React, { Component } from 'react';
import { Link, } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index';

import Logo from './Logo';

class Video extends Component {
  
  render() {
    const { portfolio, location } = this.props;
    const queryString = require('query-string');
    const id = queryString.parse(location.search).id;
    const project = portfolio[parseInt(queryString.parse(this.props.location.search).id, 10)];

    return <div>
      <Logo white='#fff' blue='#6ccef5' black='#000' />
      {this.getProject(id, project)}
      <nav>
        <ul>
          <li>< Link to='/contact'>Contact</Link></li>
          <li><Link to='/resume'>Resume</Link></li>
          <li><Link to='/'>Home</Link></li>
        </ul>
      </nav>
    </div>;
  }
  
  getProject(id, project) {
    return (id && project) ?
      (
        <div>
          <video src={project.video} poster={project.thumbnail}
                 controls style={{ width: '100%', overflow: 'hidden' }}></video>
          <p>ID: {project.id}</p>
          <p>Title: {project.title}</p>
          <p>Director: {project.director}</p>
          <p>Writer: {project.writer}</p>
        </div>)
      :
      (<p>no valid id found</p>);
  }
}


const mapStateToProps = (state) => {
  const portfolio = state.loadRemoteContent.data;
  console.log('mapStateToProps', portfolio);
  return {
    portfolio,
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Video);
;