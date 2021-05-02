import React from "react";
import { InView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import ImgSlide from "../components/imageOferta2";

const titleProjectVariant = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};
const gitTitleVariant = {
  hidden: {
    x: 0,

    opacity: 0,
  },
  visible: {
    x: 0,

    opacity: 1,
    transition: { duration: 1 },
  },
};
const gitLogoVariant = {
  hidden: {
    scale: 1,

    opacity: 0,
  },
  visible: {
    scale: 1,

    opacity: 1,
    transition: { duration: 1 },
  },
};

const Oferta = ({}) => {
  const maleAnimation = useAnimation();
  const wordpressAnimation = useAnimation();
  let varia ='true';
  return (
    <div id="projects">
      <InView>
        {({ inView, ref, entry }) => {
          if (inView) {
            maleAnimation.start(titleProjectVariant.visible);
            varia ='truea';
            
          } else if (!inView) {
            maleAnimation.start(titleProjectVariant.hidden);
            varia ='falsea';
          }

          return (
            <motion.div animate={maleAnimation} ref={ref}>
           

              <ImgSlide opis={"opis oferty"} visible={varia}/>
            </motion.div>
          );
        }}
      </InView>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <InView>
        {({ inView, ref, entry }) => {
          if (inView) {
            wordpressAnimation.start(gitLogoVariant.visible);
          } else if (!inView) {
            wordpressAnimation.start(gitLogoVariant.hidden);
          }
          return (
            <motion.div ref={ref} animate={wordpressAnimation}>
              <ImgSlide />
            </motion.div>
          );
        }}
      </InView>
    </div>
  );
};

export default Oferta;
