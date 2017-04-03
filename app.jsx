import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import InviteContainer from './containers/InviteContainer.jsx';
import store from './store/store';

const app = (
  <Provider store={store}>
    <InviteContainer />
  </Provider>
);

ReactDOM.render(app, document.getElementById('appContainer'));
