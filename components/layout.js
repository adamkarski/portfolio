import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";
import Kontakt from "../components/kontakt.js";
import MetaTags from "react-meta-tags";

import Head from "next/head";
const title = "home";
const Layout = ({ children, tags, title }) => {
  return (

    <div className='bodyWrap'>
   
   if(!preloadTrue ){
   <div className="w-full h-300 back-red">prealod</div> 
  }
     
      <MetaTags>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="author" content="" />
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700"
          rel="stylesheet"
        />
      </MetaTags>

      <div className="leading-normal tracking-normal text-white gradient">
        <div className="layout-wrapper">
          <Navbar></Navbar>

          <section className="bg-white-200 border-b py-8">
            <div className="container max-w-4xl mx-auto m-8">{children}</div>
          </section>

          <section className="bg-white-200 border-b py-8">
            <div className="container max-w-4xl mx-auto m-8">
              <Kontakt />
            </div>
          </section>

          <Footer></Footer>
        </div>
      </div>
      </div>
  );
};

export default Layout;
