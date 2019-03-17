import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Calender from "../../static/calendar.png";

class MapSecond extends Component {
  state = {};

  render() {
    return (
      <div className="map-second-wrapper" style = {{ width: "100%", height: "33.3%", backgroundColor: "#FFA71A", paddingTop: "125px" }}>
        <div className="what-wrapper" style = {{width: "90%", marginLeft: "auto", marginRight: "auto"}}>
          <div className="what-title" style = {{color: "#ffffff", textAlign: "left"}}>何を食べたいですか？</div>
          <TextField
            id="outlined-search"
            label="場所を入力する"
            type="search"
            margin="normal"
            variant="outlined"
            fullWidth
          />
        </div>
        <div className = "when-wrapper">
            <div className="when-title" style = {{width: "90%", marginLeft: "auto", marginRight: "auto", color: "#ffffff", textAlign: "left"}}>いつですか？</div>
            <div className= "when" style = {{width: "90%", marginLeft: "auto", marginRight: "auto", color: "#ffffff", textAlign: "left"}}>
                <img src = {Calender} style = {{width: "100%", marginTop: "10px"}} alt = "calender" />
            </div>
        </div>
      </div>
    );
  }
}

export default MapSecond;
