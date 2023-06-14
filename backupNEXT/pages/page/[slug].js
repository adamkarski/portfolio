import { useRouter } from "next/router";
import MetaTags from "react-meta-tags";
import conf from "../../lib/utils";

import Single_page from "../../components/single_page"



export default function Projekt() {
  const router = useRouter();
  const slug = router.query.slug || [];
  let page; 
 



  return (
    <>
      <MetaTags>
        <title key={"title"}>
          {conf.PageTitle} // {router.query.slug}
        </title>
      </MetaTags>

      <Single_page
       slug={router.query.slug}
      >
     
      </Single_page>

    </>
  );
}

export async function getStaticProps( ) {



  return {
    props: {}
  }
}
export async function getStaticPaths() {
  return {
    paths: [
      // String variant:
      // "/realizacje/Back2Roots",
      // Object variant:
      // { params: { slug: "Back2Roots" } },
    ],
    fallback: true,
  };
}
