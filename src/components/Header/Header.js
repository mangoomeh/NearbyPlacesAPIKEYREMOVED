import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import marker from "./marker.png";

const Header = (props) => {
  const [scrolly, setScrolly] = useState(0);
  const scrollHandler = () => {
    setScrolly(window.scrollY);
  }

  window.addEventListener("scroll", scrollHandler)
  

  useEffect(() => {
    return;
  }, [scrolly]);

  const handleClick = () => {
    if (!props.page) {
      return;
    }
    props.setPage("");
  };
  return (
    <div className={scrolly === 0 ? styles.barOnTop : styles.barOnTheMove}>
      <div className={styles.itemContainer}>
        <div className={styles.label} onClick={handleClick}>
          NEARBY PLACES
        </div>
        <img src={marker} className={styles.logo}></img>
        <div className={scrolly === 0 ? styles.note : styles.noteOnTheMove}>powered by GOOGLE JAVASCRIPT PLACES LIBRARY</div>
      </div>
    </div>
  );
};

export default Header;
