import React, { useCallback } from "react";
import Layout from "../layouts/index";
import conf from "../lib/utils.js";


const Index = ({items}) => {
 

  return (
    <>

<Layout items={items}>


</Layout>
     
</>
  );
};

export async function getStaticProps() {
  const res = await fetch(conf.api_url + "/portfolios?_sort=published_at:DESC");
  const items = await res.json();

  return {
    props: { items },
  };
}

export default Index;

