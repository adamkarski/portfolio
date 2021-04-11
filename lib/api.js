import conf from '../lib/utils'

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

export async function getAllPostBySlug(slug){

    console.log('slug api executed');
    const res = await fetch(conf.api_url + "/portfolios/?slug="+slug);
    const items = await res.json();
        return
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