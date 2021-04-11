import { Component } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Box_ofer from "../components/box_ofer";
import conf from "../lib/utils.js";
import MetaTags from "react-meta-tags";

export default function Index({ items }) {
  return (
    <>

      {items.map((item) => (
        <div key={item.id}>
        
          <Link href="/portfolio/[slug]" as={`/portfolio/${item.slug}`}>

            <a className="text-black">{item.title}</a>
             
          </Link>
          <br/>   <br/>
        </div>
      ))}


    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(conf.api_url + "/portfolios");
  const items = await res.json();

  console.log(items);

  return {
    props: { items },
  };
}
