// react imports
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
// redux imports
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
// redux middleware & reducer imports
import thunk from 'redux-thunk';
import { createLogger } from "redux-logger";
import rootReducer from '~/reducers/root';
// react-router imports
import { BrowserRouter as Router, Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';

import App from './App';

const history = createHistory();
const logger = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);

const Root = () => (
  <Provider store={ store }>
    <Router history={ history }>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(Root(), document.getElementById('appContainer'));
