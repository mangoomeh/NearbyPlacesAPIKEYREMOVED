import React from 'react';
import styles from "./Button.module.css"

const Button = (props) => {

  const imgStyles = {
    height: "80%",
    objectFit: "cover"
  }
  return (
    <div onClick={props.onClick} className={styles.button}>
      {props.image && <img style={imgStyles} src={props.image} alt="none"></img>}
      <div>{props.label}</div>
    </div>
  );
};

export default Button;