import React from "react";
import style from "./BlockOne.module.css";
import LeftSidebar from "./LeftSideBar/LeftSidebar";
import Main from "./Main/Main";

const BlockOne = () => {
  return (
    <div className={style.container}>
      <div className={style.background}>
        <img src={"/images/Surf_The_Wave.png"} alt={"background"} />
        <div />
      </div>
      <LeftSidebar />
      <Main />
    </div>
  );
};

export default BlockOne;
