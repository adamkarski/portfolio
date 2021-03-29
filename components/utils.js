const baseUrl = process.env.BASE_URL
async function fetchQuery(path, params = null) {
  let url
  if (params !== null) {
    url = `${baseUrl}/${path}/${params}`
  } else {
    url = `${baseUrl}/${path}`
  }
  const response = await fetch(`${url}`)
  const data = await response.json()
  return data
}
const api_url ='http://strapi.stream404.art.pl';
const host = typeof window !== 'undefined' && window.location.hostname ? window.location.hostname : '';

export default { baseUrl, fetchQuery,api_url, host }