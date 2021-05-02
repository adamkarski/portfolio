import React from "react";
import { InView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import ImgSlide from "../components/imageOferta2";

const maleAnimationVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 1 },
  },
};

const slideAnim = {
  hidden: {
    height: 349,
    transition: { duration: 1 },
  },
  visible: {
    height: 0,
    transition: { duration: 1 },
  },
};

const Oferta = ({}) => {
  const maleAnimation = useAnimation();
  const wordpressAnimation = useAnimation();
  let passVariableAnim = {};
  return (
    <div id="projects">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
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
            maleAnimation.start(maleAnimationVariant.visible);
            passVariableAnim = slideAnim.visible;
          } else if (!inView) {
            maleAnimation.start(maleAnimationVariant.hidden);
            passVariableAnim = slideAnim.hidden;
          }

          return (
            <motion.div animate={maleAnimation} ref={ref}>
              <ImgSlide opis={"opis oferty"} visible={passVariableAnim} />
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
            wordpressAnimation.start(maleAnimationVariant.visible);
          } else if (!inView) {
            wordpressAnimation.start(maleAnimationVariant.hidden);
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
