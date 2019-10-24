import React from 'react';

import LoginForm from '../LoginForm/LoginForm';

class Login extends React.Component {
  render() {
    return(
      <>
        <h1>Логин</h1>
        <LoginForm/>
      </>
    )
  }
}

export default Login;