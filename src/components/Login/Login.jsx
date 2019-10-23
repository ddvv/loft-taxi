import React from 'react';

class Login extends React.Component {
  render() {
    return(
      <>
        <h1>Войти</h1>
        {/* <button onClick={() => this.props.setRoutFun('/profile')} >Войти</button> */}
        <a href='#/profile' >Войти</a>
      </>
    )
  }
}

export default Login;