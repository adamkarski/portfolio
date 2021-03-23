import { Component } from "react";
import Link from "next/link";
import { motion } from "framer-motion"
 

export default class extends Component {
    
   
    

    render() {
        const title = 'Welcome to React';

        const state ={
            title:'Back2Roots',
            image:'',
            opis:'',
            lista:'',
            link:''
        };

    return (
     
       



        <motion.div 
    
        initial={{'y':500}}
        animate={{'y':0}}
        transition={{
          delay: 1,
          x: { type: "easeIn", stiffness: 100 },
          default: { duration: 0.7 },
        }}
    
        class="md:flex shadow-lg md:mx-auto mb-2 mt-20 max-w-lg md:max-w-2xl">
          <img rel="preload" as="image" class="h-full w-full md:w-2/3 object-cover rounded-lg rounded-r-none pb-5/6" src={this.props.image} alt="bag" />
          <div class="w-full md:w-1/3 px-4 py-4 bg-white rounded-lg">
            <div class="flex items-center">
            <motion.h2 
            
            animate={{
              opacity:1

            }}
            initial={{
              opacity:0
            }}
           
            transition = {{
              delay: 0.5
            }}

            class="text-xl text-gray-800 font-medium mr-auto">{this.props.title}</motion.h2>
            </div>
            <p class="text-sm text-gray-700 mt-4 min-h-20">{this.props.opis}<br/><br/><br/><br/><br/></p>
        
            <div class="flex items-center mt-6">
              <motion.h2 class="text-sm text-gray-800 font-thin ">{this.props.lista}</motion.h2>
            </div>
        
        
            <div class="transform scale-75 object-bottom min-h-full -mx-8">
              <button onClick={this.handleClick} class="bg-blue-600 text-gray-200 px-2 py-2 rounded-md">Czytaj więcjej</button>
            </div>
          </div>
        </motion.div>

    );
  }
}
