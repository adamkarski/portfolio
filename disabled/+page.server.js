import { strapiPorfolios } from '$lib/stores/store.js';

// Funkcja entries informuje SvelteKit o wszystkich możliwych wartościach [slug]
// podczas prerenderowania
export async function entries() {
  // Pobieramy dane bezpośrednio z API podczas budowania
  try {
    // Używamy node-fetch zamiast przeglądarki fetch
    const fetch = await import('node-fetch').then(mod => mod.default);
    const response = await fetch(strapiPorfolios);
    const portfolios = await response.json();
    
    if (portfolios.data && Array.isArray(portfolios.data)) {
      return portfolios.data.map(portfolio => {
        // Sprawdzamy, czy slug jest w attributes czy bezpośrednio w portfolio
        const slug = portfolio.attributes?.slug || portfolio.slug;
        
        if (!slug) {
          console.error('Missing slug for portfolio item:', portfolio);
          return null;
        }
        
        return { slug };
      }).filter(Boolean); // Usuwamy null wartości
    }
    
    return [];
  } catch (error) {
    console.error('Error fetching portfolio entries for prerendering:', error);
    // Jeśli wystąpi błąd, zwracamy pustą tablicę
    return [];
  }
}