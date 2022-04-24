// import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import MetaTags from "react-meta-tags";
import conf from "../../lib/utils";
import { getPortfolioBySlug, getPortfolioSlugs } from "../../lib/api";

import ReactMarkdown from 'react-markdown'

import Layout from "../../layouts/singleRealizacje"
import rehypeRaw from 'rehype-raw'



export default function Projekt(props, context) {
  const router = useRouter();

  const MarkdownComponents = {
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
    content = props.page.content.toString();
  }

  return (
    <>
      <MetaTags>
        <title key={"title"}>
          {conf.PageTitle} // {props.slug}
        </title>
      </MetaTags>


      {/* <p className="text-black">{props.slug}</p> */}



      <Layout>

        <p>{conf.PageTitle}</p>

        <ReactMarkdown
          children={content.toString()}
          // allowDangerousHtml={true}
          // escapeHtml={false}
          rehypePlugins={[rehypeRaw]}
          // components={MarkdownComponents}
        />

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
