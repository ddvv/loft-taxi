import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import Map from "./Map";
import Profile from "./Profile";

class Dashboard extends Component {
  render() { 
    return ( 
      <Switch>
        <Route 
          path="/dashboard/profile" 
          component={Profile}
        ></Route>
        <Route 
          path="/dashboard/map"   
          component={Map}
        ></Route>
      </Switch>
    );
  }
}
 
export default Dashboard;