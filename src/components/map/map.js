import React from "react"
import ReactGoogleMapLoader from "react-google-maps-loader"
import ReactGoogleMap from "react-google-map"

const bnCoord = {
  lat: 44.597923,
  lng: 0.873799,
}

const Map = () => (
    <ReactGoogleMapLoader
      params={{
        key: "AIzaSyAAvHKzLnnwoenUn8EX9vQPU34-RiGT8gg",
      }}
      style={{height: "500px"}}
      render={googleMaps => {
        return (
          googleMaps && (
            <ReactGoogleMap
              googleMaps={googleMaps}
              coordinates={[
                {
                  title: "Bosc Nègre",
                  position: bnCoord,
                },
              ]}
              center={bnCoord}
              zoom={8}
            />
          )
        )
      }}
    />
)

export default Map