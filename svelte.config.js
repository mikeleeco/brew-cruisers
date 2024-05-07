import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-netlify";
// shifted to static for use on github pages https://kit.svelte.dev/docs/adapters
// shifted to netlify after fail https://github.com/mikeleeco/mikeleeco.github.com/pull/5
// import adapter from '@sveltejs/adapter-static';
import { mdsvex } from "mdsvex";
import { mdsvexConfig } from "./mdsvex.config.js";
import { resolve } from 'path';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ...mdsvexConfig.extensions],
	preprocess: [
		mdsvex(mdsvexConfig),
		vitePreprocess()
	],
	kit: {
		adapter: adapter(), alias: {
			$stores: resolve('./src/stores/'),
			$components: resolve('./src/lib/components/'),
			$prisma: resolve('./src/prisma/'),
			$helpers: resolve('./src/helpers/')
		},
	},
};

export default config;
