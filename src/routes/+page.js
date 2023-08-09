
import {portfolios_all } from '$lib/stores/store.js';
let _portfolios={};
portfolios_all.subscribe((value) => {
    _portfolios = value;
// console.log(_portfolios);
// console.log("_portfolios");
});

/** @type {import('./$types').EntryGenerator} */
export function entries(_portfolios) {
    
    for (let field of _portfolios) {
        // console.log(field)
        
    }

    return [
        // { slug: 'hello-world' },
        // { slug: 'another-blog-post' }
    ];
}

export const prerender = true;
