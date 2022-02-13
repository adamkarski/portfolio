import { Component } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";




export default class ImgSlide extends Component {
  render() {


    



    return (
      <>

      <div id={this.props.uid} key={this.props.uid}>
    <svg
      id={this.props.uid+"prefix__Layer_1"}
      xmlns="http://www.w3.org/2000/svg"
      x={0}
      y={0}
      viewBox="0 0 596.3 459.4"
      xmlSpace="preserve"
      {...this.props}
      key={this.props.uid}
    >

   
      <style>{".prefix__st0{fill:#fff}"}</style>
      <image
        width={700}
        height={539}
        href={this.props.image}
        transform="translate(0 .1) scale(.8511)"
        overflow="visible"
        clipPath="url(#clip)"
      />

      <clipPath id="clip">
        <motion.rect
          key={this.props.uid + 'r1'}
         initial={{ height: 0 }}
         animate={{ height: 200}}
         transition={{ delay: 1.4, duration: 0.7 }}
          className="st0" width="119.3" height="459" />
        <motion.rect
         key={ this.props.uid + 'r2'}
          initial={{ height: 0 }}
          animate={{ height: 200}}
          transition={{ delay: 1.4, duration: 0.7 }}
          x="119.3"
          width="119.3"
          height="459.2"
        />
        <motion.rect
          initial={{ height: 0 }}
          animate={{ height: 200}}
          transition={{ delay: 1.4, duration: 0.7 }}
          className="st0"
          x="238.6"
          width="119.3"
          height="459.2"
        />
        <motion.rect
          initial={{ height: 0 }}
          animate={{ height: 200}}
          transition={{ delay: 0.8, duration: 1.7 }}
          className="st0"
          x="357.9"
          width="119.3"
          height="459.2"
        />
        <motion.rect
          initial={{ height: 0 }}
          animate={{ height: 200}}
          transition={{ delay: 1.2, duration: 1.2 }}
          className="st0"
          x="476.5"
          width="119.3"
          height="459.2"
        />
         <motion.rect
          initial={{ height: 0 }}
          animate={{ height: 200}}
          transition={{ delay: .2, duration: .2 }}
          className="st0"
          x="595.8"
          width="119.3"
          height="459.2"
        />
      </clipPath>
    </svg>



<p className="text-black">visibele {this.props.visible.toString() +" : " }</p>

             
   
  </div>



</>
    );
  }
}
