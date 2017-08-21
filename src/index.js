import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


import { Provider } from 'react-redux';
import store, { REMOTE_LOAD_SUCCESS } from './store';

import App from './App';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById('root');

/*render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));*/

const listenToStateUnsubscribe = store.subscribe(_initialLoad);

function _initialLoad() {
  const state = store.getState().loadRemoteContent;
  
  if (state.remoteData === REMOTE_LOAD_SUCCESS) {
    listenToStateUnsubscribe();
    
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
      rootElement,
    );
  }
}

registerServiceWorker();
