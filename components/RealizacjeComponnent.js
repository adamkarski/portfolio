import { Component } from "react";
import { motion } from "framer-motion";
import LinkSmoothScroll from "./LinkSmoothScroll";
import Link from 'next/link'
import messageIcon from "./messageIcon";

import Box_ofer from "../components/box_ofer";



export default class extends Component {


  
  render() {
    return (
      <>

        <style jsx>
          {`
              .flex-table{
                justify-content: center;
                margin-top: 200px;
              }

              @media (min-width: 1280px){
                .flex-table .item{width: 20.333333%;
              }}

        `}
        </style>


        <div className="flex flex-wrap flex-table">


          {this.props.items.map((item) => (
            <div key={item.title} className="w-full p-2 rounded lg:w-1/2 md:w-full xl:w-1/3 item">
              <Box_ofer className=""
                title={item.title}
                slug={item.slug}
                image={item.miniatura["url"]}
                opis={item.subtitle}
                lista={item.tags}

              />
            </div>
          ))}


        </div>
        





      </>
    );
  }
}
