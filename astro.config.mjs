// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import topics from 'starlight-sidebar-topics'

import vue from '@astrojs/vue';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
    site: 'https://docs.crazycrew.us',

    image: {
      responsiveStyles: true,
      layout: "constrained",
      domains: ["cdn.ryderbelserion.com"],
    },

    adapter: cloudflare(),

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
                  icon: "starlight",
                  items: [
                      "getting_started/overview",
                      "getting_started/platforms"
                  ],
              },
              {
                  id: "crazycrates",
                  label: "CrazyCrates",
                  link: "/mods/crazycrates/",
                  icon: "crazycrates",
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
                                      "mods/crazycrates/reference/commands",
                                      {
                                          label: "Prizes",
                                          items: [
                                              "mods/crazycrates/reference/prizes/weight-system",
                                              {
                                                  label: "Items",
                                                  items: [
                                                      "mods/crazycrates/reference/prizes/items/custom-items",
                                                      "mods/crazycrates/reference/prizes/items/potions",
                                                      {
                                                          label: "Cosmetic",
                                                          items: [
                                                              "mods/crazycrates/reference/prizes/items/cosmetic/heads",
                                                              "mods/crazycrates/reference/prizes/items/cosmetic/dyes"
                                                          ]
                                                      },
                                                      {
                                                          label: "Tools",
                                                          items: [
                                                              "mods/crazycrates/reference/prizes/items/tools/patterns",
                                                              "mods/crazycrates/reference/prizes/items/tools/trim"
                                                          ]
                                                      }
                                                  ]
                                              }
                                          ]
                                      }
                                  ]
                              },
                          ],
                      },
                      {
                          label: "Developers",
                          items: [
                              "mods/crazycrates/dev/index",
                              "mods/crazycrates/dev/usage"
                          ],
                      }
                  ],
              },
              {
                  id: "crazyenchantments",
                  label: "CrazyEnchantments",
                  link: "/mods/crazyenchantments/",
                  icon: "crazyenchantments",
                  items: [
                      {
                          label: "Administration",
                          autogenerate: {
                              directory: "mods/crazyenchantments/"
                          }
                      }
                  ]
              },
              {
                  id: "crazyauctions",
                  label: "CrazyAuctions",
                  link: "/mods/crazyauctions/",
                  icon: "crazyauctions",
                  items: [
                      {
                          label: "Administration",
                          items: [
                              "mods/crazyauctions/faq",
                              "mods/crazyauctions/support",
                              {
                                  label: "References",
                                  items: [
                                      "mods/crazyauctions/reference/commands",
                                      "mods/crazyauctions/reference/translations"
                                  ]
                              }
                          ]
                      }
                  ]
              },
              {
                  id: "crazyenvoys",
                  label: "CrazyEnvoys",
                  link: "/mods/crazyenvoys/",
                  icon: "crazyenvoys",
                  items: [
                      {
                          label: "Administration",
                          autogenerate: {
                              directory: "mods/crazyenvoys/"
                          }
                      }
                  ]
              },
              {
                  id: "crazyvouchers",
                  label: "CrazyVouchers",
                  link: "/mods/crazyvouchers/",
                  icon: "crazyvouchers",
                  items: [
                      {
                          label: "Administration",
                          items: [
                              "mods/crazyvouchers/faq",
                              "mods/crazyvouchers/support",
                              {
                                  label: "References",
                                  items: [
                                      "mods/crazyvouchers/reference/commands",
                                      "mods/crazyvouchers/reference/placeholders",
                                      {
                                          label: "Items",
                                          items: [
                                              "mods/crazyvouchers/reference/prizes/items/custom-items",
                                              "mods/crazyvouchers/reference/prizes/items/potions",
                                              {
                                                  label: "Cosmetic",
                                                  items: [
                                                      "mods/crazyvouchers/reference/prizes/items/cosmetic/heads",
                                                      "mods/crazyvouchers/reference/prizes/items/cosmetic/dyes"
                                                  ]
                                              },
                                              {
                                                  label: "Tools",
                                                  items: [
                                                      "mods/crazyvouchers/reference/prizes/items/tools/patterns",
                                                      "mods/crazyvouchers/reference/prizes/items/tools/trim"
                                                  ]
                                              }
                                          ]
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          label: "Developers",
                          items: [
                              "mods/crazyvouchers/dev/index",
                              {
                                  slug: "mods/crazyvouchers/dev/usage",
                                  badge: {
                                      text: 'Stub',
                                      variant: 'caution'
                                  }
                              }
                          ],
                      }
                  ]
              },
              {
                  id: "chatmanager",
                  label: "ChatManager",
                  link: "/mods/chatmanager/",
                  icon: "open-book",
                  items: [
                      {
                          label: "Administration",
                          autogenerate: {
                              directory: "mods/chatmanager/"
                          }
                      }
                  ]
              },
              {
                  id: "blockparticles",
                  label: "BlockParticles",
                  link: "/mods/blockparticles/",
                  icon: "blockparticles",
                  items: [
                      {
                          label: "Administration",
                          autogenerate: {
                              directory: "mods/blockparticles/"
                          }
                      }
                  ]
              }
          ])
      ]
      }), vue()]
});