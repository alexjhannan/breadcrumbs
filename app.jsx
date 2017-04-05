import React, { Component, PropTypes } from 'react';
import { Route, Link } from 'react-router-dom';
import InviteContainer from './containers/InviteContainer';
import watchAuthentication from './firebase/watchAuthentication';

const Test = () => (
  <div>Heyo Bro</div>
);

const Navbar = () => (
  <div style={ { width: '100%', background: 'indianred', height: 100 } }>
    <Link to="/">Home</Link>
    <Link to="/test">Test</Link>
  </div>
);

class App extends Component {
  componentWillMount() {
    watchAuthentication();
  }

  render() {
    return (
      <div>
        <Navbar />
        <Route exact path="/" component={ InviteContainer } />
        <Route path="/test" component={ Test } />
      </div>
    );
  }
}

export default App;
