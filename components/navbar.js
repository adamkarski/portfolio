import { Component } from "react";

import Link from "next/link";




export default class extends Component {
  render() {
    return (
    
    <div>
    
    <div class="pt-24 backSVG">
      <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center ">
        
    
          
          
          
          
        <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
         
          <p class="text-black">Left</p> 
          
       
        </div>
      
        <div class="w-full md:w-3/5 py-6 text-center">
         
         <p class="text-black">Right</p> 

        </div>
      </div>
    </div>
    <div class="relative -mt-10 lg:-mt-24">
        
      <img src="/images/line01.svg"></img>


 <div id="second" class="-mt-10 lg:-mt-24">

<img src="/images/line02.svg"></img>

        </div>

    </div>





    <nav id="header" class="fixed w-full top-0 text-white">
    
      
    <div class="w-full max-w-4xl container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
      <div class="pl-4 flex items-center">
     
      
      <Link href="/">
          <img src="/images/logo.svg"></img>
       
          </Link>
          
          
          
          
          
      </div>
      <div class="block lg:hidden pr-4">
        <button id="nav-toggle" class="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
          <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
      <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
          <li class="mr-3">

          
                  <Link href="kontakt">Kontakt</Link>

          </li>
          <li class="mr-3">
           
                  <Link href="realizacje">Realizacje</Link>
          
          </li>
          <li class="mr-3">
          <a class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4">

          <Link href="oferta">Oferta</Link>




            </a>
          </li>
        </ul>
        <button id="navAction" class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
          Action
        </button>
        </div> </div> 
    
   
  </nav>
  


    </div>





    );
  }
}
