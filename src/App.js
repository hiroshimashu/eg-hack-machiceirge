import React, { Component } from 'react';
import Map from './components/map/map';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" style = {{ width: "100%", height: "100%"}}>
        <Map />
      </div>
    );
  }
}

export default App;
