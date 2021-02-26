import React from "react";
import style from "./LeftSidebar.module.css";
import {
  CampIcon,
  POI,
  SearchIcon,
  SurfIcon,
  TravelIcon,
} from "../../icons/BlockOneIcons";

const LeftSidebar = () => {
  return (
    <div className={style.container}>
      <div className={style.menu}>
        <div className={style.menuItem}>
          <SurfIcon />
          <p>Surf</p>
        </div>
        <div className={style.menuItem}>
          <TravelIcon />
          <p>Travel</p>
        </div>
        <div className={style.menuItem}>
          <CampIcon />
          <p>Sleep</p>
        </div>
        <div className={style.menuItem}>
          <CampIcon />
          <p>Shop</p>
        </div>
        <div className={style.menuItem}>
          <SearchIcon />
        </div>
        <div className={style.date}>
          <h1>20</h1>
          <span>06</span>
          <span>|</span>
          <span>2018</span>
          <div>
            <POI />
            <span>California</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
