// import "react" from React;
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from '../components/Dashboard';
import Intro from '../components/Intro';

function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={Dashboard} exact />
          <Route path='/intro' component={Intro} ></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
