import React from 'react';

export interface LoginProps {}
 
export interface LoginState {}
 
class Login extends React.Component<LoginProps, LoginState> {
  state = {}
  render() {  
    return ( 
      <>
        <h1>Логин</h1>
      </>
    );
  }
}
 
export default Login;