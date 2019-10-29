import React from 'react';

import LoginForm from "./LoginForm";

export interface LoginProps {}
 
export interface LoginState {}
 
class Login extends React.Component<LoginProps, LoginState> {
  state = {}
  render() {  
    return ( 
      <>
        <LoginForm/>
      </>
    );
  }
}
 
export default Login;