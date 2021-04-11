import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import MetaTags from "react-meta-tags";
import conf from "../../lib/utils"
import { getPostBySlug } from '../../lib/api'


export default function Projekt(props, context) {
    
   
  
  
  
    return (
      <>
        <MetaTags>
          <title key={"title"}>
            {conf.PageTitle} // {"adsa"}
          </title>
        </MetaTags>
  
     <p className="text-black">asassa</p>
       
  
      </>
    );
  }
  

export async function getStaticProps() {
    const router = useRouter();
    const slug = router.query.slug || [];
    
         

    return {
      props: {slug}
    }
  }
  export async function getStaticPaths() {
    return {
      paths: [
        // String variant:
        "/portfolio/elektrolabs",
        // Object variant:
        { params: { slug: "elektrolabs" } },
      ],
      fallback: true,
    };
  }
  