import "../styles/layout.scss";
import "../styles/globals.css";
import "../styles/box_ofer.css";
import "tailwindcss/tailwind.css";
import Layout from "../components/layout";
import { AnimateSharedLayout } from "framer-motion";
import React from "react";


export default function MyApp({ Component, pageProps, preloadTrue }) {
 
  React.useEffect(() => {

   
    //alert('wgralem strone');
    
  }, [])
  return (
 
 
 <Layout>
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </Layout>
  );


}
