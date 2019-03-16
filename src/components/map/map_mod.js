import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAAvHKzLnnwoenUn8EX9vQPU34-RiGT8gg&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
    locations: [
      {
        name: "Shibuya",
        lat: -34.397,
        lng: 150.644,
        radius: 2.0
      },
      {
        name: "Shijuku",
        lat: -34.397,
        lng: 152.644,
        radius: 2.0
      }
    ]
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    {props.isMarkerShown &&
      props.locations.map(location => {
        return (
          <Marker
            position={{lat:location.lat, lng: location.lng}}
            onClick={props.onMarkerClick}
          />
        );
      })}
  </GoogleMap>
));

class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false
  };

  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  };

  handleMarkerClick = () => {
    console.log("marker is clicked");  
    //this.setState({ isMarkerShown: false });
    //this.delayedShowMarker();
  };

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    );
  }
}

export default MyFancyComponent;
