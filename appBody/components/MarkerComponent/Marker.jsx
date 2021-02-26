import React from "react";
import { motion, useCycle } from "framer-motion";

export const Marker = ({ toggleShowInfo }) => {
  const dPathBeforeClick =
    "M51 38C51 45.1797 45.1797 51 38 51C30.8203 51 25 45.1797 25 38C25 35.2067 25.881 32.6191 27.3803 30.5C29.7347 27.1724 33.6136 25 38 25C42.3864 25 46.2653 27.1724 48.6197 30.5C50.119 32.6191 51 35.2067 51 38Z";
  const dPathAfterClick =
    "M51 48C51 55.1797 45.1797 61 38 61C30.8203 61 25 55.1797 25 48C25 45.2067 25.881 42.6191 27.3803 40.5C29.7347 37.1724 38 25 38 25C38 25 46.2653 37.1724 48.6197 40.5C50.119 42.6191 51 45.2067 51 48Z";
  const [dPath, toggleDPath] = useCycle(dPathBeforeClick, dPathAfterClick);

  return (
    <motion.svg
      width="76"
      height="76"
      viewBox="0 0 76 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d)">
        <motion.path
          style={{ cursor: "pointer" }}
          fill="#4AF6CD"
          initial={{
            d: dPath,
          }}
          animate={{ d: dPath }}
          onClick={() => {
            toggleDPath();
            toggleShowInfo();
          }}
          transition={{
            type: "spring",
            bounce: 0.5,
            duration: 1,
          }}
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="0"
          width="76"
          height="76"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="12.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.290196 0 0 0 0 0.964706 0 0 0 0 0.803922 0 0 0 0.74 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </motion.svg>
  );
};
