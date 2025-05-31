import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      fallback: 'index.html',
      precompress: false,
      strict: true,
      prerender: {
        enabled: true,
        handleHttpError: 'ignore'
      }
    }),

    paths: {
      base: ''
    }
  }
};

export default config;
