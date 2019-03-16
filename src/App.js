import React, { Component } from "react";
import Map from "./components/map/map";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import User from "./components/user/user";
import BottomNavigation from "./components/BottomNavigation";
import "./App.css";

class App extends Component {


  render() {
    return (
      <Router>
        <div className="App" style={{ width: "100%", height:'575px' }}>
            <Route  path="/" exact component={ Map } />
            <Route  path="/user" component = { User } />
        </div> 
        <BottomNavigation />
      </Router>
    );
  }
}

export default App;
