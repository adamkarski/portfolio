
import { strapiTags, portfolios_all, strapiURL } from '$lib/stores/store.js';


/** @type {import('./$types').LayoutLoad} */
export async function load({ fetch }) {

    try {
        const res = await fetch(strapiURL + '/api/tags?populate=*');
        const json = await res.json();
            return {
            data: {
                tags: json.data,
            }
            
        };
    } catch (error) {
        console.error('[layout] Error fetching tags:', error);
        return {
            data: {
                tags: []
            }
        };
    }
    try {
        const res = await fetch(strapiURL + '/api/portfolios?populate=*');
        const json = await res.json();
            return {
            data: {
                portfolios_all: json.data,
            }
            
        };
    } catch (error) {
        console.error('[layout] Error fetching tags:', error);
        return {
            data: {
                portfolios_all: []
            }
        };
    }
}