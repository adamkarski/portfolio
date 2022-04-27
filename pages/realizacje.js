
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

      <style jsx>
        {`
        .flex-table{
justify-content: center;
margin-top: 200px;
        }


@media (min-width: 1280px)
 {
  .flex-table .item{width: 20.333333%;}
    
}

        `}
      </style>


        <div className="flex flex-wrap flex-table">


          {items.map((item) => (
            <div key={item.title} className="w-full p-2 rounded lg:w-1/2 md:w-full xl:w-1/3 item">
              <Box_ofer className=""
                title={item.title}
                slug={item.slug}
                image={item.miniatura["url"]}
                opis={item.subtitle}
                lista={item.tags}

              />
            </div>
          ))}


        </div>



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


