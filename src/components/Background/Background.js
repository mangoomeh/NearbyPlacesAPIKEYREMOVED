import React from "react";
import styles from "./Background.module.css";
import foodImage from "./food.jpg";
import trainImage from "./train.jpg";
import tourImage from "./travel.jpg";
import lakeLouise from "./Lake-Louise.jpg";

const Background = (props) => {
  let image;
  switch (props.page) {
    case "FOOD_PAGE":
      image = foodImage;
      break;
    case "TRAIN_PAGE":
      image = trainImage;
      break;
    case "TOURIST_PAGE":
      image = tourImage;
      break;
    default:
      image = lakeLouise;
  }
  return (
    <div className={styles.background} style={{ backgroundImage: lakeLouise }}>
      <img className={styles.image} src={image}></img>
    </div>
  );
};

export default Background;
 