import React, { Component } from 'react';
import mapboxgl from "mapbox-gl";
import { connect } from 'react-redux';
import { routeSelector } from "./../../../store/selectors";

mapboxgl.accessToken = 'pk.eyJ1IjoiZGR2diIsImEiOiJjazJjeGp1djYwYTk4M29xYjZzNTdqcDJvIn0.3AlKVyy5UkxkH_jY_QLTIQ';

const mapStateToProps = state => {
  return {
    routCoordinates: routeSelector(state),
  };
};

class MapBox extends Component {
  constructor(props) {
    super(props);
    this.mapContainer = React.createRef();
    this.state = {
      lat: 59.939095, 
      lng: 30.315868,
      zoom: 12,
    };
  }

  map = null;

  componentDidMount() {
    const { lng, lat, zoom } = this.state;
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/ddvv/ck2dcj6y418wr1fo4tomxiips',
      center: [lng, lat],
      zoom: zoom
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      const { routCoordinates } = this.props;

      if (this.map.getLayer("route")) {
        this.map.removeLayer("route");
        this.map.removeSource("route");
      }

      if (routCoordinates && routCoordinates.length > 0) {
        this.renderRoute();
      }
    }
  }


  renderRoute = () => {
    const { routCoordinates } = this.props;

    console.log(routCoordinates);

    // this.map.on('load', () => {
    this.map.addLayer({
      id: "route",
      type: "line",
      source: {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {
            color: "#ffc617",
          },
          geometry: {
            type: "LineString",
            coordinates: routCoordinates,
          },
        },
      },
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-width": 6,
        "line-color": "#ffc617",
      },
    });
    // })    

    this.map.flyTo({
      center: routCoordinates[0],
      zoom: 12,
    });
  };

  render() { 
    const style = {
      width: '100%',
      height: '100vh',
    };
    return ( <div className="mapContainer" style={style} ref={el => this.mapContainer = el}></div> );
  }
}
 
export default connect(
  mapStateToProps,
  null
)(MapBox);