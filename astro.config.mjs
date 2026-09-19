// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://samay10.github.io',
	// Use '/samay-portfolio' for project Pages; '/' for username.github.io
	base: '/samay-portfolio/',
	vite: {
		plugins: [tailwindcss()],
	},
});
