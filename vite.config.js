import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()]
});


// const config = {
// 	server: {
// 	  proxy: {
// 		'/api': {
// 		  target: process.env.VITE_DEV_PROXY || 'http://localhost:8080',
// 		  secure: false,
// 		  changeOrigin: true,
// 		}
// 	  }
// 	}
// }