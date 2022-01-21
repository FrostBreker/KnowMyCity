import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Home from '../../Pages/Home';
import NavBar from '../NavBar';

const index = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />

        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default index;