
import { writable } from 'svelte/store';

export const modal = writable({ open: false, title: 'Wystąpił błąd', message: '', button: 'OK' , action: 'close'});
export const visibleMessage =  writable("initial");
export const tag = writable("all");
export const portfolioCount = writable(1);
export const portfolios_all = writable({});
export const three_state       = writable('play');
export const three_page        = writable('realizacje');
export const img_3d             = writable([]);


// export const host = '//localhost:1337';
export const host            = '//strapi.adamkarski.art';
export const strapiURL       = host+'/api'
export const strapiTags         = strapiURL+'/tags?populate=*';
export const strapiPorfolios    = strapiURL+'/portfolios?populate=*';









