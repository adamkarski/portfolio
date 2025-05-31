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
            data: {
                satus: 'success',
                portfolios: portfolios.data || [], // portfolios.data jeśli API tak zwraca
                tags: tags.data || [] // tags.data jeśli API tak zwraca
            }
        };
    } catch (error) {
        console.error("Błąd podczas ładowania danych layoutu:", error);
        return {
            data: {
                error: error,
                portfolios: [],
                tags: []
            },
            // Możesz też zwrócić status błędu, jeśli chcesz go obsłużyć globalnie
            // error: new Error('Nie udało się załadować danych layoutu'),
            // status: 500
        };
    }
}
