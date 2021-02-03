
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Signin from './components/signin';
import Signup from './components/signup';
import React , {Fragment} from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from './components/search';
function App() {
  return (
    
    <Router>
      <Fragment>
        <Route exact path="/" component={Dashboard} />
        <Switch>
          <Route exact path="/login" component={Signin} />
          <Route exact path="/register" component={Signup} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
