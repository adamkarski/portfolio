import { Component } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Box_ofer from "../components/box_ofer";
import api_url from "../components/utils.js";

export default function Kontakt({ items }) {
  return (
    <div>
      <p className="text-gray-800 text-center">Zapraszamy do kontkaktu</p>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://strapi.stream404.art.pl/portfolios");
  const items = await res.json();
  return {
    props: { items },
  };
}
