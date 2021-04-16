import { Component } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import conf from "../lib/utils.js";
import MetaTags from "react-meta-tags";

export default function Test() {
  return (
    <>
      <motion.div
        className="anim-oferta-image w-50 h-60 p-10 text-white bg-gray-500 m-20"
        animate={{ perspective: 30, opacity: 1, skewX: "0deg", skewY: "10deg" }}
        transition={{ duration: 0.3, delay: 3 }}
        initial={{ opacity: 0, skewY: "0deg" }}
      >
        <div key="id0" className="flex-box-mask">
          <div key="id2" className="flex-box-mask-item">x</div>
          <div key="id3" className="flex-box-mask-item">x</div>
          <div key="id4" className="flex-box-mask-item">x</div>
          <div key="id5" className="flex-box-mask-item">x</div>
        </div>
      </motion.div>
    </>
  );
}
