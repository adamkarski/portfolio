
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


        <div class="flex flex-wrap ">

       


          {items.map((item) => (
            <div key={item.title} className="w-full p-2 rounded lg:w-1/2 md:w-full xl:w-1/3">
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
  
//   const qs = require('qs');
// const query = qs.stringify({
//   sort: ['title:asc', 'slug:desc'],
// }, {
//   encodeValuesOnly: true,
// });
// const items = await request(conf.api_url + "/portfolios?"+query);
// console.log(items);


  return {
    props: { items },
  };
}


