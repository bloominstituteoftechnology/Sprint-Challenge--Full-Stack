import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';

import App from './App';
import reducers from './reducers';
// import registerServiceWorker from './registerServiceWorker';
import './index.css';

const createStoreFromMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreFromMiddleware(reducers);

ReactDOM.render(
  <Provider store={}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();
