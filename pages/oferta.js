import React, { useCallback } from "react";
import { InView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import ImgSlide from "../components/imageOferta"
const maleAnimationVariant = {
  hidden: {
    opacity: 1,
   
  },
  visible: {
    opacity: 1,

    transition: { duration: .5 },
  },
};

const wordpressAnimationVariant = {
  hidden: {
    opacity: 1,

  },
  visible: {
    opacity: 1,
  
    transition: { duration: 1 },
  },
};

const slideVariant = {
  hidden: {
 
    height:0,
  },
  visible: {

    height:539
 
  },
};
const slide2Variant = {
  hidden: {
 
    height:0,
  },
  visible: {

    height:539
  
  },
};

const Oferta = ({}) => {
  const maleAnimation = useAnimation();
  const wordpressAnimation = useAnimation();

  const slide = useAnimation();

  const slide2 = useAnimation();
  return (
    <>
      <div
        className="container mx-auto flex flex-wrap flex-col md:flex-row items-center "
        key="anim01"
      >
        <div className="w-full md:w-1/3  text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-5 text-gray-600">
            Autorskie projekty
          </h1>

          <h3 className="text-1xl md:text-2xl mb-5 text-gray-600">
            Strony przygotowane do wyswitlania na komórkach. Z systemem CMS. Na
            najnowszych technologiach.
          </h3>
        </div>
        <div className="w-full md:w-2/3  text-left">
          <InView key="unique1" >
            {({ inView, ref, entry }) => {

              if (inView) {
               // maleAnimation.start(maleAnimationVariant.visible);
                slide.start(slideVariant.visible);
                console.log('anim 01', 'inView', inView)


              } else if (!inView) {
               // maleAnimation.start(maleAnimationVariant.hidden);
                slide.start(slideVariant.hidden);
                console.log('anim 01','inView', inView)

                    

              }
              return (


                <motion.div key="asdasfg"
                  ref={ref}
                
                  className="p-20 pr-0"
                >

                  <>
                  
                  {/* <ImgSlide></ImgSlide> */}
                  </> 
                 <div id="anim1">
                      <svg
                        id="anim-2-prefix__Layer_dfg1"
                        xmlns="http://www.w3.org/2000/svg"
                        x={0}
                        y={0}
                        viewBox="0 0 596.3 459.4"
                        xmlSpace="preserve"
                        // {...props}
                        key="anim1"
                      >
                        <style>{".prefix__st0{fill:#fff}"}</style>
                        <image
                          width={700}
                          height={539}
                        
                          href="/images/imageSlide/b2r.jpg"
                          transform="translate(0 .5) scale(.8511)"
                          overflow="visible"
                          clipPath="url(#clip2)"
                        />

                        <clipPath id="clip2">
                      
                          <motion.rect
                            key="anim2-r1"
                            initial={{ height: 0 }}
                            animate={ slide }
                            transition={{ delay: 3.5, duration: 0.7 }}
                            className="st0"
                            width="119.3"
                            height="459"
                          />
                          <motion.rect
                            key="anim2-r2"
                            initial={{ height: 0 }}
                            animate={slide }
                            transition={{ delay: 3.4, duration: 0.4 }}
                            x="119.3"
                            width="119.3"
                            height="459.2"
                          />
                          <motion.rect
                            initial={{ height: 0 }}
                            animate={ slide }
                            transition={{ delay: 3, duration: 0.7 }}
                            className="st0"
                            x="238.6"
                            width="119.3"
                            height="459.2"
                          />
                          <motion.rect
                            initial={{ height: 0 }}
                            animate={slide }
                            transition={{ delay: 2.8, duration: 1.3 }}
                            className="st0"
                            x="357.9"
                            width="119.3"
                            height="459.2"
                          />
                          <motion.rect
                            initial={{ height: 0 }}
                            animate={slide }
                            transition={{ delay: 3, duration: 2 }}
                            className="st0"
                            x="476.5"
                            width="119.3"
                            height="459.2"
                          />
                          <motion.rect
                            initial={{ height: 0 }}
                            animate={slide }
                            transition={{ delay: 3.2, duration: 1.2 }}
                            className="st0"
                            x="595.8"
                            width="119.3"
                            height="459.2"
                          />
                        </clipPath>
                      </svg>

                      
                    </div>
                 
                </motion.div>
              );
            }}
          </InView>
        </div>
      </div>

      
      <div
        className="container mx-auto flex flex-wrap flex-col md:flex-row items-center "
        key="anim02"
      >
        <div className="w-full md:w-2/3 text-left">
          <InView key="unique2dsfs">
            {({ inView, ref, entry }) => {

             
              if (inView) {
                wordpressAnimation.start(wordpressAnimationVariant.visible);
                slide2.start(slide2Variant.visible);
                

                  console.log('anim 02','inView', inView)

              } else if (!inView) {
                wordpressAnimation.start(wordpressAnimationVariant.hidden);
                slide2.start(slide2Variant.hidden);
                console.log('anim 02','inView', inView)
              }

              return (
                <motion.div  key="asfafg"
                  animate={wordpressAnimation}
                  ref={ref}
                  className="p-20 pl-0"
                >
                 
                    <div id="anim2">
                      <svg
                        id="anim-2-prefix__Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x={0}
                        y={0}
                        viewBox="0 0 596.3 459.4"
                        xmlSpace="preserve"
                        // {...props}
                        key="anim2"
                      >
                        <style>{".prefix__st0{fill:#fff}"}</style>
                        <image
                          width={700}
                          height={539}
                          href="/images/imageSlide/wordpress.jpg"
                          transform="translate(0 .5) scale(.8511)"
                          overflow="visible"
                          clipPath="url(#clip)"
                        />

                        <clipPath id="clip">
                      
                          <motion.rect
                            key="anim2-r1"
                            initial={{ height: 300 }}
                            animate={slide2}
                            transition={{ delay: 2.4, duration: 1.7 }}
                            className="st0"
                            width="119.3"
                            height="459"
                          />
                          <motion.rect
                            key="anim2-r2"
                            initial={{ height: 0 }}
                            animate={slide2}
                            transition={{ delay: 2.4, duration: 1.2 }}
                            x="119.3"
                            width="119.3"
                            height="459.2"
                          />
                          <motion.rect
                            initial={{ height: 0 }}
                            animate={slide2}
                            transition={{ delay: 2.4, duration: 1.4 }}
                            className="st0"
                            x="238.6"
                            width="119.3"
                            height="459.2"
                          />
                          <motion.rect
                            initial={{ height: 0 }}
                            animate={slide2}
                            transition={{ delay: 1.8, duration: 1.8 }}
                            className="st0"
                            x="357.9"
                            width="119.3"
                            height="459.2"
                          />
                          <motion.rect
                            initial={{ height: 0 }}
                            animate={slide2}
                            transition={{ delay: 2.9, duration: 1.2 }}
                            className="st0"
                            x="476.5"
                            width="119.3"
                            height="459.2"
                          />
                          <motion.rect
                            initial={{ height: 0 }}
                            animate={slide2}
                            transition={{ delay: 1.8, duration: 1.2 }}
                            className="st0"
                            x="595.8"
                            width="119.3"
                            height="459.2"
                          />
                        </clipPath>
                      </svg>

                    
                    </div>
               

                 
                </motion.div>
              );
            }}
          </InView>
        </div>
        <div className="w-full md:w-1/3 text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-5 text-gray-600">
            Wordpress development
          </h1>

          <h2 className="text-1xl md:text-2xl mb-5 text-gray-600">
            Lorem ipsum sir dolor amet
          </h2>
        </div>
      </div>

    </>
  );
};

export default Oferta;
