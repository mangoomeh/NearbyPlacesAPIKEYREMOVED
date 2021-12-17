import React from "react";
import styles from "./Result.module.css"

const Result = (props) => {
  const currLat = props.currentLocation.lat;
  const currLng = props.currentLocation.long;
  const lat = props.data.geometry.location.lat();
  const lng = props.data.geometry.location.lng();
  const latDiff = Math.abs(currLat - lat);
  const lngDiff = Math.abs(currLng - lng);
  const latDist = 110.574 * latDiff;
  const lngDist = 111.32 * Math.cos((lat * Math.PI) / 180) * lngDiff;
  const dist = Math.round(Math.sqrt(latDist ** 2 + lngDist ** 2) * 100) / 100;

  return (
    <div className={styles.result}>
      {props.data.photos ? (
        <img
          src={props.data.photos[0].getUrl()}
          alt={props.data.name}
          className={styles.image}
        ></img>
      ) : (
        <div className={styles.image}>No Image</div>
      )}
      <div className={styles.resultInfo}>
        <div className={styles.title}>{props.data.name}</div>
        Status: {props.data.business_status} <br />
        Currently:{" "}
        {props.data.opening_hours ? props.data.opening_hours.open_now ? "Open" : "Close" : "-"}
        <br />
        Rating: {props.data.rating ? props.data.rating : "-"}
        <br />
        Number of Ratings:{" "}
        {props.data.user_ratings_total ? props.data.user_ratings_total : "-"}
        <br />
        Location: {props.data.vicinity} <br />
        Approx. Distance: {dist}km
      </div>
    </div>
  );
};

export default Result;
