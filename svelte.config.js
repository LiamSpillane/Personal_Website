import adapter from '@sveltejs/adapter-auto';
import { importAssets } from 'svelte-preprocess-import-assets';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		importAssets()
	],
	kit: {
		adapter: adapter()
	}
};

export default config;
