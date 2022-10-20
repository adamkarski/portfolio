import "../styles/layout.scss";
import "../styles/globals.css";
import "../styles/box_ofer.css";
import "tailwindcss/tailwind.css";
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
    if(window.scrollY > 260){
      document.querySelector('.mouse_svg__mouseAnim')?.setAttribute('class','mouse_svg__mouseAnim hidden');
      
      // document.querySelector("body").className="bodyColor01";
    
    
      let ele = document.querySelector(".headerElements");
      if(ele){
        ele.className="headerElements_hide headerElements";
      }
    
    
    }else{
      document.querySelector('.mouse_svg__mouseAnim')?.setAttribute('class','mouse_svg__mouseAnim');
      document.querySelector("body").className="noColor"
      
      let ele = document.querySelector(".headerElements");

      if(ele){
        ele.className="headerElements";
      }
    }

    if(window.scrollY > 30){
      document.querySelector('.mouse_svg__mouseAnim')?.setAttribute('class','mouse_svg__mouseAnim hiddenm');
      
        }else{
      document.querySelector('.mouse_svg__mouseAnim')?.setAttribute('class','mouse_svg__mouseAnim');
      }


  }



  return (
 
    


      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>

   

  );



}
