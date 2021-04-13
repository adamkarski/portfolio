import { Component } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Box_ofer from "../components/box_ofer";
import conf from "../lib/utils.js";
import MetaTags from "react-meta-tags";


export default function Kontakt({ items }) {
  return (
<>
    <MetaTags>
        <title key={"title"}>{conf.PageTitle} // O mnie</title>
  </MetaTags>
 
    <div>
      <p className="text-gray-800 text-center">Zapraszamy do kontkaktu</p>
    </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://strapi.stream404.art.pl/portfolios");
  const items = await res.json();
  return {
    props: { items },
  };
}
