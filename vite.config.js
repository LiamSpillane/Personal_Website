import { sveltekit } from '@sveltejs/kit/vite';
import { searchForWorkspaceRoot } from 'vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
		fs:	{
			allow: [
				searchForWorkspaceRoot(process.cwd()),
				'C:/Users/123li/OneDrive/Documents/Personal Website/Personal_Website/static'
			]
		}
	}
};

export default config;
