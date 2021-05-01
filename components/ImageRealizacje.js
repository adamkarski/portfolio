import { Component } from "react";
import Link from "next/link";
import { motion } from "framer-motion"
import conf from "../lib/utils"


function handleClick(page) {
  const page_=page;
  console.log(page_);
  } 

function componentDidMount() {
 console.log('componnent Mount')
 

}


export default class StyledBox extends Component {
    
  
    

    render() {
      

    return (
     
       



        <motion.div 
    
        initial={{'y':500}}
        animate={{'y':0}}
        transition={{
          delay: 1,
          x: { type: "easeIn", stiffness: 100 },
          default: { duration: 0.7 },
        }}
    
        className="md:flex shadow-lg md:mx-auto mb-2 mt-20 max-w-lg md:max-w-2xl box_ofer border_radius_17" >
          
        </motion.div>




    );
  }
}



