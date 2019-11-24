import React, { Component } from "react";
import { actions } from './../../store/duck';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Map from "./Map";
import Profile from "./Profile";

const mapDispatchToProps = dispatch => {
  return {
    getCard: () => dispatch(actions.getCard())
  };
};

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      cardNumber: '',
      expiryDate: '',
      cardName: '',
      cvc: '',
    };
  }
  
  componentDidMount() {
    const { getCard } = this.props;
    getCard();
  }

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
 
export default connect(
  null, 
  mapDispatchToProps
)(Dashboard);