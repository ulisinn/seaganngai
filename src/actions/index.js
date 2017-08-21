import axios from 'axios';

const REMOTE_LOAD_PENDING = 'REMOTE_LOAD_PENDING';
const REMOTE_LOAD_SUCCESS = 'REMOTE_LOAD_SUCCESS';
const REMOTE_LOAD_ERROR = 'REMOTE_LOAD_ERROR';
// const PREPARE_DATA = 'PREPARE_DATA';

export const INIT_PORTFOLIO = 'INIT_PORTFOLIO';

// REMOTE MESSAGES

export function remoteLoadPending() {
  return {
    type: REMOTE_LOAD_PENDING,
  };
}

export function remoteLoadError() {
  return {
    type: REMOTE_LOAD_ERROR,
  };
}

export function remoteLoadSuccess(data) {
  return {
    type: REMOTE_LOAD_SUCCESS,
    payload: {
      data,
    },
  };
}

// PORTFOLIO MESSAGES

export function initPortfolio(data) {
  
  return {
    type: INIT_PORTFOLIO,
    payload: {
      data,
    },
  };
}

export function getRemoteData(url) {
  //console.log('getRemoteData url', url);
  return (dispatch) => {
    dispatch(remoteLoadPending());
    axios.get(url)
      .then((response) => {
        return response.data;
      })
      .then((items) => {
        console.log('getRemoteData THEN url', items.portfolio);
        const data = items.portfolio;
        return dispatch(remoteLoadSuccess(data));
      })
      .catch(() => {
        dispatch(remoteLoadError());
      });
  };
}