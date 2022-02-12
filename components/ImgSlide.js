import { motion, useAnimation } from "framer-motion";
import { useState } from 'react'; 


  function clicked(){

    console.log('sacda')

  }

 const ImgSlide = (props) =>{

  state = {
    visible: false,
  };

  const [value, setValue] = useState("value")
 

 

  return (
    <>
<div>
      <button onClick={clicked}>click me</button>
      <input type="text" name="search" />
      <div>
        <p>{value}</p>
      </div>
    </div>

    <div id={this.props.uid} key={props.uid}>
    


      
    <svg
      id={props.uid+"prefix__Layer_1"}
      xmlns="http://www.w3.org/2000/svg"
      x={0}
      y={0}
      viewBox="0 0 596.3 459.4"
      xmlSpace="preserve"
      {...props}
      key={props.uid}
    >

   
      <style>{".prefix__st0{fill:#fff}"}</style>
      <image
        width={700}
        height={539}
        href={props.image}
        transform="translate(0 .5) scale(.8511)"
        overflow="visible"
        clipPath="url(#clip)"
      />

      <clipPath id="clip">
        <motion.rect
          key={props.uid + 'r1'}
         initial={{ height: 0 }}
         animate={{ height: 200}}
         transition={{ delay: .4, duration: 0.7 }}
          className="st0" width="119.3" height="459" />
        <motion.rect
         key={ props.uid + 'r2'}
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
          transition={{ delay: .4, duration: 0.97 }}
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
          transition={{ delay: 0, duration: .2 }}
          className="st0"
          x="595.8"
          width="119.3"
          height="459.2"
        />
      </clipPath>
    </svg>



<p className="text-black dupaś">visibele {props.visible.toString() +" : " }</p>

             
   
  </div>



</>
  );
}


export default ImgSlide



