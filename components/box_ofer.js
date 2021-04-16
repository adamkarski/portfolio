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


export default class extends Component {
    
  
    

    render() {
      
      const rand = 100 + Math.random() * (100 - 10);

        const state ={
            title:'',
            image:'',
            opis:'',
            lista:'',
            slug:'', 
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
    
        className="md:flex shadow-lg md:mx-auto mb-2 mt-20 max-w-lg md:max-w-2xl box_ofer border_radius_17" >
          <img rel="preload" as="image" className="overflow h-full w-full md:w-2/3 object-cover rounded-lg rounded-r-none pb-5/6" src={conf.api_url+this.props.image} alt="bag" />
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
            <ul className="list-none flex " key={rand+rand+rand}>
             {this.props.lista.map((tag) => (

               
            <li  className={tag.id} key={tag.id}>
             
              <img  key={rand+tag.id}
                className="h-10 w-14 m-0 p-2 hover:bg-gray-100"
                src={conf.api_url + "/icons/" + tag.tag_name + ".svg"} 
              />
            </li>
          ))}
              </ul>
            </div>
        
        
            <div className="transform scale-75 object-bottom mx-20 my-8 text-right p-0 m-0 absolute">
             {/* <Link href={'/projekt/'+this.props.slug}> */}
            
            
            <Link 
                href="/realizacje/...slug" 
                as={"/realizacje/"+this.props.slug}
            >   

             <motion.button whileHover={{ scale: 1.05 }} whileTap={{ opacity: 0.4 }} className="bg-blue-600 text-gray-200 px-2 py-2 rounded-md">Czytaj więcjej..</motion.button>
               
            </Link>
               
            </div>
          </div>
        </motion.div>




    );
  }
}



