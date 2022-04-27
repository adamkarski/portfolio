import conf from "../lib/utils.js";
import MetaTags from "react-meta-tags";
import Layout from "../layouts/kontakt";
import motion from "framer-motion"
export default function Kontakt({ items }) {
  return (
    <>
      <MetaTags>
        <title key={"title"}>{conf.PageTitle} // O mnie</title>
      </MetaTags>


   

      <Layout 
    
      >
        <div>
          <p className="text-gray-800 text-center"></p>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://strapi.stream404.art.pl/portfolios");
  const items = await res.json();
  return {
    props: { items },
  };
}
