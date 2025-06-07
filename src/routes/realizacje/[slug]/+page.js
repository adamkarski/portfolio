// /Users/tosh/Documents/PlatformIO/Projects/portfolio/src/routes/realizacje/[slug]/+page.js
import { strapiURL } from '$lib/stores/store.js'; // Upewnij się, że strapiURL to pełny URL do Twojego API
import { error } from '@sveltejs/kit';

export function load({ params }) {
    return {
      slug: params.slug
    };
  }

export const prerender = true;
