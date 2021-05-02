import { InView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useState } from 'react';
const slideVariant = {
  hidden: {
    x: -200,
    height: 200,
  },
  visible: {
    x: 120,
    height: 500,

    transition: { duration: 0.7 },
  },
};


const ImgSlide = (props) => {


  const SlideAnimation = useAnimation();
 


  return (
    <InView>
      {({ inView, ref, entry}) => {
        if (inView) {
          console.log("in wieee");
        } else if (!inView) {
          console.log("out wieee");
        }
        return (
          <div>
            <p className="text-black">  </p>
            <motion.div
              animate={{ scale: 1 }}
              className="text-black w-100 border-black border-2 bordert-2 border-b-2"
            >
              asdasdasds
              <br />
              <p> {props.opis}</p>
              <p> {props.visible}</p>
              
              <hr />
            </motion.div>
          </div>
        );
      }}
    </InView>
  );
};

export default ImgSlide;
