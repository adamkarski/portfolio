import { Component } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";

const slideVariant = {
  hidden: {
    x: 0,
    height: 0,
  },
  visible: {
    x: 20,
    height: 300,
    transition: { duration: 1 },
  },
};

export default class ImgSlide extends Component {
  render() {
    const state = {
      height: {},
      opis: {},
    };

    return (
      <InView>
        {({ inView, ref, entry }) => {
          if (inView) {
            SlideAnimation.start(slideVariant.visible);
          } else if (!inView) {
            slideAnimation.start(slideVariant.hidden);
          }

          return;
          <>
            <div className="container ">
              <motion.div
                key="iz1"
                className="anim-oferta-image w-1/2 h-full bg-transparent"
                initial={{ opacity: 0 }}
                transform={{ delay: 400 }}
                ref={ref}
                animate={controls}
              >
                <div key="id0" className="flex-box-mask absolute">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 100 }}
                    transform={{ delay: 100 }}
                    key="id1"
                    className="flex-box-mask-item"
                  ></motion.div>

                  <div
                    key="id2"
                    className="flex-box-mask-item opacity-100"
                  ></div>
                  <div key="id3" className="flex-box-mask-item"></div>
                  <div key="id4" className="flex-box-mask-item"></div>
                  <div key="id5" className="flex-box-mask-item"></div>
                </div>

                {/* <img className="image_flex" src="http://stream404.art.pl/wp-content/uploads/2021/02/elektrolabs.jpg"/> */}
                <img className="image_flex" src="/images/isba.jpg" />
              </motion.div>
            </div>
          </>;
        }}
      </InView>
    );
  }
}
