import { motion, useAnimation } from "framer-motion";
import { useState } from 'react'; 


  function clicked(){

    console.log('frontImages')

  }

 const FrontImages = (props) =>{

  let state = {
    visible: false,
  };

  const [value, setValue] = useState("value")
 

 

  return (
    <>


<div className="container FrontImages">
      <div className="item item-1">
        <img src="http://strapi.adamkarski.art/uploads/FJ_site_portfolio_nextjs_miniatura_5770eb9890.jpg" alt="" />
        <span className="count">1</span>
      </div>
      <div className="item item-2">
        <img src="http://strapi.adamkarski.art/uploads/banner_140x380_902c957ee5.jpg" alt="" />
        <span className="count">2</span>
      </div>
      <div className="item item-3">
        <img src="http://strapi.adamkarski.art/uploads/koszulki_931d594edd.jpg" alt="" />
        <span className="count">3</span>
      </div>
 
    </div>

<style jsx>{`
        
.FrontImages {
  width: 60%;
  position: relative;
  margin-left: 20px;
  display: grid;
    grid-template-columns: 0fr 1fr 1fr;
    grid-template-rows: 200px 200px;
    grid-gap: 8px;
}
img {
  width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    object-position: left;
  
}
.item {
  margin:20px;
  box-shadow: 2px 2px 34px rgba(100,100,100,0.2);

  position: relative;
}
.count {
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 42px;
  font-weight: 700;
  color: white;
  width: 50px;
  height: 50px;
  background-color: #0000008c;
  text-align: center;
  border-radius:40px;
  display:none;
}

.item-1 {
  grid-column: 2/3;
  grid-row: 1/3;
}
.item-2 {
  grid-column: 3/4;
  grid-row: 1/2;
}
.item-3 {
  grid-column: 3/4;
  grid-row: 2/3;
}




      `}</style>








</>
  );
}


export default FrontImages



