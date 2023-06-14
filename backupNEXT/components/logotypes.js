import { motion } from "framer-motion"



import Html from '../public/images/icons/header/html.svg'
import Angular from '../public/images/icons/header/angular.svg'
import Css from '../public/images/icons/header/css.svg'

import Next from '../public/images/icons/header/next.svg'
import Nodejs from '../public/images/icons/header/nodejs.svg'
import Parcel from '../public/images/icons/header/parcel.svg'
import Wordp from '../public/images/icons/header/wordpress.svg'
import Strapi from '../public/images/icons/header/strapi.svg'


function Logotypes(props) {
    const rand = 1 / (Math.random(0,1));

  return (
  <>
        <div className="headerIcons">
        
       
        <Angular className="svgIcon _1"></Angular>
        <Css className="svgIcon _2"></Css>
        <Next className="svgIcon _3" ></Next>
        <Nodejs className="svgIcon _4"></Nodejs>
        <Parcel className="svgIcon _5"></Parcel>
        <Wordp className="svgIcon _6"></Wordp>
        <Html className="svgIcon _7"></Html>
        <Strapi className="svgIcon _8"></Strapi>


        </div>

</>

  )
}

export default Logotypes
