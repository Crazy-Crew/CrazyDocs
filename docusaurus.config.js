// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CrazyCrew',
  tagline: 'Who doesnt like documentation?',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://crazycrew.us/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'crazycrew', // Usually your GitHub org/username.
  projectName: 'CrazyDocs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Crazy-Crew/CrazyDocs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false
      },
      // Replace with your project's social card
      image: 'img/logo.webp',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'CrazyLogo',
          src: 'img/logo.webp',
        },
        items: [
          {
            to: 'https://discord.gg/badbones-s-live-chat-182615261403283459',
            label: 'Discord',
            position: 'left'
          },
          {
            to: 'https://github.com/Crazy-Crew',
            label: 'Github',
            position: 'right'
          },
          {
            to: 'https://ko-fi.com/ryderbelserion',
            label: 'Kofi',
            position: 'right'
          }
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
