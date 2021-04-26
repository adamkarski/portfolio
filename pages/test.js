import { Component } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import conf from "../lib/utils.js";
import MetaTags from "react-meta-tags";

export default function Test() {
  return (
    <>
    
      <motion.div
        className="anim-oferta-image w-1/2 h-full  bg-gray-500 transparent"
        animate={{ opacity: 1}}
        initial={{ opacity: 0, skewY: "0deg" }}
      >
        <img
          className="image_flex"
          src="http://stream404.art.pl/wp-content/uploads/2020/06/bilbielsko.jpg"
        />

        <div key="id0" className="flex-box-mask  absolute">
          <motion.div
            initial={{ height:12 }}
            animate={{ height: 100, delay:100 }}
            key="id1"
            className="flex-box-mask-item"
          ></motion.div>
          
         
          <div key="id3" className="flex-box-mask-item"></div>
          <div key="id3" className="flex-box-mask-item"></div>
          <div key="id4" className="flex-box-mask-item"></div>
          <div key="id5" className="flex-box-mask-item"></div>
        </div>

        {/* <img className="image_flex" src="http://stream404.art.pl/wp-content/uploads/2021/02/elektrolabs.jpg"/> */}
        
      </motion.div>
    </>
  );
}
