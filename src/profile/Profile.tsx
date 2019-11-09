import React, { useContext } from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';
// import { AuthContext } from "../shared/AuthContext";
import { withAuth } from './../AuthContext';

export interface ProfileProps {
  component: any,
  isAuthorized: boolean,
  loginPath: string,
}
 
const Profile: React.SFC<ProfileProps> = ({
  component: RouteComponent,
  isAuthorized,
  loginPath,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={() =>
        isAuthorized ? (
          <h1>Профиль</h1>
        ) : (
          <Redirect to={loginPath} />
        )
      }
    />
  );
}

const newProfile = withAuth(Profile);
 
export default newProfile;