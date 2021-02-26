import React from "react";
import { AnimatePresence, useCycle } from "framer-motion";
import style from "./MarkerComponent.module.css";
import InfoAboutMarker from "./InfoAboutMarker/InfoAboutMarker";
import { Marker } from "./Marker";

const MarkerComponent = ({ position }) => {
  const [showInfo, toggleShowInfo] = useCycle(false, true);

  return (
    <div className={style.container} style={{ ...position }}>
      <AnimatePresence>
        {showInfo && <InfoAboutMarker showInfo={showInfo} />}
      </AnimatePresence>
      <Marker showInfo={showInfo} toggleShowInfo={toggleShowInfo} />
    </div>
  );
};

export default MarkerComponent;
