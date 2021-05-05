import { InView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

const ImgSlide = (props) => {
  return (
    <>
   

      <div className="container">
        <motion.div
          className="anim-oferta-image w-full h-full bg-transparent relative"
          initial={{ opacity: 1 }}
          transition={{ delay: 400, staggerChildren: 2 }}
        >
          <div key="id0" className="flex-box-mask absolute">
            <motion.div
              style={{ backgroundImage: "url(" + props.image + ")" }}
              initial={{ height: 0 }}
              animate={{ height: props.visible.height }}
              transition={{ delay: 2.1 }}
              className="flex-box-mask-item"
            ></motion.div>
            <motion.div
              style={{
                backgroundImage: "url(" + props.image + ")",
                backgroundPositionX: "8.66%",
              }}
              initial={{ height: 0 }}
              animate={{ height: props.visible.height }}
              transition={{ delay: 1.6 }}
              className="flex-box-mask-item"
            ></motion.div>
            <motion.div
              style={{
                backgroundImage: "url(" + props.image + ")",
                backgroundPositionX: "17.32%",
              }}
              initial={{ height: 0 }}
              animate={{ height: props.visible.height }}
              transition={{ delay: 1.7 }}
              className="flex-box-mask-item"
            ></motion.div>
            <motion.div
              style={{
                backgroundImage: "url(" + props.image + ")",
                backgroundPositionX: "25.98%",
              }}
              initial={{ height: 0 }}
              animate={{ height: props.visible.height }}
              transition={{ delay: 1.2 }}
              className="flex-box-mask-item"
            ></motion.div>
            <motion.div
              style={{
                backgroundImage: "url(" + props.image + ")",
                backgroundPositionX: "34.64%",
              }}
              initial={{ height: 0 }}
              animate={{ height: props.visible.height }}
              transition={{ delay: 1.6 }}
              className="flex-box-mask-item"
            ></motion.div>
            <motion.div
              style={{
                backgroundImage: "url(" + props.image + ")",
                backgroundPositionX: "43.3%",
              }}
              initial={{ height: 0 }}
              animate={{ height: props.visible.height }}
              transition={{ delay: 1.6 }}
              className="flex-box-mask-item"
            ></motion.div>
          </div>
          {/* <img className="image_flex" src="http://stream404.art.pl/wp-content/uploads/2021/02/elektrolabs.jpg"/> */}
          <img className="image_flex opacity-0" src={props.image} />
        </motion.div>
      </div>
    </>
  );
};

export default ImgSlide;
