import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { isLoginSelector } from '../../store/selectors';
import SignupForm from './SignupForm';

const mapStateToProps = state => {
  return {
    isLogin: isLoginSelector(state)
  };
};

const Signup = ({ isLogin }) => {
  if(isLogin) {
    return <Redirect path="/signup" to="/dashboard/map"></Redirect>;
  } else {
    return <SignupForm/>;
  }
}
 
export default connect(
  mapStateToProps,
  null
)(Signup);