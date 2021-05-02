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

  animation = useAnimation();

  render() {
    const state = {
      height: {},
      opis:{},
    };

    

    return (
      <InView>
        {({ inView, ref, entry }) => {
          if (inView) {
            SlideAnimation.start(slideVariant.visible);
          } else if (!inView) {
            slideAnimation.start(slideVariant.hidden);
          }

          return 
          <>
          
          
          
          
          
          </>;
        }}
      </InView>
    );
  }
}
