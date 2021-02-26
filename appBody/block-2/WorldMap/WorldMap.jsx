import React from "react";
import style from "./WorldMap.module.css";
import MarkerComponent from "../../components/MarkerComponent/MarkerComponent";

const WorldMap = () => {
  return (
    <div className={style.container}>
      <img src={"/images/Map.png"} alt="map" />
      <MarkerComponent position={{ left: "2%", top: "50%" }} />
      <MarkerComponent position={{ left: "10%", top: "38%" }} />
      <MarkerComponent position={{ left: "26%", top: "48%" }} />
      <MarkerComponent position={{ left: "50%", top: "75%" }} />
      <MarkerComponent position={{ left: "66%", top: "53%" }} />
      <MarkerComponent position={{ left: "87%", top: "73%" }} />
    </div>
  );
};

export default WorldMap;
