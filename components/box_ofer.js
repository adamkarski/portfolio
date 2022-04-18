import { Component } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import conf from "../lib/utils";

function handleClick(page) {
  const page_ = page;
  console.log(page_);
}

function componentDidMount() {}

export default class Box_ofer extends Component {
  render() {
    const rand = 100 + Math.random() * (100 - 10);

    const state = {
      title: "",
      image: "",
      opis: "",
      lista: "",
      slug: "",
    };

    return (
      <>
        <style jsx>{`
        
          .box_ofer {

           
   


            min-height: 30rem;
            border: solid rgba(0, 0, 0, 0.05) 4px;
            background: white;

          }
          .box_ofer .icons {
            position: absolute;
            /* float: right; */
            background-color: white;
            border-radius: 0px 14px 0px 10px;
            padding: 4px;
            right: -22px;
            top: -5.5%;
            padding-left: 12px;
            padding-right: 14px;
          }
          .box_ofer .icons:after {
            content: "";
            width: 120px;
            height: 20px;

            box-shadow: 0px 0px 0px rgba(0, 0, 0);
            position: absolute;
          }
          .content .texts {
            position: absolute;
            width: 100%;
            height: 100%;
            background: rgb(0, 0, 0);
            background: linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.8) 0%,
              rgba(0, 0, 0, 0.8) 20%,
              rgba(255, 255, 255, 0.1) 50%,
              rgba(255, 255, 255, 0.1) 100%
            );
          }
          .content {
            position: absolute;
            bottom: 0px;
            width: 90%;
            height: 90%;
            margin: 4%;
          }
          .content .opis,
          .content .title {
            color: rgba(255, 255, 255, 0.8);
          }

          .content .title {
            position: absolute;
            bottom: 60px;
          }
          .box_ofer .button_{
            position: absolute;
    right: -5.8%;
    bottom: -5%;
   
          }
          .box_ofer .button_ img {
            width:35px;
            height:33px;
            padding-left:2px;
            padding-right:10px;

          }
          .content .opis {
            position: absolute;
            bottom: 20px;
            display: none;
          }
          .content .backgr {
            background-image: url(${conf.api_url + this.props.image});
            position: absolute;
            width: 100%;
            height: 100%;
            background-size: cover;
          }
        `}</style>

        {/* <div className="box_container"> */}

        <motion.div
          initial={{ y: 500 }}
          animate={{ y: 150 }}
          transition={{
            delay: 1,
            x: { type: "easeIn", stiffness: 100 },
            default: { duration: 0.7 },
          }}
        >
          <div className="box_ofer shadow-xl rounded-xl  ">
            <div className="content rounded-xl">
              <div className="backgr rounded-md"></div>

              <div className="texts rounded-md">
                <div className="p-3 title">
                  <h3 className="font-semibold text-xl leading-6  my-2">
                    {this.props.title}
                  </h3>
                  <p className="paragraph-normal opis">{this.props.opis}</p>

                
                </div>
          </div>
                <div className="flex items-center icons">
                  <ul className="list-none flex " key={rand + rand + rand}>
                    {this.props.lista.map((tag) => (
                      <li className={tag.id} key={tag.id}>
                        <img
                          key={rand + tag.id}
                          className="h-10 w-14 m-0 p-2 hover:bg-gray-100"
                          src={conf.api_url + "/icons/" + tag.tag_name + ".svg"}
                        />
                      </li>
                    ))}
                  </ul>
                </div>

                      <div className="button_">
                  <Link 
                    href="/realizacje/...slug"
                    as={"/realizacje/" + this.props.slug}
                  >
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 1.01 }}
                      className="bg-white text-black px-1 py-2 m-2 rounded-md pl-3"
                    >
                      <img src="/images/moreinfo.svg" className="w10 h10"></img>
                    </motion.button>
                  </Link>
                  </div>
              </div>
            </div>
          
        </motion.div>

        {/* </div> */}

        {/* 
        <motion.div
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          transition={{
            delay: 1,
            x: { type: "easeIn", stiffness: 100 },
            default: { duration: 0.7 },
          }}
          className="md:flex shadow-lg md:mx-auto mb-2 mt-20 max-w-lg md:max-w-2xl box_ofer border_radius_17"
        >
          <img
            rel="preload"
            as="image"
            className="overflow h-full w-full md:w-2/3 object-cover rounded-lg rounded-r-none pb-5/6"
            src={conf.api_url + this.props.image}
            alt="bag"
          />


          <div className="w-full md:w-1/3 px-4 py-4 bg-white rounded-lg rounded-l-none">
            <div className="flex items-center">
              <motion.h2
                animate={{
                  opacity: 1,
                }}
                initial={{
                  opacity: 0,
                }}
                transition={{
                  delay: 0.5,
                }}
                className="text-xl text-gray-800 font-medium mr-auto"
              >
                {this.props.title}
              </motion.h2>
            </div>
            <p className="text-sm text-gray-700 mt-4 min-h-5 max-h-20">
              {this.props.opis}
              <br />
              <br />
              <br />
              <br />
              <br />
            </p>

            <div className="flex items-center">
              <ul className="list-none flex " key={rand + rand + rand}>
                {this.props.lista.map((tag) => (
                  <li className={tag.id} key={tag.id}>
                    <img
                      key={rand + tag.id}
                      className="h-10 w-14 m-0 p-2 hover:bg-gray-100"
                      src={conf.api_url + "/icons/" + tag.tag_name + ".svg"}
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div className="transform scale-75 object-bottom mx-20 my-8 text-right p-0 m-0 absolute">

              <Link
                href="/realizacje/...slug"
                as={"/realizacje/" + this.props.slug}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ opacity: 0.4 }}
                  className="bg-blue-600 text-gray-200 px-2 py-2 rounded-md"
                >
                  Czytaj więcjej..
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div> */}
      </>
    );
  }
}
