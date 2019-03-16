import React, { Component } from "react";
import Map from "./components/map/map";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import User from "./components/user/user";
import Booking from "./components/booking/booking";
import axios from "axios";
import MyFancyComponent from "./components/map/map_mod";
import BottomNavigation from "./components/BottomNavigation";
import Setting from "./components/Setting/setting";
import "./App.css";

class App extends Component {
  state = {
    userInfo: [],
    placeInfo: [],
    bookings: [],
  };

  componentDidMount() {
    console.log(this.state);

    this.getBookings()
  }

  getUsers = async () => {
    try {
      const people = await axios.get("http://13.231.153.234:3000/people");
      console.log(people.data);
      this.setState({ userInfo: people.data });
      return people.data;
    } catch (error) {
      console.error(error);
    }
  };

  getPlaces = async () => {
    try {
      const places = await axios.get("http://13.231.153.234:3000/locations");
      console.log(places.data);
      this.setState({ placeInfo: places.data });
      return places.data;
    } catch (error) {
      console.error(error);
    }
  };

  getBookings = async () => {
    try {
      // TODO: Get from API
      const bookingIds = [1,25,55]

      const people = await axios.get("http://13.231.153.234:3000/people");
      const availabilities = await axios.get("http://13.231.153.234:3000/availabilities");

      const bookings = bookingIds.map(bookingId => {
        const availability = availabilities.data.find(x => x.id == bookingId)
        const person = people.data.find(x => x.id == availability.person_id)

        return {
          id: bookingId,
          availability,
          person,
        }
      })
      this.setState({ bookings })
    } catch (error) {
      console.error(error);
      return []
    }
  };  

  render() {
    return (
      <Router>
        <div className="App" style={{ width: "100%", height: "575px" }}>
          <Route
            path="/"
            exact
            render={props => (
              <MyFancyComponent
                {...props}
                getUsers={this.getUsers}
                getPlaces={this.getPlaces}
              />
            )}
          />
          <Route
            path="/booking" 
            render={props => (
              <Booking
                bookings={this.state.bookings}
              />
            )}
            />
          <Route path="/user" component={User} />
          <Route path="/setting" component={Setting} />
        </div>
        <BottomNavigation />
      </Router>
    );
  }
}

export default App;
