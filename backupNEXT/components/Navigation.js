import { Component } from "react";
import { motion } from "framer-motion";
import LinkSmoothScroll from "./LinkSmoothScroll";
import Link from 'next/link'
import messageIcon from "./messageIcon";


export default class extends Component {
  static async getInitialProps() {
    return { someProp: "a random prop" };
  }
  state = {
    navbarV: false,
  };
  navbarState = () => {
    const { navbarV } = this.state;
    this.setState({ navbarV: !navbarV });

  
  };

  render() {
    return (
      <>
        <div className={"mobileMenu " + this.state.navbarV.toString()}>
          <div className="back"></div>

          <ul>
            <li>
              <Link href="/realizacje">
                realizacje              </Link>
            </li>
            <li>
              <Link href="/Kontakt">
                Kontakt
              </Link>
            </li>
          </ul>

          <button
            onClick={this.navbarState}
            id="nav-toggle"
            className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>

       
        <nav id="header" className="fixed w-full top-0 text-white  lg:bg-opacity-100" >
          <motion.div
            className={
              "visible_" +
              this.state.navbarV.toString() +
              " w-full max-w-4xl container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"
            }
          >
           
            <motion.div className="logo_div">
              <Link href="/">
                <motion.a href="/" className="w-30 h-30">
                  <img
                    width="400"
                    height="400"
                    src="/images/logotyp_a.svg"
                  ></img>
                </motion.a>
              </Link>

              <motion.div className="text-slogan">
                <p className="text-gray-700  text-4xl">
                  Lepsza wersja Twojej strony
                </p>
              </motion.div>
            </motion.div>
            <div className="block lg:hidden pr-4">
              <button
                onClick={this.navbarState}
                id="nav-toggle"
                className="focus:outline-none focus:shadow-outline"
              >
                <div className="hamburguer">
                  <div className="lines line-top"></div>
                  <div className="lines line-mid"></div>
                  <div className="lines line-bottom"></div>
                </div>
              </button>
            </div>
            <div
              className=" w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0  lg:bg-opacity-0 text-black p-4 lg:p-0 z-20"
              id="nav-content"
            >
              <ul className="list-reset lg:flex justify-end flex-1 items-center">
                <li className="mr-3">
                  {<Link href="/realizacje" className="navlink mx-auto lg:mx-0 text-gray-500 font-bold  mt-4 lg:mt-0 py-3 px-5 focus:outline-none">
                    
                      Realizacje
                   
                  </Link> }
                </li>
                {/* <li className="mr-3">
                  <LinkSmoothScroll href="/#oferta">
                    <a className="navlink mx-auto lg:mx-0 text-gray-500 font-bold  mt-4 lg:mt-0 py-3 px-5 focus:outline-none">
                      IoT Projects
                    </a>
                  </LinkSmoothScroll>
                </li> */}
                <li className="mr-3">
                  { <Link href="/kontakt" className="navlink mx-auto lg:mx-0  text-gray-500 font-bold  mt-4 lg:mt-0 py-3 px-5 focus:outline-none">
                    
                  <img
                    width="75"
                    height="60"
                    src="/elements/messageIcon.svg"
                  ></img>
                   
                  </Link> }
                </li>
                {/* <li className="mr-3">
                  <Link href="/omnie">
                    <a className="navlink mx-auto lg:mx-0  text-gray-500 font-bold  mt-4 lg:mt-0 py-3 px-5 focus:outline-none">
                      O mnie
                    </a>
                  </Link>
                </li> */}
              </ul>
            </div>
          </motion.div>
        </nav>
        </>      
    );
  }
}
