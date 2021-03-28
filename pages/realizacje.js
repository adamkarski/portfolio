import { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";
import Box_ofer from "../components/box_ofer";
import fetchQuery from '../components/utils.js';

export default function Realizacje({items}) {
  return (

     
    


    
    <div>

        <hr></hr>

        {items.map((item) => (
          <Box_ofer
              title={item.title}
              image={"http://stream404.art.pl/wp-content/uploads/2017/02/b2r.jpg"}
              opis={item.media['name']}
              lista={item.media}
              link={"#"}
              // image={`${process.env.NEXT_PUBLIC_API_URL}${tag.image[0].url}`}
          />
      ))}
    <hr></hr>
          {items.map((item) => (
            <div className="text-gray-500" xs="6" sm="4" key={item.tag_name}>
              <div style={{ margin: "0 0.5rem 20px 0.5rem" }}>
                {/* <CardImg
                  top={true}
                  style={{ height: 250 }}
                  src={`${process.env.NEXT_PUBLIC_API_URL}${tag.image[0].url}`}
                /> */}
                <div>
                  <div>{item.tag_name}</div>
                  {/* <CardText>{tag.description}</CardText> */}
                </div>
                <div className="card-footer">
                  <Link
                    as={`/restaurants/${item.id}`}
                    href={`/restaurants?id=${item.id}`}
                  >
                    <a className="btn btn-primary">View</a>
                  </Link>
                </div>
              </div>
            </div>
          ))}


                  <hr></hr>

     

      <Box_ofer
        title={"Back2Roots"}
        image={"http://stream404.art.pl/wp-content/uploads/2017/02/b2r.jpg"}
        opis={"stylowe meble na zamówienie"}
        lista={"icon / icon / icon "}
        link={"#"}
      />

      <Box_ofer
        title={"Elektrolabs"}
        image={"http://stream404.art.pl/wp-content/uploads/2021/02/elektrolabs.jpg"}
        opis={"Strona domowa elektryka"}
        lista={"icon / icon / icon "}
        link={"#"}
      />

      <Box_ofer
        title={"Edytor Wyswig"}
        image={"http://stream404.art.pl/wp-content/uploads/2016/07/Zrzut-ekranu-2016-07-01-12.32.50.jpg"}
        opis={"Edytor szablonów Ebay / Allegro"}
        lista={"icon / icon / icon "}
        link={"#"}
      />

    </div>
  );
}



export async function getStaticProps() {
  // get posts from our api
  const res = await fetch("http://strapi.stream404.art.pl/portfolios");
  const items = await res.json();

  console.log(items);

  return {
    props: { items },
  };
}