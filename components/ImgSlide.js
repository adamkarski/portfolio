import { InView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import Mask_svg from "../components/mask_svg";

const ImgSlide = (props) => {
  return (
    <>
      <svg
        id={props.name}
        xmlns="http://www.w3.org/2000/svg"
        x={0}
        y={0}
        viewBox="0 0 596.3 459.4"
        xmlSpace="preserve"
        {...props}
      >
        <style>{".prefix__st0_mask{fill:#fff}"}</style>
        <image
          width={700}
          height={539}
          href={props.image}
          transform="translate(0 .5) scale(.8511)"
          overflow="visible"
          clipPath="url(#clip)"
        />

        <clipPath id="clip">
          <motion.heightrect className="prefix__st0_mask" width="119.3" height="539" 
          
            initial={{ height: 0 }}
            animate={{ height: props.visible.height }}
            transition={{ delay: 1.4, duration: 0.7 }}
            x="19.3"
            width="119.3"
            height="459.2"
          />
          <motion.rect
            initial={{ height: 0 }}
            animate={{ height: props.visible.height }}
            transition={{ delay: 1.4, duration: 0.7 }}
            className="prefix__st0_mask"
            x="238.6"
            width="119.3"
            height="459.2"
          />
          <motion.rect
            initial={{ height: 0 }}
            animate={{ height: props.visible.height }}
            transition={{ delay: 0.8, duration: 1.7 }}
            className="prefix__st0_mask"
            x="357.9"
            width="119.3"
            height="459.2"
          />
          <motion.rect
            initial={{ height: 0 }}
            animate={{ height: props.visible.height }}
            transition={{ delay: 1.2, duration: 1.2 }}
            className="prefix__st0_mask"
            x="476.5"
            width="119.3"
            height="459.2"
          />
        </clipPath>
      </svg>
    </>
  );
};

export default ImgSlide;
