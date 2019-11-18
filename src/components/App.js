import React from 'react';
import {compose} from 'recompose';
import {withFirebase} from '../firebase';
import {connect} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import {withAuthentication} from '../session';
import * as ROUTER from '../constants/routes';
import Navigation from './shared/Navigation';
import LandingPage from './Landing';
class App extends React.Component {
  render() {
    return (
      <Router>
        <Navigation/>
        <Route exact path={ROUTER.LANDING} component={LandingPage}/>
      </Router>
    )
  }

}

export default App;
