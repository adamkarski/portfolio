import MetaTags from "react-meta-tags";
import Mouse from "../public/images/mouse.svg";
import Logotypes from "../components/logotypes.js";
import FrontImages from "../components/frontImages"
import Navigation from "../components/Navigation";

const title = "home";
const Layout = ({ children, tags, title }) => {
  return (
    <div className="bodyWrap">
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
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap"
          rel="stylesheet"
        ></link>
      </MetaTags>

      <style global jsx>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>

      <div className="layout-wrapper">
        <Navigation></Navigation>

        <section className="startPage">

        <div className="headerElements">
          <div className="pt-24 "></div>

          <Logotypes></Logotypes>

          <img src="/images/responsive_devices.png" className="responsiveDev" />
        </div>

          {/* <Mouse /> */}
        </section>



        <FrontImages />

        <section className="content">
          <div className="container max-w-4xl mx-auto m-8 relative">{children}</div>
        </section>
      </div>
    </div>
  );
};

export default Layout;
