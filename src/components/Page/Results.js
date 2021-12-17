import React, { useEffect, useState } from "react";
import Result from "./Result";
import styles from "./Results.module.css";

const Results = (props) => {
  const shouldWeFetchAPI = false;
  const google = window.google;
  const [result, setResult] = useState([]);
  // callback function for fetchResults google map api
  const handleSearch = (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      setResult(results);
    }
  };

  const fetchResults = (lat, long) => {
    const loc = new google.maps.LatLng(lat, long);
    const service = new google.maps.places.PlacesService(
      document.querySelector("#map")
    );
    const request = {
      location: loc,
      radius: props.radius,
      type: props.typeOfSearch,
    };
    service.nearbySearch(request, handleSearch);
  };

  const results = result.map((elem) => {
    return (
      <Result currentLocation={props.currentLocation} data={elem}></Result>
    );
  });

  useEffect(() => {
    if (shouldWeFetchAPI) {
      fetchResults(props.currentLocation.lat, props.currentLocation.long);
      console.log("fetched");
    }
  }, [props.radius]);

  return (
    <>
      <div className={styles.resultContainer}>{results}</div>
    </>
  );
};

export default Results;
