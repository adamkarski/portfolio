
import Box_ofer from "../components/box_ofer";
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

      {items.map((item) => (
        <div key={item.title}>
        <Box_ofer 
          title={item.title}
          slug={item.slug}
          image={item.miniatura["url"]}
          opis={item.subtitle}
          lista={item.tags}

        />
        </div>
      ))}
    
    </Layout>

    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(conf.api_url + "/portfolios");
  const items = await res.json();

  return {
    props: { items },
  };
}


