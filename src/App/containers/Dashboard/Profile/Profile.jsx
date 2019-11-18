import React, { useContext } from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';

const ProfileProps = ({
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
 
export default ProfileProps;