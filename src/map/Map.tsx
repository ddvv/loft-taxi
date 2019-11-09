import React from 'react';
import {
  Redirect,
} from 'react-router-dom';
import { withAuth } from './../AuthContext';
import MapBox from './MapBox';
 
export interface MapAuthProps {
  isAuthorized: boolean,
  loginPath: string,
}
 
const MapAuth: React.SFC<MapAuthProps> = ({ 
    isAuthorized,
    loginPath, 
  }) => {
  return ( 
    <>
      {isAuthorized ? <MapBox/> : <Redirect to={loginPath} />}
    </>
  );
}

const Map = withAuth(MapAuth);
 
export default Map;