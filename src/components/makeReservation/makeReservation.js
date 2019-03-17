import React, { Component } from "react";
import Avatar from '@material-ui/core/Avatar';
import profile from "../../static/people1.png";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";


export default class MakeReservation extends Component {
  render() {
    return (
      <div
        className="make-reserve-wrapper"
        style={{ height: "100%", width: "100%", backgroundColor: "#FFA71A", position: "relative" }}
      >
        <div class="make-reserve-main-wrapper" style = {{ height:"90%", width: "90%", backgroundColor: "#ffffff", margin: "auto", position: "absolute", top: "5%", left: "5%"}}>
          <div
            className="make-reserve-title"
            style={{ color: "#FFA71A", fontFamily: "Hiragino Sans" }}
          >
            予約を確認する
          </div>
          <div className = "profile-pic-wrapper" style = {{ display: "flex", justifyContent: "space-around", marginTop: "15px", width: "80%", borderBottom: "1px solid", marginLeft: "auto", marginRight: "auto", paddingBottom: "15px"}}>
              <Avatar src = { profile } style = {{width: "129px", height: "129px"}}/>
              <div className = "profile-text">
                  <div className = "name" style = {{textAlign:"center"}}>
                      藤原あい
                  </div>
                  <div className = "area-title" style = {{textAlign:"center"}}>
                     カバーエリア
                  </div>
                  <div className = "area" style = {{textAlign:"center"}}>
                     東京都港区
                  </div>
              </div>
          </div>
          <div className = "reservation-detail" style = {{width: "80%", marginTop: "15px", marginLeft: "auto", marginRight: "auto"}}>
              <div className= "title" style = {{textAlign: "left"}}>
                  予約詳細
              </div>
              <div className = "genre" style = {{textAlign: "left"}}>
                  ジャンル: ラーメン
              </div>
              <div className = "date" style = {{textAlign: "left"}}>
                  日時: 4月30日
              </div>
              <div className = "place" style = {{textAlign: "left"}}>
                  場所: 港区
              </div>
          </div>
          <div className = "caution-wrapper" style = {{width: "100%", backgroundColor: "#EEEEEE"}}>
               <div className = "caution-title" style = {{textAlign: "left", marginLeft: "10%", marginTop: "10px"}}>
                   当日の注意事項
               </div>
               <div className = "caution" style = {{textAlign: "left", marginLeft: "10%", marginTop: "10px", marginBottom: "10px"}}>
                   ご予約確定後にメールでお送りしますので、<br/>
                   事前に確認ください
               </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", width: "80%", marginLeft: "auto", marginRight: "auto"}}>
          <div>¥1200</div>
              <Link to = "/booking/:booking_id/finished">
                <Button onClick={this.handleClose} color="primary">
                  予約する
                </Button>
              </Link>
          </div>
        </div>
      </div>
    );
  }
}
