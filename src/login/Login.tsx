import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import { withAuth } from './../AuthContext';
import LoginForm from "./LoginForm";

export interface LoginAuthProps {
  isAuthorized: boolean,
  loginPath: string,
}
 
const LoginAuth: React.SFC<LoginAuthProps> = ({ 
  isAuthorized,
  loginPath,
  ...rest
 }) => {
  return ( 
    <Route
      {...rest}
      render={() =>
        isAuthorized ? (
          <Redirect to="/profile" />
        ) : (
          <LoginForm/>
        )
      }
    />
  );
}

const Login = withAuth(LoginAuth);

export default Login;