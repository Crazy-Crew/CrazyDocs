/*
When adding pages to the sidebar, You must use the "id" found in each .md file you add.

'plugins/crazycrates/crate-faq' is considered the path while '/crates-faq' is the page id.

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
            'plugins/crazycrates/crate-index',
            'plugins/crazycrates/crate-faq',
            'plugins/crazycrates/crate-commands',
            'plugins/crazycrates/crate-placeholders',
            {
              type: 'category',
              label: 'Dev API',
              items: [
                'plugins/crazycrates/api/crate-api-usage',
                'plugins/crazycrates/api/crate-api-intro'
              ]
            },
            {
              type: 'category',
              label: 'Prizes',
              items: [
                'plugins/crazycrates/prizes/crate-item-options',
                {
                  type: 'category',
                  label: 'Items',
                  items: [
                    'plugins/crazycrates/prizes/items/crate-colored-leather-armor',
                    'plugins/crazycrates/prizes/items/crate-custom-heads',
                    'plugins/crazycrates/prizes/items/crate-shields-banners',
                    'plugins/crazycrates/prizes/items/crate-tipped-arrows'
                  ]
                }
              ]
            },
            {
              type: 'category',
              label: 'Crates',
              items: [
                'plugins/crazycrates/crates/crate-types',
                'plugins/crazycrates/crates/crate-chance-system',
                {
                  type: 'category',
                  label: 'Examples',
                  items: [
                    'plugins/crazycrates/crates/examples/crate-cosmic-example',
                    'plugins/crazycrates/crates/examples/crate-csgo-example',
                    'plugins/crazycrates/crates/examples/crate-quad-example'
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
            'plugins/crazyenchantments/enchants-faq'
          ]
        },
        {
          type: 'category',
          label: "CrazyEnvoys",
          items: [
            'plugins/crazyenvoys/envoys-faq'
          ]
        },
        {
          type: 'category',
          label: "CrazyVouchers",
          items: [
            'plugins/crazyvouchers/vouchers-faq'
          ]
        }
      ]
    }
  ],
};