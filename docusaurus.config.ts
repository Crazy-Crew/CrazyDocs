import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'CrazyCrew Docs',
  tagline: 'crazydocs',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.crazycrew.us/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'crazycrew', // Usually your GitHub org/user name.
  projectName: 'CrazyDocs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Crazy-Crew/CrazyDocs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Crazy-Crew/CrazyDocs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo.webp',
    navbar: {
      title: 'Home',
      logo: {
        alt: 'crazy-logo',
        src: 'img/logo.webp',
      },
      items: [
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://discord.gg/badbones-s-live-chat-182615261403283459',
          label: 'Discord',
          position: 'left',
        },
        {
          href: 'https://github.com/Crazy-Crew',
          label: 'Github',
          position: 'right',
        },
        {
          href: 'https://ko-fi.com/ryderbelserion',
          label: 'Kofi',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Blog',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;