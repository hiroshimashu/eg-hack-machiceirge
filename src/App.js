import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import User from "./components/user/user";
import Booking from "./components/booking/booking";
import axios from "axios";
import MyFancyComponent from "./components/map/map_mod";
import BottomNavigation from "./components/BottomNavigation";
import Setting from "./components/Setting/setting";
import Filtered from "./components/filtered/filtered";
import MakeReservation from "./components/makeReservation/makeReservation";

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

  getAvailability = async(availability_id) => {
    return (await axios.get("http://13.231.153.234:3000/availabilities/" + availability_id)).data;
  }

  getBookings = async () => {
    try {
      const fullBookings = (await axios.get("http://13.231.153.234:3000/bookings?customer_id=1")).data;
      const people = (await axios.get("http://13.231.153.234:3000/people")).data;

      const bookings = await Promise.all(fullBookings.map(async (b) => {
        const availability = await this.getAvailability(b.availability_id)
        const person = people.find(x => x.id == b.person_id)

        // console.log("__________")
        // console.log(JSON.stringify(people))
        // console.log(JSON.stringify(availability))
        // console.log(JSON.stringify(person))

        return {
          id: b.id,
          availability,
          person,
        }
      }))
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
          <Route path = "/filterd" 
             render={props => (
              <Filtered
                {...props}
                getUsers={this.getUsers}
                getPlaces={this.getPlaces}
              />
            )} />
           <Route path = "/makeReservation" component = {MakeReservation} />
        </div>
        <BottomNavigation />
      </Router>
    );
  }
}

export default App;
