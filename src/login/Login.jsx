import React, { Component } from 'react';

import LoginForm from "./LoginForm";

class Login extends Component {
  setPath = this.props.setPath;

  render() {  
    return ( 
      <LoginForm setPath={this.setPath}/>
    );
  }
}
 
export default Login;