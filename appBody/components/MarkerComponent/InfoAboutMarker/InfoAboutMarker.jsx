import React from "react";
import style from "./InfoAboutMarker.module.css";
import { motion } from "framer-motion";
import {
  InfoSurfIcon,
  InfoWaterIcon,
  InfoWindIcon,
} from "../../../icons/InfoIcons";

const InfoAboutMarker = ({ showInfo }) => {
  const container = {
    showContainer: {
      opacity: 1,
      transform: "translateY(0%) scale(1)",
    },
    hiddenContainer: {
      opacity: 0,
      transform: "translateY(50%) scale(0)",
    },
  };

  return (
    <div className={style.wrapper}>
      <motion.div
        className={style.container}
        variants={container}
        initial={"hiddenContainer"}
        animate={showInfo ? "showContainer" : "hiddenContainer"}
        transition={{ type: "spring", duration: 0.7 }}
        exit={"hiddenContainer"}
      >
        {/* Title*/}
        <h1>AIRLIE BEACH</h1>
        <div className={style.line} />

        {/*Subtitle*/}
        <h2>Australia</h2>

        {/*Weather*/}
        <div className={style.info}>
          {/*Wave*/}
          <div className={style.infoItem}>
            <InfoSurfIcon />
            <p className={style.infoItem__value}>9 - 13</p>
            <p className={style.infoItem__name}>SURF (FT)</p>
          </div>
          {/*Humidity*/}
          <div className={style.infoItem}>
            <InfoWaterIcon />
            <p className={style.infoItem__value}>+2.3</p>
            <p className={style.infoItem__name}>TIDE (FT)</p>
          </div>
          {/*Wind*/}
          <div className={style.infoItem}>
            <InfoWindIcon />
            <p className={style.infoItem__value}>4 SE</p>
            <p className={style.infoItem__name}>WIND (KTS)</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default InfoAboutMarker;
