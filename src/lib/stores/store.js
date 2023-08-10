
import { writable } from 'svelte/store';

export const modal = writable({ open: false, title: '', message: '', button: 'OK' , action: 'close'});

export const tag = writable("all");
export const portfolioCount = writable(1);
export const portfolios_all = writable({});

export const portfolios_all = writable({});

export const strapiURL          = '//strapi.adamkarski.art/';
export const strapiTags         = '//strapi.adamkarski.art/tags';
export const strapiPorfolios    = '//strapi.adamkarski.art/portfolios/';









