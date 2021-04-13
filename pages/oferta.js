import { Component } from "react";
import Link from "next/link";
import MetaTags from "react-meta-tags";
import { motion } from "framer-motion";
import conf from "../lib/utils";

export default function Oferta({ tags }) {
  return (
    <>
      <MetaTags>
        <title key={"title"}>{conf.PageTitle} // Oferta</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </MetaTags>

      <div className="grid grid-cols-3 gap-1 border-gray-50">
        <div className="bg-red-500 ">Oferta</div>
        <motion.div
          layoutId="title"
          className="bg-red-500 text-right col-span-2"
        ></motion.div>
      </div>
    </>
  );
}
