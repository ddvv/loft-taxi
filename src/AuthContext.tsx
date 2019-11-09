import React, { Component } from 'react';

const {
  Provider: AuthProvider,
  Consumer: AuthConsumer,
} = React.createContext({ 
  isAuthorized: false,
  login: () => {},
  logout: () => {},
  loginPath: '/login',
});

function withAuth(WrappedComponent:any) {
  return class AuthHOC extends Component {
    render() {
      const { ...rest } = this.props;
      return (
        <AuthConsumer>
          {contextProps => (
            <WrappedComponent {...contextProps} {...rest} />
          )}
        </AuthConsumer>
      );
    }
  };
}

export { AuthProvider, withAuth };