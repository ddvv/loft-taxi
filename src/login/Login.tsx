import React from 'react';
import LoginForm from "./LoginForm";

export interface LoginProps {
  setPath: (path: string) => void
}
 
const Login: React.SFC<LoginProps> = ({ setPath }) => {
  return ( <LoginForm setPath={setPath}/> );
}
 
export default Login;