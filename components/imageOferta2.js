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
          key="iz1"
          className="anim-oferta-image w-1/2 h-full bg-transparent relative"
          initial={{ opacity: 1 }}
          transition={{ delay: 400 , staggerChildren:2}}
         
          //animate={props.visible}
        >
          <div key="id0" className="flex-box-mask absolute">
            <motion.div
              initial={{ height: 200 }}
              animate={props.visible}
              transition={{ delay: 56 }}
            
              className="flex-box-mask-item"
            ></motion.div>
            <motion.div
              initial={{ height: 300 }}
              animate={props.visible}
              transition={{ delay: 10 }}
              
              className="flex-box-mask-item"
            ></motion.div>
              <motion.div
              initial={{ height: 349 }}
              animate={props.visible}
              transition={{ delay: 30 }}
              
              className="flex-box-mask-item"
            ></motion.div>
              <motion.div
              initial={{ height: 349 }}
              animate={props.visible}
              transition={{ delay: 20 }}
             
              className="flex-box-mask-item"
            ></motion.div>
              <motion.div
              initial={{ height: 349 }}
              animate={props.visible}
              transition={{ delay: 2 }}
             
              className="flex-box-mask-item"
            ></motion.div>
            
           
            
            
          </div>

          {/* <img className="image_flex" src="http://stream404.art.pl/wp-content/uploads/2021/02/elektrolabs.jpg"/> */}
          <img className="image_flex" src="/images/isba.jpg" />
        </motion.div>
      </div>
    </>
  );
};

export default ImgSlide;
