import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";
import Kontakt from "../components/kontakt.js";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <Head>
        <title>Stream404 - Strony internetowe</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="author" content="" /> */}
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet" />
      </Head>

      <body class="leading-normal tracking-normal text-white gradient">
      
          
        
              <Navbar></Navbar>
         


      <section class="bg-white-200 border-b py-8">
      <div class="container max-w-4xl mx-auto m-8">
              {children}
        </div>
      </section>


      <section class="bg-white-200 border-b py-8">
        <div class="container max-w-4xl mx-auto m-8">
              <Kontakt />
        </div>
      </section>
      
      <Footer />


    </body>
    </div>
   
  );
};

export default Layout;
