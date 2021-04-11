import "../styles/layout.scss";
import "../styles/globals.css";
import "../styles/box_ofer.css";
import "tailwindcss/tailwind.css";
import Layout from "../components/layout";
import { AnimateSharedLayout } from "framer-motion";
import React from "react";


export default function MyApp({ Component, pageProps, preloadTrue }) {
 

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

const handleScroll = () => {
    // console.log('scroll event', window.scrollY)
    if(window.scrollY > 80){
      
      document.querySelector(".logo_div").className="pl-4 flex items-center logo_div upper"
    }else{
      document.querySelector(".logo_div").className="pl-4 flex items-center logo_div"
    }
  }


  // React.useEffect(() => {

   
  //   //alert('wgralem strone');
    
  // }, [])
  return (
 
 
 <Layout>
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </Layout>
  );


}
