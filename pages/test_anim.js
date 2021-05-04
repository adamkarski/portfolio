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
    transition: {},
  },
  visible: {
    height: 0,
    transition: {},
  },
};

const Oferta = ({}) => {
  const maleAnimation = useAnimation();
  const wordpressAnimation = useAnimation();
  let passVariableAnim = {};
  return (

    <>
    <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center ">
    <div className="w-full md:w-2/3 py-6 text-left">        <InView>
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
      </div>
      <div className="w-full md:w-1/3 py-6 text-left">
      <h1 class="text-3xl md:text-5xl font-bold mb-5 text-gray-600">
          Wordpress development
        </h1>

        <h2 class="text-1xl md:text-2xl mb-5 text-gray-600">
          Lorem ipsum sir dolor amet
        </h2>
      </div>

</div>


<div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center ">
<div className="w-full md:w-1/3 py-6 text-left">
        <h1 class="text-3xl md:text-5xl font-bold mb-5 text-gray-600">
          Wordpress development
        </h1>

        <h2 class="text-1xl md:text-2xl mb-5 text-gray-600">
          Lorem ipsum sir dolor amet
        </h2>

      </div>
      <div className="w-full md:w-1/3 py-6 text-left">
       
      <InView>
        {({ inView, ref, entry }) => {
          if (inView) {
            wordpressAnimation.start(maleAnimationVariant.visible);
          } else if (!inView) {
            wordpressAnimation.start(maleAnimationVariant.hidden);
          }
          return (
            <motion.div ref={ref} animate={wordpressAnimation}>
              <ImgSlide
                
                
                visible={passVariableAnim}
              />
            </motion.div>
          );
        }}
      </InView>
      </div>

</div>

    
</>

  );
};

export default Oferta;
