import { Component } from "react";
import Link from "next/link";

import {useEffect} from "react";

import conf from "../lib/utils.js";
import MetaTags from "react-meta-tags";

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



// Prepends the `perspective` to the transform value.
function transformTemplate(transformProps, transformedString) {
  // I don't see the `perspective` prop in `transformProps`
  return `perspective(150px) ${transformedString}`
}

const boxVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      duration: 0.5
    }
  }
}


export default function TestAnimations() {

  const controls = useAnimation();
  const { ref, inView } = useInView();


  useEffect(() => {
    if (inView) {
      controls.start( {opacity:1, skewY: "-8deg", transition: {
        duration: 0.7, delay:0.3
      }});
    }
    if (!inView) {
      controls.start( {opacity:0, skewY: "-8deg"});
    }
  }, [controls, inView]);
  
  

  return (
    <>
 <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

      <div className="container ">

      <motion.div key="iz1"
        className="anim-oferta-image w-1/2 h-full bg-transparent"
      
        initial={{ opacity:0 }}
        transform={{delay:400}}
        ref={ref} 
        animate={controls}
      >
       

        <div key="id0" className="flex-box-mask absolute">
          <motion.div
            initial={{ height:0 }}
            animate={{ height: 100}}
            transform={{delay:100}}
            key="id1"
            className="flex-box-mask-item"
          ></motion.div>
          
         
          <div key="id2" className="flex-box-mask-item opacity-100"></div>
          <div key="id3" className="flex-box-mask-item"></div>
          <div key="id4" className="flex-box-mask-item"></div>
          <div key="id5" className="flex-box-mask-item"></div>
        </div>

        {/* <img className="image_flex" src="http://stream404.art.pl/wp-content/uploads/2021/02/elektrolabs.jpg"/> */}
        <img
          className="image_flex"
          src="/images/isba.jpg"
        />
      </motion.div>
    
      <div className="w-1/2  text-gray-700">Lewa strona<hr/> </div>
      </div>    
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <div className="container ">

<motion.div  key="iz2"
  className="anim-oferta-image w-1/2 h-full bg-transparent"

  initial={{ opacity:0 }}
  transform={{delay:400}}
  ref={ref} 
  animate={controls}
>
 

  <div key="id0" className="flex-box-mask absolute">
    <motion.div
      initial={{ height:0 }}
      animate={{ height: 100}}
      transform={{delay:100}}
      key="id1"
      className="flex-box-mask-item"
    ></motion.div>
    
   
    <div key="id2" className="flex-box-mask-item opacity-100"></div>
    <div key="id3" className="flex-box-mask-item"></div>
    <div key="id4" className="flex-box-mask-item"></div>
    <div key="id5" className="flex-box-mask-item"></div>
  </div>

  {/* <img className="image_flex" src="http://stream404.art.pl/wp-content/uploads/2021/02/elektrolabs.jpg"/> */}
  <img
    className="image_flex"
    src="/images/isba.jpg"
  />
</motion.div>

<div className="w-1/2  text-gray-700">Lewa strona<hr/> </div>
</div>
    </>
  );
}
