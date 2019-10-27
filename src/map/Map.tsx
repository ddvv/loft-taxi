import React from 'react';

export interface MapProps {}
 
export interface MapState {}
 
class Map extends React.Component<MapProps, MapState> {
  state = {};
  render() { 
    return ( 
      <>
        <h1>Карта</h1> 
      </>
    );
  }
}
 
export default Map;