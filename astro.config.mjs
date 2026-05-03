// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import topics from 'starlight-sidebar-topics'

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
    site: 'https://docs.crazycrew.us',

    image: {
        responsiveStyles: true,
        layout: "constrained",
        domains: ["cdn.ryderbelserion.com"],
    },

    integrations: [starlight({
        title: 'CrazyCrew Docs',

        customCss: [
            './src/styles/custom.css',
        ],

        favicon: 'https://assets.crazycrew.us/crazycrew/branding/crazycrew_logo.32.svg',

        social: [
            { icon: 'github', label: 'GitHub', href: 'https://github.com/Crazy-Crew'},
            { icon: 'discord', label: 'Discord', href: 'https://discord.gg/badbones-s-live-chat-182615261403283459'},
            { icon: 'patreon', label: 'Kofi', href: 'https://ko-fi.com/ryderbelserion' }
        ],

        lastUpdated: true,
        editLink: {
            baseUrl: 'https://github.com/Crazy-Crew/CrazyDocs/edit/main/',
        },

        credits: true,

        components: {
            // Override the default `Sidebar` component with a custom one.
            Sidebar: './src/components/Sidebar.astro',
        },

        plugins: [
            topics([
                {
                    id: "crazycrew",
                    label: "Home",
                    link: "/getting_started/overview/",
                    icon: "information",
                    items: [
                        "getting_started/overview"
                    ],
                },
                {
                    id: "crazycrates",
                    label: "CrazyCrates",
                    link: "/mods/crazycrates/",
                    icon: "open-book",
                    items: [
                        {
                            label: "Administration",
                            items: [
                                "mods/crazycrates/faq",
                                "mods/crazycrates/support",
                                {
                                    label: "Reference",
                                    items: [
                                        "mods/crazycrates/reference/placeholders",
                                        "mods/crazycrates/reference/commands"
                                    ]
                                },
                            ],
                        },
                        {
                            label: "Developers",
                            items: [],
                        }
                    ],
                }
            ])
        ]
		}), vue()]
});