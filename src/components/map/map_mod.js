import React from "react";
import { compose, withProps } from "recompose";
import { Link } from "react-router-dom";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import CheckReservation  from "./checkReservation";
import MapFirst from "../map/mapTop";
import MapSecond from "../map/mapSecond";


const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAAvHKzLnnwoenUn8EX9vQPU34-RiGT8gg&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `33.3%` }} />,
    containerElement: <div style={{ height: `33.3%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={10} defaultCenter={{ lat: 35.681, lng: 139.767125 }}>
    {props.placesInfo.length > 0 ? (
      props.placesInfo.map(place => {
        console.log(place);
        return (
          <Marker
            position={{
              lat: parseFloat(place.lat),
              lng: parseFloat(place.lng)
            }}
            onClick={props.onMarkerClick}
          />
        );
      })
    ) : (
      <div />
    )}
  </GoogleMap>
));

class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false,
    preference: "",
    usersInfo: [],
    placesInfo: [],
    openDialog: false
  };

  filterByPreference = (preference, place, users) => {
    // 1. Check users preference's input
      // ex). Ramen

  };

  filterByAvailableTime = time => {};

  async componentDidMount() {
    this.delayedShowMarker();
    const users = await this.props.getUsers();
    const places = await this.props.getPlaces();
    this.setState({
      usersInfo: users,
      placesInfo: places,
    });
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  };

  handleMarkerClick = () => {
    console.log("marker is clicked");
    if(!this.state.openDialog) {
      this.setState({
        openDialog: true
      })
    } else {
      this.setState({
        openDialog: false
      })
    }


    //this.setState({ isMarkerShown: false });
    //this.delayedShowMarker();
  };

  render() {
    return (
      <div style = {{ width: "100%", height: "1725px"}}>
        <MapFirst />
        <MapSecond />
        <MyMapComponent
          usersInfo={this.state.usersInfo}
          placesInfo={this.state.placesInfo}
          isMarkerShown={this.state.isMarkerShown}
          onMarkerClick={this.handleMarkerClick}
        />
        {this.state.openDialog &&<CheckReservation />}
      </div>
    );
  }
}

export default MyFancyComponent;
