import adapter from '@sveltejs/adapter-auto';
import json from '@rollup/plugin-json'  


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		target: '#svelte'
	},
	plugins: [
		json({
		  compact: true
		}),
	  ]
};


export default config;
