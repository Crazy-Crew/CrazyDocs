/*
When adding pages to the sidebar, You must use the "id" found in each .md file you add.

'plugins/crazycrates/crate-faq' is considered the path while '/crates-faq' is the page id.

The build will fail if you type the wrong one.
*/
module.exports = {
  docs: [
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
            'plugins/crazycrates/crates-faq'
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