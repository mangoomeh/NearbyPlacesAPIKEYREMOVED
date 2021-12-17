import React from "react";
import { useState } from "react";
import Header from "../Header/Header";
import Results from "./Results";
import Slider from "./Slider";

const Page = (props) => {
  const [radius, setRadius] = useState(500);
  const handleRangeInput = (event) => {
    setRadius(event.target.value);
  };
  let pageTitle = "Nearby ";
  let typeOfSearch;
  switch (props.page) {
    case "FOOD_PAGE":
      pageTitle += "Food Places";
      typeOfSearch = ["restaurant"];
      break;
    case "TRAIN_PAGE":
      pageTitle += "Subway Stations";
      typeOfSearch = ["subway_station"];
      break;
    case "TOURIST_PAGE":
      pageTitle += "Tourist Attractions";
      typeOfSearch = ["tourist_attraction"];
      break;
    case "LODGE_PAGE":
      pageTitle += "Lodging";
      typeOfSearch = ["lodging"];
      break;
    case "CINEMA_PAGE":
      pageTitle += "Movie Theatres";
      typeOfSearch = ["movie_theater"]
  }
  return (
    <>
      <Header
        label={pageTitle}
        page={props.page}
        setPage={props.setPage}
      ></Header>
      <div className="page">
        <Slider radius={radius} onChange={handleRangeInput}></Slider>
        <h1
          style={{
            margin: "55px 0 0 0",
            color: "white",
            textShadow: "1px 1px 5px black",
          }}
        >
          {pageTitle}
        </h1>
        <Results
          radius={radius}
          typeOfSearch={typeOfSearch}
          currentLocation={props.currentLocation}
        ></Results>
      </div>
    </>
  );
};

export default Page;
