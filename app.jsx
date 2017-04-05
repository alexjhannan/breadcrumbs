import React, { PropTypes } from 'react';
import { Route, Link } from 'react-router-dom';
import InviteContainer from './containers/InviteContainer.jsx';

const Test = () => (
  <div>Heyo Bro</div>
);

const Navbar = () => (
  <div style={ { width: '100%', background: 'indianred', height: 100 } }>
    <Link to="/">Home</Link>
    <Link to="/test">Test</Link>
  </div>
);

const App = () => (
  <div>
    <Navbar />
    <Route exact path="/" component={ InviteContainer } />
    <Route path="/test" component={ Test } />
  </div>
);

export default App;
