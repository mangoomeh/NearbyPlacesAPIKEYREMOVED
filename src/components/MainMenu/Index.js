import React from "react";
import Button from "./Button";
import foodImage from "./images/Food.png";
import subwayImage from "./images/Subway.png";
import touristImage from "./images/Camera.png";
import lodgingImage from "./images/Lodging.png";
import cinemaImage from "./images/Cinema.png"
import Header from "../Header/Header";
import Head from "./Head";

const MainMenu = (props) => {
  // button container styles
  const buttonContainerStyles = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    margin: "50px 0 0 0",
  };

  return (
    <div className="page">
      <Header></Header>
      <Head
        getLocation={props.getLocation}
        currentLocation={props.currentLocation}
      ></Head>
      <div style={buttonContainerStyles}>
        <Button
          image={foodImage}
          label="Food"
          onClick={() => props.setPage("FOOD_PAGE")}
        ></Button>
        <Button
          image={subwayImage}
          label="Train Station"
          onClick={() => props.setPage("TRAIN_PAGE")}
        ></Button>
        <Button
          image={touristImage}
          label="Tourist Spot"
          onClick={() => props.setPage("TOURIST_PAGE")}
        ></Button>
        <Button
          image={lodgingImage}
          label="Lodging"
          onClick={() => props.setPage("LODGE_PAGE")}
        ></Button>
        <Button
          image={cinemaImage}
          label="Cinema"
          onClick={() => props.setPage("CINEMA_PAGE")}
        ></Button>
      </div>
    </div>
  );
};

export default MainMenu;
