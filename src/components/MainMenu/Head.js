import React from "react";
import CurrentLocation from "./CurrentLocation";

const Head = (props) => {
  return (
    <div
      style={{
        width: "80%",
        height: "200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <CurrentLocation
        getLocation={props.getLocation}
        currentLocation={props.currentLocation}
      ></CurrentLocation>
      <h1 style={{color: "white", textShadow: "1px 1px 6px black"}}>Find Nearby Places</h1>
    </div>
  );
};

export default Head;
