import { Component } from "react";
import Link from "next/link";
import { motion } from "framer-motion"

function handleClick(page) {
  const page_=page;
  console.log(page_);
  } 

export default class extends Component {
    

    

    render() {
        const title = 'Welcome to React';

        const state ={
            title:'Back2Roots',
            image:'',
            opis:'',
            lista:'',
            link:'',
            slug:''
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
    
        className="md:flex shadow-lg md:mx-auto mb-2 mt-20 max-w-lg md:max-w-2xl box_ofer" >
          <img rel="preload" as="image" className="h-full w-full md:w-2/3 object-cover rounded-lg rounded-r-none pb-5/6" src={this.props.image} alt="bag" />
          <div className="w-full md:w-1/3 px-4 py-4 bg-white rounded-lg">
            <div className="flex items-center">
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

            className="text-xl text-gray-800 font-medium mr-auto">{this.props.title}</motion.h2>
            </div>
            <p className="text-sm text-gray-700 mt-4 min-h-5 max-h-20">{this.props.opis}<br/><br/><br/><br/><br/></p>
        
            <div className="flex items-center">
            <ul className="list-none flex ">
            {this.props.lista}
              </ul>
            </div>
        
        
            <div className="transform scale-75 object-bottom mx-20 my-8 text-right p-0 m-0 absolute">
             <Link href={'/projekt/'+this.props.slug}>
               
             
             <button className="bg-blue-600 text-gray-200 px-2 py-2 rounded-md">Czytaj więcjej..</button>
               
               </Link>
               
            </div>
          </div>
        </motion.div>

    );
  }
}

