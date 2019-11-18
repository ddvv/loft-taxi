import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { isLoginSelector } from '../../store/selectors';
import LoginForm from "./LoginForm";

const mapStateToProps = state => {
  return {
    isLogin: isLoginSelector(state)
  };
};

const Login = ({ isLogin }) => {
  if(isLogin) {
    return <Redirect path="/login" to="/dashboard/map"></Redirect>;
  } else {
    return <LoginForm/>;
  }
}

export default connect(
  mapStateToProps,
  null
)(Login);