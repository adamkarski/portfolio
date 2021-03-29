import { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";
import Box_ofer from "../components/box_ofer";
import fetchQuery from '../components/utils.js';




export default function Projekt({item}) {
  return (

    
    <div>

        {/* {this.props} */}

        <hr></hr>

        
    </div>
  );
}


// export async function getStaticProps() {
  // get posts from our api
  // const res = await fetch("http://strapi.stream404.art.pl/portfolios?slug"+this.props.slug);
  // const item = await res.json();

  // console.log(item);

  // return {
    // props: { item },
  // };
// }