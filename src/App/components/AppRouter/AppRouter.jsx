import React, { Component } from 'react';
import { withRouter, Redirect, Switch, Route } from 'react-router-dom';
import Dashboard from './../../containers/Dashboard';
import Header from './../../containers/Dashboard/Shared/Header';

class AppRouter extends Component {
  render() { 
    return (
      <>
        <Header></Header>
        <Switch>
          <Route 
            path="/dashboard" 
            component={Dashboard}
          ></Route>
          <Redirect 
            path="/dashboard/*" 
            to="/dashboard/map"
          ></Redirect>
        </Switch>
      </> 
    );
  }
}
 
export default withRouter(AppRouter);

