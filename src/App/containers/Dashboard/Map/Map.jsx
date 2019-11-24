import React from 'react';
// import { Redirect } from './node_modules/react-router-dom';
import MapBox from './MapBox';
import RouteForm from './RouteForm';

const Map = () => {
  return ( 
    <>
      <RouteForm/>
      <MapBox/>
      
    </>    
  );
}
 
export default Map;