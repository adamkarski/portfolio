
import conf from "../lib/utils.js";
import MetaTags from "react-meta-tags";
import Layout from "../layouts/realizacje";

// Object.keys(conf).map(key => console.log(key))

export default function Realizacje({ items }) {
  return (
    <>
      <MetaTags>
        <title key={"title"}>{conf.PageTitle} // Realizacje</title>
      </MetaTags>


      <Layout>

      <RealizacjeComponnent/>

      </Layout>

    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(conf.api_url + "/portfolios?_sort=published_at:DESC");
  const items = await res.json();

  return {
    props: { items },
  };
}


