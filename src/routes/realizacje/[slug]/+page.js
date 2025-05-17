
import { strapiURL, strapiPorfolios } from '$lib/stores/store.js';

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
  const slug = params.slug;
  const apiURL = `${strapiURL}/api/portfolios?pagination[withCount]=false&populate=Laptop_Tablet_Mobile&filters[slug]=${slug}`;
  
  try {
    // Pobierz dane szczegółowe projektu
    const response = await fetch(apiURL);
    const portfolioData = await response.json();
    
    // Pobierz wszystkie projekty do sekcji "Zobacz również inne projekty"
    const allPortfoliosResponse = await fetch(strapiPorfolios);
    const allPortfolios = await allPortfoliosResponse.json();
    
    // Filtruj projekty, aby wykluczyć bieżący
    const otherProjects = allPortfolios.data ? 
      allPortfolios.data.filter(item => item.slug !== slug).slice(0, 6) : 
      [];
    
    return {
      portfolio: portfolioData.data && portfolioData.data.length > 0 ? portfolioData.data[0] : null,
      otherProjects: otherProjects
    };
  } catch (error) {
    console.error('Error fetching portfolio data:', error);
    return {
      portfolio: null,
      otherProjects: []
    };
  }
}


// Włączamy prerenderowanie dla lepszego SEO
export const prerender = true;