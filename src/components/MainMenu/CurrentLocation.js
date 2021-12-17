import React, { useEffect, useState } from "react";
import NavButton from "../NavButton";
import Spinner from "../Spinner";
import styles from "./CurrentLocation.module.css"

const CurrentLocation = (props) => {
  const shouldWeFetchAPI = false;
  const [nearestLocation, setNearestLocation] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const reverseGeocode = async () => {
    setIsLoading(true);
    const lat = props.currentLocation.lat;
    const long = props.currentLocation.long;
    const apikey = "";
    const url = `https://api.tomtom.com/search/2/reverseGeocode/${lat}%2C${long}.json?key=${apikey}`;
    const res = await fetch(url);
    const data = await res.json();
    setNearestLocation(data.addresses[0].address.freeformAddress);
    setIsLoading(false);
  };

  useEffect(() => {
    if (shouldWeFetchAPI) {
      reverseGeocode();
    }
  }, [props.currentLocation]);

  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <div className={styles.location}>Current Location:</div>
        {isLoading ? (
          <Spinner></Spinner>
        ) : (
          <div style={{ margin: "5px", fontWeight: "bold" }}>
            {nearestLocation}
          </div>
        )}
      </div>
      <NavButton label="Refresh" onClick={props.getLocation}></NavButton>
    </div>
  );
};

export default CurrentLocation;
