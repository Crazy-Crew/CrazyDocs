// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import topics from 'starlight-sidebar-topics'

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.crazycrew.us',

	integrations: [
		starlight({
			title: 'CrazyCrew Docs',

			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Crazy-Crew'},
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/badbones-s-live-chat-182615261403283459'},
				{ icon: 'patreon', label: 'Kofi', href: 'https://ko-fi.com/ryderbelserion' }
			],

			lastUpdated: true,
			editLink: {
				baseUrl: 'https://github.com/Crazy-Crew/CrazyDocs/edit/main/',
			},

			plugins: [
				topics([
					{
						id: "paper",
						label: "Paper",
						link: "https://papermc.io/",
						icon: "paper"
					},
					{
						id: "purpur",
						label: "Purpur",
						link: "https://purpurmc.org/",
						icon: "information"
					},
					{
						id: 'apex',
						label: 'ApexHosting',
						link: 'https://billing.apexminecrafthosting.com/aff.php?aff=5511',
						icon: "information"
					},
					{
						id: "crux",
						label: "Getting Started",
						link: "/getting_started/overview",
						icon: "information",
						items: [
							"getting_started/overview"
						],
					}
				])
			]
		})
	]
});