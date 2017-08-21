import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index';

import Thumbnail from '../components/Thumbnail';

/*
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
*/


class Thumbnails extends Component {
  
  render() {
    const { portfolio } = this.props;
    const thumbnails = this.getThumbnails(portfolio);
    console.log('portfolio', portfolio);
    return <div>
      <ul>
        {thumbnails}
      </ul>
    </div>;
  }
  
  getThumbnails(thumbnails) {
    return thumbnails.map((d, i) => (
      
      <Thumbnail key={i} index={i} title={d.title} imageSrc={d.thumbnail} state={d}></Thumbnail>
    ))
      ;
  }
};


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
)(Thumbnails);