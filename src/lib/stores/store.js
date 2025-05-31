
import { writable } from 'svelte/store';

export const modal = writable({ open: false, title: 'Wystąpił błąd', message: '', button: 'OK' , action: 'close'});
export const visibleMessage =  writable("initial");
export const tag = writable("all");
export const portfolioCount = writable(1);
export const portfolios_all = writable(null);
export const three_state       = writable('play');
export const three_page        = writable('realizacje');
export const img_3d             = writable([]);
export const tagsAll = writable(null); // globalny dostęp


// export const host = '//localhost:1337';
export const host            = 'xx';
export const strapiURL       = 'https://app-strapi.onrender.com'
export const strapiTags         = strapiURL+'/api/tags?populate=*';
export const strapiPorfolios    = strapiURL+'/api/portfolios?populate=*';










