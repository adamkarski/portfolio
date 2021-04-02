import { Component } from "react";

// import Link from "next/link";
import Link from "../components/Link.js";

export default class extends Component {
  render() {
    return (
      <div>
        <div className="pt-24 backSVG">
          <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center ">
            <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
              <p className="text-black">Left</p>
            </div>

            <div className="w-full md:w-3/5 py-6 text-center">
              <p className="text-black">Right</p>
            </div>
          </div>
        </div>
        <div className="relative -mt-10 lg:-mt-24">
          <img src="/images/line01.svg"></img>

          <div id="second" className="-mt-10 lg:-mt-24">
            <img src="/images/line02.svg"></img>
          </div>
        </div>

        <nav
          id="header"
          className="fixed w-full top-0 text-white bg-white lg:bg-opacity-90"
        >
          <div className="w-full max-w-4xl container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
            <div className="pl-4 flex items-center">
              <Link href="/">
                <a href="/" className="">
                  <img src="/images/logo.svg"></img>
                </a>
              </Link>
            </div>
            <div className="block lg:hidden pr-4">
              <button
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
            <div
              className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-opacity-0 text-black p-4 lg:p-0 z-20"
              id="nav-content"
            >
              <ul className="list-reset lg:flex justify-end flex-1 items-center">
                <li className="mr-3">
                  <Link href="/kontakt">
                    <a className="navlink shadow-lg mx-auto lg:mx-0 bg-white text-gray-500 font-bold rounded-full mt-4 lg:mt-0 py-3 px-5 focus:outline-none focus:shadow-outline">
                      Kontakt
                    </a>
                  </Link>
                </li>
                <li className="mr-3">
                  <Link href="/realizacje">
                    <a className="navlink shadow-lg mx-auto lg:mx-0 bg-white text-gray-500 font-bold rounded-full mt-4 lg:mt-0 py-3 px-5 focus:outline-none focus:shadow-outline">
                      Realizacje
                    </a>
                  </Link>
                </li>
                <li className="mr-3">
                  <Link href="/oferta">
                    <a className="navlink shadow-lg mx-auto lg:mx-0 bg-white text-gray-500 font-bold rounded-full mt-4 lg:mt-0 py-3 px-5 focus:outline-none focus:shadow-outline">
                      Oferta
                    </a>
                  </Link>
                </li>
                <li className="mr-3">
                  <Link href="/omnie">
                    <a className="navlink shadow-lg mx-auto lg:mx-0 bg-white text-gray-500 font-bold rounded-full mt-4 lg:mt-0 py-3 px-5 focus:outline-none focus:shadow-outline">
                      O mnie
                    </a>
                  </Link>
                </li>
              </ul>
            </div>{" "}
          </div>
        </nav>
      </div>
    );
  }
}
