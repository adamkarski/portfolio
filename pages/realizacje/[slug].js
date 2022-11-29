// import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import MetaTags from "react-meta-tags";
import conf from "../../lib/utils";
import { getPortfolioBySlug, getPortfolioSlugs } from "../../lib/api";

import ReactMarkdown from 'react-markdown'

import Layout from "../../layouts/singleRealizacje"
 import rehypeRaw from 'rehype-raw'

//import remarkGfm from 'remark-gfm'


export default function Projekt(props, context) {
  const router = useRouter();

  const MarkdownComponents = {
      
    
    link: (props) => {
      return props.href.startsWith('https://twitter.com') ? (
          <CustomTwitterComponent url={props.href} /> // Render Twitter links with custom component
      ) : (
          <a href={props.href}>{props.children}</a> // All other links
      );
  }

    // img: (props) => {
    //   console.log("NextImage Props: ", props);
    //   return <NextImage {...props} layout={"fill"} />;

    //   console.log(props)
    //   // return (
    //   //   <Image
    //   //     src={props}
    //   //     width={props}
    //   //     height={props}
    //   //     alt={props}
    //   //   />
    //   // )
    // },
    // iframe: (props) => {
    //   console.log("IFrame Props: ", props);
    //   //return <NextImage {...props} layout="responsive" />;
    // },
    // img: image => {

    //   return (
    //     <Image
    //       src={image.properties.src}
    //       alt={image.properties.alt}
    //       height="768"
    //       width="432"
    //     />
    //   )
    // },
  }


  if (router.isFallback) {
    return <div> Wczytuje dane ......</div>;
  }

  let content;
  const pageContent = props.page.content;
  if (pageContent == null) {
    content = <p className="text-black">...</p>
  } else {
    console.log(props.page);
    content = props.page.content.toString();
  }


  return (
    <>
      <MetaTags>
        <title key={"title"}>
          {conf.PageTitle} // {props.page.title}
        </title>
      </MetaTags>


      {/* <p className="text-black">{props.slug}</p> */}



      <Layout>

    <div className="page_layoutx">
      <style jsx>
        {`
        .list-none{

          float:right;
          position:relative;
          top:-76px;
        }
        .page_layout{
          background-color:rgba(100,100,100,0.04);
          border-left:1px solid rgba(0,0,0,0.1);
          border-right:1px solid rgba(0,0,0,0.1);
          padding:1.2rem;
          max-width:70%;
          
        }

        
        .page_layout p{
          padding:1.2rem;

        }
        .text-h2 {
         font-size:1.5rem;
         padding-left:20px;
         padding-bottom:0.5rem;
         padding-top:0.5rem;
         position:relative;
        margin-bottom:2rem; 
          }
          .text-h2:before{
            content:'';
            margin-right:-3px;
            width:5px;
            height:100%;
            background-color:#086D93;
            position:absolute;
            left:0px;
            top:0px;
           


          }
        `}
      </style>
      <h2 className="text-h2">{props.page.title}</h2>
      <h3 className="">{props.page.opis}</h3>
      
      <ul className="list-none flex " >
                    {props.page.tags.map((tag) => (
                      <li className={tag.id} key={tag.id}>
                        <img
                          key={tag.id}
                          className="h-10 w-14 m-0 p-2 hover:bg-gray-100"
                          src={conf.api_url + "/icons/" + tag.tag_name + ".svg"}
                        />
                      </li>
                    ))}
                  </ul>
                  <br/><br/>
        <ReactMarkdown
          children={content.toString()}
          // allowDangerousHtml={true}
          // escapeHtml={false}
          // remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={MarkdownComponents}
        />

</div>
      </Layout>
    </>
  );
}

export const getStaticProps = async (context) => {
  const slug = context.params.slug || [];

  const pagea = await getPortfolioBySlug(slug);
  const page = pagea[0];

  function replaceAll(string, search, replace) {
    return string.split(search).join(replace);
  }


  if (page.content) {

    const new_content = replaceAll(page.content, '/uploads/', `${conf.api_url}/uploads/`);
    page.content = new_content;
  }

  return {
    props: { slug, page },
  };
};
export const getStaticPaths = async (context) => {
  const slugs = await getPortfolioSlugs();
  const slugsList = slugs.map((el) => {
    return { params: { slug: el.slug.toString() } };
  });
  return {
    paths: slugsList,
    fallback: "blocking",
  };
};
