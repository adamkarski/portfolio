import { Component } from "react";
import { motion } from "framer-motion";
import Markdown from "markdown-to-jsx";
import conf from "../lib/utils";


export default class Single_page extends Component {

   


static async getStaticProps({ state }) {

    const res = await fetch(conf.api_url + "/portfolios/?slug="+this.props.slug);
    const item = await res.json();
  
    return {pageData:item};


}

  render() {
   
    const state ={
       
        slug:'' 
    };
   
   return (

     <>

      <p className="text-black">post data:  </p>

      <Markdown className="text-black">{"#asda"}</Markdown>
      {/* <img src={conf.api_url+page['miniatura']['formats']['large'].url}/> */}
      {/* {console.log(page['miniatura']['formats']['large'].url)} */}


      <h1 className="text-black">Slug: {this.props.slug}</h1>


      <p className="text-black">Content: {

this.props.pageData

      }</p>

    </>
   )


   }
}
