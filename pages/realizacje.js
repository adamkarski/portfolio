import { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";
import Box_ofer from "../components/box_ofer";

export default function Realizacje() {
  return (

     


    <div>


      <Box_ofer
        title={"Back2Roots"}
        image={"http://stream404.art.pl/wp-content/uploads/2017/02/b2r.jpg"}
        opis={"stylowe meble na zamówienie"}
        lista={"icon / icon / icon "}
        link={"#"}
      />

      <Box_ofer
        title={"Elektrolabs"}
        image={"http://stream404.art.pl/wp-content/uploads/2021/02/elektrolabs.jpg"}
        opis={"Strona domowa elektryka"}
        lista={"icon / icon / icon "}
        link={"#"}
      />

      <Box_ofer
        title={"Edytor Wyswig"}
        image={"http://stream404.art.pl/wp-content/uploads/2016/07/Zrzut-ekranu-2016-07-01-12.32.50.jpg"}
        opis={"Edytor szablonów Ebay / Allegro"}
        lista={"icon / icon / icon "}
        link={"#"}
      />

    </div>
  );
}
