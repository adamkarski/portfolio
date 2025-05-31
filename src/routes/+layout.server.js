// /Users/tosh/Documents/PlatformIO/Projects/portfolio/src/routes/+layout.js
// lub +layout.server.js dla logiki tylko serwerowej/build-time
import { strapiURL } from '$lib/stores/store.js'; // Załóżmy, że to jest bazowy URL API
                                                // a konkretne endpointy to np. /api/portfolios

export async function load({ fetch }) {
    try {
        // Endpoint dla wszystkich portfolio, np. z $lib/stores/store.js jako strapiPorfoliosUrl
        const portfolioResponse = await fetch(`${strapiURL}/api/portfolios?populate=*`); // populate=deep lub określ potrzebne pola
        const portfolios = await portfolioResponse.json();

        // Endpoint dla wszystkich tagów, np. z $lib/stores/store.js jako strapiTagsUrl
        const tagsResponse = await fetch(`${strapiURL}/api/tags?populate=*`); // Dostosuj endpoint i populate
        const tags = await tagsResponse.json();

        
        console.log(portfolios)
        // console.log(tags)
        return {
            // Dane będą dostępne w komponentach child i w potomnych `load` funkcjach przez `await parent()`
            status: 'success', // Poprawiona literówka satus -> status
            portfolios: portfolios.data || [],
            tags: tags.data || []
        };
    } catch (error) {
        console.error("Błąd podczas ładowania danych layoutu:", error);
        return {
            status: 'error',
            error: error.message, // Przekazujemy komunikat błędu dla lepszego debugowania
            portfolios: [],
            tags: [],
            // Możesz też zwrócić status błędu, jeśli chcesz go obsłużyć globalnie
            // error: new Error('Nie udało się załadować danych layoutu'),
            // status: 500
        };
    }
}
