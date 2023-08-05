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
          label: "CrazyCrates",
          items: [
            'plugins/crazycrates/crazycrates-index',
            'plugins/crazycrates/crazycrates-faq',
            'plugins/crazycrates/crazycrates-commands',
            'plugins/crazycrates/crazycrates-placeholders',
            {
              type: 'category',
              label: 'Dev API',
              items: [
                'plugins/crazycrates/api/crazycrates-api-usage',
                'plugins/crazycrates/api/crazycrates-api-intro'
              ]
            },
            {
              type: 'category',
              label: 'Prizes',
              items: [
                'plugins/crazycrates/prizes/crazycrates-item-options',
                {
                  type: 'category',
                  label: 'Items',
                  items: [
                    'plugins/crazycrates/prizes/items/crazycrates-colored-leather',
                    'plugins/crazycrates/prizes/items/crazycrates-colored-potions',
                    'plugins/crazycrates/prizes/items/crazycrates-shields-banners',
                    'plugins/crazycrates/prizes/items/crazycrates-tipped-arrows',
                    'plugins/crazycrates/prizes/items/crazycrates-custom-heads',
                    'plugins/crazycrates/prizes/items/crazycrates-armor-trim'
                  ]
                }
              ]
            },
            {
              type: 'category',
              label: 'Crates',
              items: [
                'plugins/crazycrates/crates/crazycrates-types',
                'plugins/crazycrates/crates/crazycrates-chance-system',
                {
                  type: 'category',
                  label: 'Examples',
                  items: [
                    'plugins/crazycrates/crates/examples/crazycrates-cosmic-example',
                    'plugins/crazycrates/crates/examples/crazycrates-csgo-example',
                    'plugins/crazycrates/crates/examples/crazycrates-quad-example',
                    'plugins/crazycrates/crates/examples/crazycrates-quick-example'
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
             label: "Wiki",
             items: [
               'plugins/crazyenchantments/wiki/crazyenchantments-wiki-pluginSupport',
               'plugins/crazyenchantments/wiki/crazyenchantments-wiki-commands',
               'plugins/crazyenchantments/wiki/crazyenchantments-wiki-currency',
               'plugins/crazyenchantments/wiki/crazyenchantments-wiki-enchantments',
               'plugins/crazyenchantments/wiki/crazyenchantments-wiki-features',
               'plugins/crazyenchantments/wiki/crazyenchantments-wiki-items',
               'plugins/crazyenchantments/wiki/crazyenchantments-wiki-shields-banners'
             ]
            },
            {
              type: 'category',
              label: "Dev API",
              items: [
                'plugins/crazyenchantments/api/crazyenchantments-api-intro'
              ]
            }

            ]
        },
        {
          type: 'category',
          label: "CrazyEnvoys",
          items: [
            'plugins/crazyenvoys/crazyenvoys-index',
            'plugins/crazyenvoys/crazyenvoys-faq',
            'plugins/crazyenvoys/crazyenvoys-commands',
            'plugins/crazyenvoys/crazyenvoys-placeholders',
            {
              type: 'category',
              label: 'Dev API',
              items: [
                'plugins/crazyenvoys/api/crazyenvoys-api-usage',
                'plugins/crazyenvoys/api/crazyenvoys-api-intro'
              ]
            },
            {
              type: 'category',
              label: 'Prizes',
              items: [
                'plugins/crazyenvoys/prizes/crazyenvoys-item-options',
                {
                  type: 'category',
                  label: 'Items',
                  items: [
                    'plugins/crazyenvoys/prizes/items/crazyenvoys-shields-banners',
                  ]
                }
              ]
            },
            {
              type: 'category',
              label: 'Tiers',
              items: [
                'plugins/crazyenvoys/tiers/crazyenvoys-chance-system'
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
            'plugins/crazyvouchers/crazyvouchers-commands',
            'plugins/crazyvouchers/crazyvouchers-placeholders',
            'plugins/crazyvouchers/crazyvouchers-chance-system',
            {
              type: 'category',
              label: 'Dev API',
              items: [
                'plugins/crazyvouchers/api/crazyvouchers-api-usage',
                'plugins/crazyvouchers/api/crazyvouchers-api-intro'
              ]
            },
            {
              type: 'category',
              label: 'Prizes',
              items: [
                'plugins/crazyvouchers/prizes/crazyvouchers-item-options',
                {
                  type: 'category',
                  label: 'Items',
                  items: [
                    'plugins/crazyvouchers/prizes/items/crazyvouchers-colored-leather',
                    'plugins/crazyvouchers/prizes/items/crazyvouchers-colored-potions',
                    'plugins/crazyvouchers/prizes/items/crazyvouchers-shields-banners',
                    'plugins/crazyvouchers/prizes/items/crazyvouchers-tipped-arrows',
                    'plugins/crazyvouchers/prizes/items/crazyvouchers-custom-heads',
                    'plugins/crazyvouchers/prizes/items/crazyvouchers-armor-trim'
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