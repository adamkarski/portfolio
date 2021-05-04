import { InView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
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
  return (
    <>
      <div className="container ">
        <motion.div
          
          className="anim-oferta-image w-full h-full bg-transparent relative"
          initial={{ opacity: 1 }}
          transition={{ delay: 400, staggerChildren: 2 }}

          //animate={props.visible}
        >
          
          <div key="id0" className="flex-box-mask absolute">
          
            <motion.div
              initial={{ height: 364 }}
              animate={{ height: props.visible.height }}
              transition={{ delay: 2.1 }}
              className="flex-box-mask-item"
            ></motion.div>
            <motion.div
              initial={{ height: 364 }}
              animate={{ height: props.visible.height }}
              transition={{ delay: 1.6 }}
              className="flex-box-mask-item"
            ></motion.div>
            <motion.div
              initial={{ height: 364 }}
              animate={{ height: props.visible.height }}
              transition={{ delay: 1.7 }}
              className="flex-box-mask-item"
            ></motion.div>
            <motion.div
              initial={{ height: 364 }}
              animate={{ height: props.visible.height }}
              transition={{ delay: 1.2 }}
              className="flex-box-mask-item"
            ></motion.div>
            <motion.div
              initial={{ height: 364 }}
              animate={{ height: props.visible.height }}
              transition={{ delay: 1.6 }}
              className="flex-box-mask-item"
            ></motion.div>
            <motion.div
              initial={{ height: 364 }}
              animate={{ height: props.visible.height }}
              transition={{ delay: 1.6 }}
              className="flex-box-mask-item"
            ></motion.div>
            <motion.div
              initial={{ height: 364 }}
              animate={{ height: props.visible.height }}
              transition={{ delay: 1.6 }}
              className="flex-box-mask-item"
            ></motion.div>
          </div>
          {/* <img className="image_flex" src="http://stream404.art.pl/wp-content/uploads/2021/02/elektrolabs.jpg"/> */}
          <img className="image_flex" src="http://stream404.art.pl/wp-content/uploads/2021/02/elektrolabs.jpg" />
        </motion.div>
      </div>
    </>
  );
};

export default ImgSlide;
