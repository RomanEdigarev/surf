import React from "react";
import style from "./Main.module.css";
import {
  ToLeftArrow,
  ToDownArrow,
  ToRightArrow,
} from "../../icons/ArrowsIcons";

const Main = () => {
  return (
    <div className={style.container}>
      <div className={style.titleContainer}>
        <div>
          <div className={style.line} />
          <span>SERF</span>
        </div>
        <h1>WEST SHORE</h1>
        <div>
          <div className={style.line} />
          <span>CONDITION</span>
        </div>
        <h2>RADICAL</h2>
        <div>
          <ToRightArrow />
        </div>
      </div>
      <div className={style.items}>
        <div className={style.item}>
          <span>01</span>
          <span>North Shore</span>
        </div>
        <div className={style.item}>
          <span>02</span>
          <span>South Shore</span>
        </div>
        <div className={style.item}>
          <span>03</span>
          <span>West Shore</span>
        </div>
        <div className={style.item}>
          <span>04</span>
          <span>East Shore</span>
        </div>
      </div>
      <div className={style.topArrows}>
        <ToLeftArrow />
        <ToRightArrow />
      </div>
      <div className={style.downArrow}>
        <ToDownArrow />
      </div>
    </div>
  );
};

export default Main;
