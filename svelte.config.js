import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/kit/vite'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess({ }),
  kit: {
    // vite: {
    //   optimizeDeps: {
    //     include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep']
    //   }
    //   // plugins: []
    // },
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
      precompress: false,
      strict: true,
      outDir: 'build',
      prerender: { enabled: true, handleHttpError: 'ignore'},
	  ssr: true,
      vite: {
        build: {
          rollupOptions: {
            output: {
              manualChunks: undefined,
              cssCodeSplit: false,
              outDir: 'build',
            },
          },
        },
      },
    }),
  },
  preprocess: vitePreprocess(),
}

export default config
