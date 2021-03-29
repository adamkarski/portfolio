import { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";
import Box_ofer from "../components/box_ofer";
import fetchQuery from '../components/utils.js';




export default function Kontakt({items}) {
  return (

     
    


    
   <div> 
<p className="text-gray-800 text-center">Zapraszamy do kontkaktu</p>

            

                  </div>

     
  );
}



export async function getStaticProps() {
  // get posts from our api
  const res = await fetch("http://strapi.stream404.art.pl/portfolios");
  const items = await res.json();

  console.log(items);

  return {
    props: { items },
  };
}