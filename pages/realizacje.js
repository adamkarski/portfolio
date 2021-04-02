import { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";
import Box_ofer from "../components/box_ofer";
import conf from "../components/utils.js";


// Object.keys(conf).map(key => console.log(key))

export default function Realizacje({ items }) {
  return (
    
    <div>
        <Head>
        <title key={'title'}>Realizacje</title>
      </Head>
      <hr></hr>

      {items.map((item) => (
        <Box_ofer
          title={item.title}
          slug={item.slug}
          image={item.miniatura["url"]}
          opis={item.subtitle}

          lista={item.tags}
                   
          // link={api_url + "/realizacje/" + item.slug}
        
        />
      ))}

  

      
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(conf.api_url+"/portfolios");
  const items = await res.json();

  return {
    props: { items },
  };
}
