import React from "react";
import styles from "./NavButton.module.css"

const NavButton = (props) => {
  return (
    <div className={styles.nav} onClick={props.onClick}>
      {props.label}
    </div>
  );
};

export default NavButton;
