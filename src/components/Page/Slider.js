import React from "react";
import styles from "./Slider.module.css";

const Slider = (props) => {
  const style3 = {
    width: "10%",
    fontSize: "12px",
  };

  return (
    <div className={styles.container}>
      <div>
        Distance from current location:
      </div>
      <input
        className={styles.slider}
        list="tickmarks"
        type="range"
        min="500"
        max="5000"
        step="500"
        value={props.radius}
        onInput={(e) => {
          props.onChange(e);
        }}
      ></input>
      <datalist id="tickmarks" className={styles.ticks}>
        <option value="500" label="500m" style={style3}></option>
        <option value="1000" label="1km" style={style3}></option>
        <option value="1500" label="1.5km" style={style3}></option>
        <option value="2000" label="2km" style={style3}></option>
        <option value="2500" label="2.5km" style={style3}></option>
        <option value="3000" label="3km" style={style3}></option>
        <option value="3500" label="3.5km" style={style3}></option>
        <option value="4000" label="4km" style={style3}></option>
        <option value="4500" label="4.5km" style={style3}></option>
        <option value="5000" label="5km" style={style3}></option>
      </datalist>
    </div>
  );
};

export default Slider;
