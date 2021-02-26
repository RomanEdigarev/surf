import React from "react";
import style from "./BlockTwo.module.css";
import { Marker } from "../components/MarkerComponent/Marker";
import WorldMap from "./WorldMap/WorldMap";

const BlockTwo = () => {
  return (
    <div className={style.container}>
      <h1 className={style.mainTitle}>SURF</h1>
      <div className={style.subtitle}>
        <div className={style.line} />
        <span>CURRENT LOCATION</span>
        <p>
          CALIFORNIA <span>|</span> USA
        </p>
      </div>
      <div className={style.coordinates}>34.0501 N -118.2446 W</div>
      <WorldMap />
    </div>
  );
};

export default BlockTwo;
