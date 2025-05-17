import { strapiPorfolios } from '$lib/stores/store.js';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  try {
    const response = await fetch(strapiPorfolios);
    const portfolios = await response.json();
    
    return {
      portfolios: portfolios.data || []
    };
  } catch (error) {
    console.error('Error fetching portfolio items:', error);
    return {
      portfolios: []
    };
  }
}

export const prerender = true;