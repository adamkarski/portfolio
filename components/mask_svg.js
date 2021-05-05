import * as React from "react";
import { motion } from "framer-motion";

function mask_svg(props) {
  const rand = 1 / Math.random(0, 1);

  return (
    <>
      <svg
        id="prefix__Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x={0}
        y={0}
        viewBox="0 0 596.3 459.4"
        xmlSpace="preserve"
        {...props}
      >
        <style>{".prefix__st0{fill:#fff}"}</style>
        <image
          width={700}
          height={539}
          href={props.image}
          transform="translate(0 .5) scale(.8511)"
          overflow="visible"
          clip-path='url(#clip)'
        />

        <clipPath id="clip">
          
          <rect className="st0" width="119.3" height="459.2" />
          <motion.rect
          initial={{ height: 0 }}
          animate={{ height: 459 }}
          transition={{ delay: 1 }}

            className=""
            x="119.3"
            width="119.3"
            height="459.2"
          />
          <rect className="st0" x="238.6" width="119.3" height="459.2" />
          <rect className="st0" x="357.9" width="119.3" height="459.2" />
          <rect className="st0" x="476.5" width="119.3" height="459.2" />
        </clipPath>
      </svg>
    </>
  );
}

export default mask_svg;
