import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";
import Kontakt from "../components/kontakt.js";
import MetaTags from "react-meta-tags";

import Mouse from "../public/images/mouse.svg";


const title = "home";
const Layout = ({ children, tags, title }) => {
  return (

    


    <div className='bodyWrap'>
     
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
<link href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap" rel="stylesheet">
  
</link>
      </MetaTags>


      <style global jsx>
  {` html { scroll-behavior: smooth; }`}
</style>


      <div className="leading-normal tracking-normal text-white gradient">
        <div className="layout-wrapper">
          <Navbar></Navbar>

          <Mouse />
          <section className="section_first">
            <div className="container max-w-4xl mx-auto m-8 relative">{children}</div>
          

          </section>

          <section className="">
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
