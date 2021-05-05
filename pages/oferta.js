import React from "react";
import { InView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import ImgSlide from "../components/ImgSlide";

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
    height: 0,
    transition: {},
  },
  visible: {
    height: 364,
    transition: {},
  },
};

const Oferta = ({}) => {
  const maleAnimation = useAnimation();
  const wordpressAnimation = useAnimation();
  let passVariableAnim = {};
  return (
    <>
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center ">
        <div className="w-full md:w-2/3 text-left">
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
                <motion.div animate={maleAnimation} ref={ref} className="p-15">
                  <ImgSlide opis={"opis oferty"} visible={passVariableAnim} image={"http://strapi.stream404.art.pl/uploads/bilbielsko_83d69203f3.jpeg"}/>
                </motion.div>
              );
            }}
          </InView>
        </div>
        <div className="w-full md:w-1/3 text-left">
          <h1 class="text-3xl md:text-4xl font-bold mb-5 text-gray-600">
            Wordpress development
          </h1>

          <h2 class="text-1xl md:text-2xl mb-5 text-gray-600">
            Lorem ipsum sir dolor amet
          </h2>
        </div>
      </div>

      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center ">
        <div className="w-full md:w-1/3  text-left">
          <h1 class="text-3xl md:text-4xl font-bold mb-5 text-gray-600">
            Autorskie projekty
          </h1>

          <h3 class="text-1xl md:text-2xl mb-5 text-gray-600">
            Strony przygotowane do wyswitlania na komórkach. Z systemem CMS. Na najnowszych technologiach. 
          </h3>
        </div>
        <div className="w-full md:w-2/3  text-left">
          <InView>
            {({ inView, ref, entry }) => {
              if (inView) {
                wordpressAnimation.start(maleAnimationVariant.visible);
              } else if (!inView) {
                wordpressAnimation.start(maleAnimationVariant.hidden);
              }
              return (
                <motion.div
                  ref={ref}
                  animate={wordpressAnimation}
                  className="p-20"
                >
                  <ImgSlide visible={passVariableAnim} image={'http://strapi.stream404.art.pl/uploads/b2r2_1024x747_3997b9d117.jpeg'}/>
                </motion.div>
              );
            }}
          </InView>
        </div>
      </div>

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </>
  );
};

export default Oferta;
