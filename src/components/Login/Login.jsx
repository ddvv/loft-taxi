import React from 'react';

class Login extends React.Component {
    render() {
        return(
            <>
                <h1>Войти</h1>
                <button onClick={this.props.setRountFun} >Войти</button>
            </>
        )
    }
}

export default Login;