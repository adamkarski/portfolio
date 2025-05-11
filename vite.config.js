import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import TurboConsole from "vite-plugin-turbo-console";



export default defineConfig({
	plugins: [sveltekit(),TurboConsole()]
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