import { Component } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import conf from "../lib/utils.js";
import MetaTags from "react-meta-tags";

export default function Test() {
  return (
    <>
      <motion.div
        className="anim-oferta-image w-1/2 h-full  bg-gray-500"
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 3 }}
        initial={{ opacity: 0, skewY: "0deg" }}
      >
        <div key="id0" className="flex-box-mask opacity-40 absolute">
          <motion.div initial={{  }} key="id2" className="flex-box-mask-item h-full p-0 m-0 opacity-20"></motion.div>
          <div key="id3" className="flex-box-mask-item h-3/6 absolute"></div>
          <div key="id4" className="flex-box-mask-item h-full"></div>
          <div key="id5" className="flex-box-mask-item h-full"></div>
        </div>

        <img className="image_flex" src="http://stream404.art.pl/wp-content/uploads/2021/02/elektrolabs.jpg"/>
      </motion.div>
    </>
  );
}
