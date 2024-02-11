/*
When adding pages to the sidebar, You must use the "id" found in each .md file you add.

'plugins/crazycrates/crazycrates-faq' is considered the path while '/crates-faq' is the page id.

The build will fail if you type the wrong one.
*/
module.exports = {
  docs: [
    {
      type: 'link',
      label: 'PaperMC',
      href: 'https://papermc.io/'
    },
    {
      type: 'link',
      label: 'PurpurMC',
      href: 'https://purpurmc.org/'
    },
    {
      type: 'link',
      label: 'SimplyFlags',
      href: 'https://simplymc.art/flags/'
    },
    {
      type: 'link',
      label: 'Support Server',
      href: 'https://discord.gg/badbones-s-live-chat-182615261403283459'
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting_started/overview'
      ],
    },
    {
      type: 'category',
      label: 'Our Plugins',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: "BlockParticles",
          items: [
            'plugins/blockparticles/blockparticles-index'
          ]
        },
        {
          type: 'category',
          label: "CrazyAuctions",
          items: [
            'plugins/crazyauctions/crazyauctions-index',
            'plugins/crazyauctions/crazyauctions-faq',
            {
              type: 'category',
              label: 'Developers',
              items: [
                'plugins/crazyauctions/api/crazyauctions-api-usage',
                'plugins/crazyauctions/api/crazyauctions-api-intro'
              ]
            },
            {
              type: 'category',
              label: "Information",
              items: [
                'plugins/crazyauctions/info/crazyauctions-plugin-support',
                'plugins/crazyauctions/info/crazyauctions-translations',
                {
                  type: 'category',
                  label: 'Commands',
                  items: [
                    'plugins/crazyauctions/info/commands/crazyauctions-permissions-v1',
                    {
                      type: 'category',
                      label: 'Version 2',
                      items: [
                        'plugins/crazyauctions/info/commands/v2/crazyauctions-permissions-v2'
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          type: 'category',
          label: "ChatManager",
          items: [
            'plugins/chatmanager/chatmanager-index',
            'plugins/chatmanager/chatmanager-faq',
            {
              type: 'category',
              label: "Information",
              items: [
                'plugins/chatmanager/info/chatmanager-plugin-support',
                'plugins/chatmanager/info/chatmanager-placeholders',
                {
                  type: 'category',
                  label: 'Commands',
                  items: [
                    'plugins/chatmanager/info/commands/chatmanager-permissions'
                  ]
                },
                {
                  type: 'category',
                  label: 'Chat',
                  items: [
                      'plugins/chatmanager/info/chat/chatmanager-formatting',
                      'plugins/chatmanager/info/chat/chatmanager-join-quit',
                      'plugins/chatmanager/info/chat/chatmanager-chat-radius'
                  ]
                }
              ]
            }
          ]
        },
        {
          type: 'category',
          label: "CrazyCrates",
          items: [
            'plugins/crazycrates/crazycrates-index',
            'plugins/crazycrates/crazycrates-faq',
            {
              type: 'category',
              label: 'Developers',
              items: [
                'plugins/crazycrates/api/crazycrates-api-usage',
                'plugins/crazycrates/api/crazycrates-api-intro'
              ]
            },
            {
              type: 'category',
              label: "Information",
              items: [
                'plugins/crazycrates/info/crazycrates-plugin-support',
                'plugins/crazycrates/info/crazycrates-placeholders',
                {
                  type: 'category',
                  label: 'Commands',
                  items: [
                    'plugins/crazycrates/info/commands/crazycrates-permissions'
                  ]
                },
                {
                  type: 'category',
                  label: 'Prizes',
                  items: [
                    'plugins/crazycrates/info/prizes/crazycrates-item-options',
                    {
                      type: 'category',
                      label: 'Items',
                      items: [
                        'plugins/crazycrates/info/prizes/items/crazycrates-colored-leather',
                        'plugins/crazycrates/info/prizes/items/crazycrates-colored-potions',
                        'plugins/crazycrates/info/prizes/items/crazycrates-colored-maps',
                        'plugins/crazycrates/info/prizes/items/crazycrates-shields-banners',
                        'plugins/crazycrates/info/prizes/items/crazycrates-tipped-arrows',
                        'plugins/crazycrates/info/prizes/items/crazycrates-custom-items',
                        'plugins/crazycrates/info/prizes/items/crazycrates-custom-heads',
                        'plugins/crazycrates/info/prizes/items/crazycrates-armor-trim'
                      ]
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'Crates',
                  items: [
                    'plugins/crazycrates/info/crates/crazycrates-types',
                    'plugins/crazycrates/info/crates/crazycrates-chance-system',
                    {
                      type: 'category',
                      label: 'Examples',
                      items: [
                        'plugins/crazycrates/info/crates/examples/crazycrates-cosmiccrate-example',
                        'plugins/crazycrates/info/crates/examples/crazycrates-csgocrate-example',
                        'plugins/crazycrates/info/crates/examples/crazycrates-quadcrate-example',
                        'plugins/crazycrates/info/crates/examples/crazycrates-quickcrate-example',
                        'plugins/crazycrates/info/crates/examples/crazycrates-warcrate-example',
                        'plugins/crazycrates/info/crates/examples/crazycrates-casinocrate-example',
                        'plugins/crazycrates/info/crates/examples/crazycrates-quickcrate-example'
                      ]
                    }
                  ]
                }
              ]
             }
          ]
        },
        {
          type: 'category',
          label: "CrazyEnchantments",
          items: [
            'plugins/crazyenchantments/crazyenchantments-index',
            'plugins/crazyenchantments/crazyenchantments-faq',
            {
              type: 'category',
              label: "Developers",
              items: [
                'plugins/crazyenchantments/api/crazyenchantments-api-intro'
              ]
            },
            {
              type: 'category',
              label: 'ItemBuilder',
              items: [
                'plugins/crazyenchantments/items/crazyenchantments-options',
                {
                  type: 'category',
                  label: 'Types',
                  items: [
                    'plugins/crazyenchantments/items/types/crazyenchantments-shields-banners'
                  ]
                }
              ]
             },
            {
             type: 'category',
             label: "Information",
             items: [
              {
                type: 'category',
                label: 'Commands',
                items: [
                  'plugins/crazyenchantments/info/commands/crazyenchantments-permissions'
                ]
              },
               'plugins/crazyenchantments/info/crazyenchantments-plugin-support',
               'plugins/crazyenchantments/info/crazyenchantments-enchantments',
               'plugins/crazyenchantments/info/crazyenchantments-currency',
               'plugins/crazyenchantments/info/crazyenchantments-features'
             ]
            },
          ]
        },
        {
          type: 'category',
          label: "CrazyEnvoys",
          items: [
            'plugins/crazyenvoys/crazyenvoys-index',
            'plugins/crazyenvoys/crazyenvoys-faq',
            {
              type: 'category',
              label: 'Developers',
              items: [
                'plugins/crazyenvoys/api/crazyenvoys-api-usage',
                'plugins/crazyenvoys/api/crazyenvoys-api-intro'
              ]
            },
            {
              type: 'category',
              label: 'Information',
              items: [
                'plugins/crazyenvoys/info/crazyenvoys-plugin-support',
                'plugins/crazyenvoys/info/crazyenvoys-placeholders',
                'plugins/crazyenvoys/info/crazyenvoys-translations',
                {
                  type: 'category',
                  label: 'Commands',
                  items: [
                    'plugins/crazyenvoys/info/commands/crazyenvoys-permissions'
                  ]
                },
                {
                  type: 'category',
                  label: 'Prizes',
                  items: [
                    'plugins/crazyenvoys/info/prizes/crazyenvoys-item-options',
                    {
                      type: 'category',
                      label: 'Items',
                      items: [
                        'plugins/crazyenvoys/info/prizes/items/crazyenvoys-colored-leather',
                        'plugins/crazyenvoys/info/prizes/items/crazyenvoys-colored-potions',
                        'plugins/crazyenvoys/info/prizes/items/crazyenvoys-colored-maps',
                        'plugins/crazyenvoys/info/prizes/items/crazyenvoys-shields-banners',
                        'plugins/crazyenvoys/info/prizes/items/crazyenvoys-tipped-arrows',
                        'plugins/crazyenvoys/info/prizes/items/crazyenvoys-custom-items',
                        'plugins/crazyenvoys/info/prizes/items/crazyenvoys-custom-heads',
                        'plugins/crazyenvoys/info/prizes/items/crazyenvoys-armor-trim'
                      ]
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'Tiers',
                  items: [
                    'plugins/crazyenvoys/info/tiers/crazyenvoys-chance-system'
                  ]
                }
              ]
            }
          ]
        },
        {
          type: 'category',
          label: "CrazyVouchers",
          items: [
            'plugins/crazyvouchers/crazyvouchers-index',
            'plugins/crazyvouchers/crazyvouchers-faq',
            {
              type: 'category',
              label: 'Developers',
              items: [
                'plugins/crazyvouchers/api/crazyvouchers-api-usage',
                'plugins/crazyvouchers/api/crazyvouchers-api-intro'
              ]
            },
            {
              type: 'category',
              label: 'Information',
              items: [
                'plugins/crazyvouchers/info/crazyvouchers-placeholders',
                'plugins/crazyvouchers/info/crazyvouchers-chance-system',
                {
                  type: 'category',
                  label: 'Commands',
                  items: [
                    'plugins/crazyvouchers/info/commands/crazyvouchers-permissions'
                  ]
                },
                {
                  type: 'category',
                  label: 'Examples',
                  items: [
                    'plugins/crazyvouchers/info/examples/voucher-example',
                    'plugins/crazyvouchers/info/examples/voucher-example-arg',
                    'plugins/crazyvouchers/info/examples/player-head-example'
                  ]
                },
                {
                  type: 'category',
                  label: 'Prizes',
                  items: [
                    'plugins/crazyvouchers/info/prizes/crazyvouchers-item-options',
                    {
                      type: 'category',
                      label: 'Items',
                      items: [
                        'plugins/crazyvouchers/info/prizes/items/crazyvouchers-colored-leather',
                        'plugins/crazyvouchers/info/prizes/items/crazyvouchers-colored-potions',
                        'plugins/crazyvouchers/info/prizes/items/crazyvouchers-colored-maps',
                        'plugins/crazyvouchers/info/prizes/items/crazyvouchers-shields-banners',
                        'plugins/crazyvouchers/info/prizes/items/crazyvouchers-tipped-arrows',
                        'plugins/crazyvouchers/info/prizes/items/crazyvouchers-custom-items',
                        'plugins/crazyvouchers/info/prizes/items/crazyvouchers-custom-heads',
                        'plugins/crazyvouchers/info/prizes/items/crazyvouchers-armor-trim'
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
};