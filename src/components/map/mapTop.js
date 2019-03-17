import React from "react";
import DownArrow from "../../static/down_arrow.svg";
import UpperLeftImage from "../../static/top_1.png";
import UpperRightImage from "../../static/top_2.png";
import bottomLeftImage from "../../static/top_3.png";
import bottomRightImage from "../../static/top_4.png";

const MapFirst = () => {
  return (
    <div
      className="map-first-wrapper"
      style={{
        height: "33.3%",
        width: "100%",
        fontWeight: "lighter"
      }}
    >
      <div
        className="map-first-img-upper-wrapper"
        style={{ width: "100%", display: "flex" }}
      >
        <div
          className="map-first-img-upper-left-wrapper"
          style={{ width: "50%" }}
        >
          <img
            className="map-first-img-upper-left"
            src={UpperLeftImage}
            alt="map-first-img-upper-left"
            style={{ width: "100%" }}
          />
        </div>
        <div
          className="map-first-img-upper-right-wrapper"
          style={{ width: "50%" }}
        >
          <img
            className="map-first-img-upper-right"
            src={UpperRightImage}
            alt="map-first-img-upper-right"
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <div
        className="map-catch-wrapper"
        style={{
          fontFamily: "avenir",
          fontSize: 60,
          color: "white",
          fontWeight: "lighter",
          margin: [40,0,20]
        }}
      >
        <div style = {{ lineHeight: "60px"}}>MACHI</div>
        <div style = {{ lineHeight: "60px"}}>CEIRGE</div>
      </div>
      <div
        className="map-catch-sub-wrapper"
        style={{ fontFamily: "Hiragino Kaku Gothic ProN", color: "white" }}
      >
        旅先の美味しいを、
        <br />
        現地の人に案内してもらおう
      </div>
      <div
        className="go-to-second-wrapper"
        style={{ width: "100%", color: "#FFA71A", margin: [40, 0] }}
      >
        <div
          style={{
            fontFamily: "Hiragino Kaku Gothic ProN",
            color: "white",
            marginTop: "15px"
          }}
        >
          条件を選択する
        </div>
        <div style={{ width: "14px", marginLeft: "auto", marginRight: "auto" }}>
          <img src={DownArrow} style={{ width: "100%" }} alt="down-arrow" />
        </div>
      </div>
      <div className="map-first-img-bottom-wrapper" style= {{ display: "flex"}}>
        <div
          className="map-first-img-upper-left-wrapper"
          style={{ width: "50%" }}
        >
          <img
            className="map-first-img-upper-left"
            src={bottomLeftImage}
            alt="map-first-img-upper-left"
            style={{ width: "100%" }}
          />
        </div>
        <div
          className="map-first-img-upper-right-wrapper"
          style={{ width: "50%" }}
        >
          <img
            className="map-first-img-upper-right"
            src={bottomRightImage}
            alt="map-first-img-upper-right"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default MapFirst;
