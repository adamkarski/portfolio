import { useRouter } from "next/router";
import MetaTags from "react-meta-tags";
import conf from "../../components/utils";
import router  from "next/router";





export default function Projekt() {
  const router = useRouter();
 
  
  const slug = router.query.slug || [];
  let page = {};

  async function getData() {

    // 'http://strapi.stream404.art.pl/portfolios?slug=Back2Roots'
    
     
      
      const res = await fetch(conf.api_url + "/portfolios?slug="+router.query.slug);
      const item = await res.json();
     
      return {
        props: { item },
      };
    }
  
    let myResult =  getData().then(
      (data)=>{

        page = data['props']['item'][0];
      

      }

    ).catch((error) => {
          console.log(error);
          });


            console.log(page)
    // getData => (

    //     console.log(Promise)

    // );

  return (
    <>
      <MetaTags>
        <title key={"title"}>
          {conf.PageTitle} // {router.query.slug}
        </title>
      </MetaTags>

      <p className="text-black">post data: {} </p>
        
        
        {/* <img src={conf.api_url+page['miniatura']['formats']['large'].url}/> */}
        {/* {console.log(page['miniatura']['formats']['large'].url)} */}
      
      <h1 className='text-black'>Slug: {slug}</h1>
    </>
  );
};





export async function getStaticProps(slugg) {


  const item = {};
 
  return {
    props: { item },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      // String variant:
      '/projekt/Back2Roots',
      // Object variant:
      { params: { slug: 'Back2Roots' } },
    ],
    fallback: true,
  }
}