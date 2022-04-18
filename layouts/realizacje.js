import Footer from "../components/footer.js";
import MetaTags from "react-meta-tags";
import Navigation from "../components/Navigation.js";


const title = "Realizacje";
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
        {` html { scroll-behavior: smooth; }
        
        .top_margin{
            margin-top: 8em;
          }
        
        `}
      </style>


   

      <div className="layout-wrapper">
        <Navigation ></Navigation>


        <section className="section">


          <div className="mx-auto m-8 relative sm:w-auto p-20">
            {children}
          </div>


        </section>

       
        

        <Footer></Footer>
      </div>
    </div>
  );
};

export default Layout;
