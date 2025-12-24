// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Atlas',
			logo: {
				src: './public/favicon.svg'
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Crazy-Crew' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/badbones-s-live-chat-182615261403283459' },
				{ icon: 'star', label: 'Kofi', href: 'https://ko-fi.com/ryderbelserion' }
			],
			sidebar: [
				{
					label: 'Plugs',
					items: [
						{ label: 'Paper', link: 'https://papermc.io/' },
						{ label: 'Purpur', link: 'https://purpurmc.org/' },
						{ label: 'Apex', link: 'https://billing.apexminecrafthosting.com/aff.php?aff=5511' }
					]
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});