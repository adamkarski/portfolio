const baseUrl = process.env.BASE_URL
const api_url ='http://strapi.adamkarski.art';
const host = typeof window !== 'undefined' && window.location.hostname ? window.location.hostname : '';
const PageTitle ='Zbigniew Adam Karski - Portfolio'



export function getStrapiMedia(media) {  
 // convert url in link image etc for strapi API 
  const imageUrl = media.url.startsWith("/")
    ? api_url(media.url)
    : media.url;
  return imageUrl;
//   Usage   href={getStrapiMedia(global.favicon)} 

}


export default { baseUrl, api_url, host, PageTitle }  