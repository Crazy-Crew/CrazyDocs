// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			favicon: '/favicon.png',
			title: 'CrazyCrew',
			logo: {
				src: './src/assets/pumpkin.png',
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/Crazy-Crew'
				},
				{
					icon: 'discord',
					label: 'Discord',
					href: 'https://discord.gg/badbones-s-live-chat-182615261403283459'
				}
			],
			sidebar: [
				/*{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},*/
			],
		}),
	],
});