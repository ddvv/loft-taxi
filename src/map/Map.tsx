import React from 'react';
import MapBox from './MapBox';

export interface MapProps {}
 
export interface MapState {}
 
class Map extends React.Component<MapProps, MapState> {
  state = {};
  render() { 
    return ( 
      <> 
        <MapBox/>
      </>
    );
  }
}
 
export default Map;