import React, { Component } from 'react';
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = 'pk.eyJ1IjoiZGR2diIsImEiOiJjazJjeGp1djYwYTk4M29xYjZzNTdqcDJvIn0.3AlKVyy5UkxkH_jY_QLTIQ';

class MapBox extends Component {
  constructor(props) {
    super(props);
    this.mapContainer = React.createRef();
    this.state = {
      lat: 56.326797, 
      lng: 44.006516,
      zoom: 11,
    };
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;

    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/ddvv/ck2dcj6y418wr1fo4tomxiips',
      center: [lng, lat],
      zoom
    });
  }

  render() { 
    const style = {
      width: '100%',
      height: '100vh',
    };
    return ( <div style={style} ref={this.mapContainer}></div> );
  }
}
 
export default MapBox;