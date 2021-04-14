import { Component } from "react";
import Link from "next/link";
import MetaTags from "react-meta-tags";
import { motion } from "framer-motion";
import conf from "../lib/utils";
import Testimonials from "../components/testimonials"


export default function Oferta({ tags }) {
  return (
    <>
      <MetaTags>
        <title key={"title"}>{conf.PageTitle} // Oferta</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </MetaTags>

  
      <Testimonials >

    </Testimonials>




    </>
  );
}


