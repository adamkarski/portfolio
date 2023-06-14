import conf from '../lib/utils'

export async function getPortfolioBySlug(slug){
    const res = await fetch(conf.api_url + "/portfolios/?slug="+slug);
    const portfolio = await res.json();
    return portfolio
}
export async function getPortfolioSlugs(){
  const res = await fetch(conf.api_url + "/portfolios/");
  const slugs = await res.json();
  return slugs
}

async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(`${conf.api_url}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}

export async function getAllPortfolio() {
    const data = fetchAPI(`
      {
        portfolio {
          slug
        }
      }
    `)
    return data?.allPosts
  }

  export async function getPreviewPostBySlug(slug) {
    const data = await fetchAPI(
      `
    query PostBySlug($where: JSON) {
      posts(where: $where) {
        slug
      }
    }
    `,
      {
        variables: {
          where: {
            slug,
          },
        },
      }
    )
    return data?.posts[0]
  }