import { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";

import Header from "../components/navbar.js";
import Footer from "../components/footer.js";
import Kontakt from "../components/kontakt.js";

export default function Oferta() {
  return (
      
    <div class="w-full h-full fixed bg-gray-300 p-20 flex top-0">
    <div class="bg-gray-600 p-8 rounded-full text-white h-1/4 w-1/4">x</div>
    <div class="bg-gray-600 p-8 rounded-full text-white h-1/4 w-1/4">x</div>
    <div class="bg-gray-600 p-8 rounded-full text-white h-1/4 w-1/4">x</div>
    <div class="bg-gray-600 p-8 rounded-full text-white h-1/4 w-1/4">x</div>
    <div class="bg-gray-600 p-8 rounded-full text-white h-1/4 w-1/4">x</div>
    </div>
    
  );
}
