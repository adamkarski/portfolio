import { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";
import Box_ofer from "../components/box_ofer";
import conf from "../components/utils.js";


Object.keys(conf).map(key => console.log(key))

export default function Realizacje({ items }) {
  return (
    <div>
      <hr></hr>

      {items.map((item) => (
        <Box_ofer
          title={item.title}
          slug={item.slug}
          image={item.miniatura["url"]}
          opis={item.subtitle}

          lista={item.tags.map((tag) => (
            <li>
              <img
                className="h-10 w-14 m-0 p-2 hover:bg-gray-100"
                src={conf.api_url + "/icons/" + tag.tag_name + ".svg"} 
              />
            </li>
          ))}
                   
          // link={api_url + "/realizacje/" + item.slug}
        
        />
      ))}

      <hr></hr>

      {/* // image={`${process.env.NEXT_PUBLIC_API_URL}${tag.image[0].url}`} */}
      {/* {items.map((item) => (
            <div className="text-gray-500" xs="6" sm="4" key={item.tag_name}>
              <div style={{ margin: "0 0.5rem 20px 0.5rem" }}> */}
      {/* <CardImg
                  top={true}
                  style={{ height: 250 }}
                  src={`${process.env.NEXT_PUBLIC_API_URL}${tag.image[0].url}`}
                /> */}
      {/* <div> */}
      {/* <div>{item.tag_name}</div> */}
      {/* <CardText>{tag.description}</CardText> */}
      {/* </div>
                <div className="card-footer">
                  <Link
                    as={`/restaurants/${item.id}`}
                    href={`/restaurants?id=${item.id}`}
                  >
                    <a className="btn btn-primary">View</a>
                  </Link>
                </div>
              </div>
            </div> */}
      {/* ))} */}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(conf.api_url+"/portfolios");
  const items = await res.json();

  return {
    props: { items },
  };
}
