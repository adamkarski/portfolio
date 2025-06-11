import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/kit/vite'

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [preprocess({}), vitePreprocess()],
  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback: null,
      precompress: false,
      strict: true
    }),
    paths: {
      base: dev ? '' : process.env.NODE_ENV === 'production' ? '/portfolio' : '',
    },
    prerender: {
      handleHttpError: 'ignore'
    }
  }
}

export default config