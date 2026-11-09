// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import cloudflare from '@astrojs/cloudflare';
import topics from 'starlight-sidebar-topics'

import vue from '@astrojs/vue';

import icon from "astro-icon";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    site: 'https://docs.crazycrew.us',

    adapter: cloudflare({
        prerenderEnvironment: 'node',
        imageService: "cloudflare"
    }),

    output: 'server',

    vite: {
        build: {
            rolldownOptions: {
                external: [
                    '@bruits/satteri-wasm32-wasi'
                ]
            }
        }
    },

    image: {
        responsiveStyles: true,
        layout: "constrained",
        domains: ["assets.crazycrew.us"],
    },

    integrations: [starlight({
        title: 'CrazyCrew Docs',

        customCss: [
            './src/styles/custom.css',
        ],

        favicon: 'https://assets.crazycrew.us/crazycrew/branding/crazycrew_logo.32.svg',

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
            },
            {
                icon: 'patreon',
                label: 'Kofi',
                href: 'https://ko-fi.com/ryderbelserion'
            }
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
                    id: 'crazycrew',
                    label: 'Home',
                    link: '/getting_started/overview/',
                    icon: 'starlight',
                    items: [
                        'getting_started/overview',
                        'getting_started/platforms',
                    ],
                },
                {
                    id: 'crazycrates',
                    label: 'CrazyCrates',
                    link: '/mods/crazycrates/',
                    icon: 'crazycrates',
                    items: [
                        { slug: 'mods/crazycrates', label: 'Getting Started' },
                        'mods/crazycrates/reference/commands',
                        'mods/crazycrates/reference/placeholders',
                        'mods/crazycrates/faq',
                        'mods/crazycrates/support',
                        {
                            label: 'Prize Configuration',
                            collapsed: true,
                            items: [
                                'mods/crazycrates/reference/prizes/weight-system',
                                'mods/crazycrates/reference/prizes/items/custom-items',
                                'mods/crazycrates/reference/prizes/items/potions',
                                'mods/crazycrates/reference/prizes/items/cosmetic/heads',
                                'mods/crazycrates/reference/prizes/items/cosmetic/dyes',
                                'mods/crazycrates/reference/prizes/items/tools/patterns',
                                'mods/crazycrates/reference/prizes/items/tools/trim',
                                'mods/crazycrates/reference/prizes/settings/broadcast',
                            ],
                        },
                        {
                            label: 'Menus',
                            collapsed: true,
                            items: [
                                { slug: 'mods/crazycrates/reference/menus/main/index', badge: { text: 'Stub', variant: 'caution' } },
                                'mods/crazycrates/reference/menus/buttons/index',
                                'mods/crazycrates/reference/menus/main/items/cosmetic/heads',
                            ],
                        },
                        {
                            label: 'Developers',
                            collapsed: true,
                            items: [
                                'mods/crazycrates/dev/index',
                                'mods/crazycrates/dev/usage',
                            ],
                        },
                        'mods/crazycrates/contributing',
                    ],
                },
                {
                    id: 'crazyenchantments',
                    label: 'CrazyEnchantments',
                    link: '/mods/crazyenchantments/',
                    icon: 'crazyenchantments',
                    items: [
                        { slug: 'mods/crazyenchantments', label: 'Getting Started' },
                        'mods/crazyenchantments/guides/features',
                        'mods/crazyenchantments/misc/enchantments',
                        'mods/crazyenchantments/commands/permissions',
                        'mods/crazyenchantments/faq',
                        'mods/crazyenchantments/misc/plugin-support',
                        'mods/crazyenchantments/misc/currency',
                        'mods/crazyenchantments/misc/translations',
                        {
                            label: 'Item Configuration',
                            collapsed: true,
                            items: [
                                'mods/crazyenchantments/guides/items/options',
                                'mods/crazyenchantments/guides/items/types/shields-banners',
                            ],
                        },
                        'mods/crazyenchantments/guides/api/intro',
                    ],
                },
                {
                    id: 'crazyauctions',
                    label: 'CrazyAuctions',
                    link: '/mods/crazyauctions/',
                    icon: 'crazyauctions',
                    items: [
                        { slug: 'mods/crazyauctions', label: 'Getting Started' },
                        'mods/crazyauctions/reference/commands',
                        'mods/crazyauctions/reference/translations',
                        'mods/crazyauctions/faq',
                        'mods/crazyauctions/support',
                        'mods/crazyauctions/contributing',
                    ],
                },
                {
                    id: 'crazyenvoys',
                    label: 'CrazyEnvoys',
                    link: '/mods/crazyenvoys/',
                    icon: 'crazyenvoys',
                    items: [
                        { slug: 'mods/crazyenvoys', label: 'Getting Started' },
                        'mods/crazyenvoys/reference/commands',
                        'mods/crazyenvoys/reference/placeholders',
                        'mods/crazyenvoys/reference/translations',
                        'mods/crazyenvoys/faq',
                        'mods/crazyenvoys/support',
                        {
                            label: 'Prize Configuration',
                            collapsed: true,
                            items: [
                                'mods/crazyenvoys/reference/tiers/chance-system',
                                { slug: 'mods/crazyenvoys/reference/prizes/items/custom-items', badge: { text: 'Stub', variant: 'caution' } },
                                'mods/crazyenvoys/reference/prizes/items/potions',
                                'mods/crazyenvoys/reference/prizes/items/cosmetic/heads',
                                'mods/crazyenvoys/reference/prizes/items/cosmetic/dyes',
                                'mods/crazyenvoys/reference/prizes/items/tools/patterns',
                                'mods/crazyenvoys/reference/prizes/items/tools/trim',
                            ],
                        },
                        {
                            label: 'Developers',
                            collapsed: true,
                            items: [
                                'mods/crazyenvoys/dev/index',
                                { slug: 'mods/crazyenvoys/dev/usage', badge: { text: 'Stub', variant: 'caution' } },
                            ],
                        },
                        'mods/crazyenvoys/contributing',
                    ],
                },
                {
                    id: 'crazyvouchers',
                    label: 'CrazyVouchers',
                    link: '/mods/crazyvouchers/',
                    icon: 'crazyvouchers',
                    items: [
                        { slug: 'mods/crazyvouchers', label: 'Getting Started' },
                        'mods/crazyvouchers/reference/commands',
                        'mods/crazyvouchers/reference/placeholders',
                        'mods/crazyvouchers/faq',
                        'mods/crazyvouchers/support',
                        {
                            label: 'Voucher Configuration',
                            collapsed: true,
                            items: [
                                'mods/crazyvouchers/reference/weight-system',
                                'mods/crazyvouchers/reference/items/custom-items',
                                'mods/crazyvouchers/reference/items/potions',
                                'mods/crazyvouchers/reference/items/cosmetic/heads',
                                'mods/crazyvouchers/reference/items/cosmetic/dyes',
                                'mods/crazyvouchers/reference/items/tools/patterns',
                                'mods/crazyvouchers/reference/items/tools/trim',
                            ],
                        },
                        {
                            label: 'Developers',
                            collapsed: true,
                            items: [
                                'mods/crazyvouchers/dev/index',
                                'mods/crazyvouchers/dev/usage',
                            ],
                        },
                        'mods/crazyvouchers/contributing',
                    ],
                },
                {
                    id: 'chatmanager',
                    label: 'ChatManager',
                    link: '/mods/chatmanager/',
                    icon: 'open-book',
                    items: [
                        { slug: 'mods/chatmanager', label: 'Getting Started' },
                        'mods/chatmanager/commands/permissions',
                        'mods/chatmanager/guides/placeholders',
                        'mods/chatmanager/faq',
                        'mods/chatmanager/misc/plugin-support',
                        {
                            label: 'Chat Configuration',
                            collapsed: true,
                            items: [
                                'mods/chatmanager/guides/chat/formatting',
                                'mods/chatmanager/guides/chat/join-quit',
                                'mods/chatmanager/guides/chat/radius',
                            ],
                        },
                    ],
                },
                {
                    id: 'blockparticles',
                    label: 'BlockParticles',
                    link: '/mods/blockparticles/',
                    icon: 'blockparticles',
                    items: [
                        { slug: 'mods/blockparticles', label: 'Getting Started' },
                        'mods/blockparticles/commands/permissions',
                        'mods/blockparticles/misc/plugin-support',
                        'mods/blockparticles/guides/api/intro',
                    ],
                },
            ])
        ]
    }), vue(), icon(), mdx()]
});