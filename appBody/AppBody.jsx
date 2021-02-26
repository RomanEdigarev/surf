import React, { useEffect, useState } from "react";
import style from "./AppBody.module.css";
import BlockOne from "./block-1/BlockOne";
import BlockTwo from "./block-2/BlockTwo";
import { setConfig } from "next/config";

const AppBody = () => {
  // const [scrollY, setScrollY] = useState(0);
  //
  // useEffect(() => {
  //   console.log(document.documentElement.clientHeight);
  //   window.addEventListener("scroll", () => {
  //     setScrollY(window.pageYOffset);
  //   });
  //   return window.removeEventListener("scroll", () => {});
  // }, []);
  // console.log(scrollY);

  return (
    <div className={style.container}>
      <BlockOne />
      <BlockTwo />
    </div>
  );
};

export default AppBody;
