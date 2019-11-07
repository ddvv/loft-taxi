import React, { useContext } from 'react';
import { AuthContext } from "../shared/AuthContext";
import MapBox from './MapBox';
 
const Map = () => {
  const { isAuthorized } = useContext(AuthContext);
  return ( 
    <>
      {isAuthorized ? <MapBox/> : <h1>Сначала авторизуйтесь</h1>}
    </>
  );
}
 
export default Map;