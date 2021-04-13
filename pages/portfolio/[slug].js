import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import MetaTags from "react-meta-tags";
import conf from "../../lib/utils"
import { getPostBySlug } from '../../lib/api'


export default function Projekt(props, context) {
    
   
  const router = useRouter();

  
  
    return (
      <>
        <MetaTags>
          <title key={"title"}>
            {conf.PageTitle} // {"adsa"}
          </title>
        </MetaTags>
  
     <p className="text-black">{props.slug}</p>
       
      
      </>
    );
  }
  

export const getStaticProps= async(context) => {
    const slug = context.params.slug || [];

    const page = await getPortfolioBySlug(slug);



    return {
      props: {slug, page}
    }
  }
  export const getStaticPaths= async(context) => {
    const slugs = await getPortfolioSlugs();


    return {
      paths: [
        // String variant:
        "/portfolio/elektrolabs",
        // Object variant:
        { params: { slug: "elektrolabs" } },
      ],
      fallback: 'blocking',
    };
  }
  