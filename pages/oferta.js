import { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Oferta({ tags }) {
  return (
    <div className="grid grid-cols-3 gap-1 border-gray-50">
      <div className="bg-red-500 ">Oferta</div>
      <motion.div
        layoutId="title"
        className="bg-red-500 text-right col-span-2"
      ></motion.div>
    </div>
  );
}
