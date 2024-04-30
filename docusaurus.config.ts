import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'CrazyCrew Docs',
  tagline: 'Documentation for all projects created by CrazyCrew',
  favicon: '/img/favicon.ico',

  url: 'https://docs.crazycrew.us/',

  baseUrl: '/',

  organizationName: 'crazycrew',
  projectName: 'CrazyDocs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          lastVersion: 'current',
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/Crazy-Crew/CrazyDocs/tree/main/',
          versions: {
            current: {
              label: '1.20.4',
              path: '1.20.4',
              banner: 'none',
            },
            '1.20.6': {
              label: '1.20.6',
              path: '1.20.6',
              banner: 'unreleased'
            }
          }
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true
    },
    image: 'img/logo.webp',
    navbar: {
      title: 'Home',
      logo: {
        alt: 'crazy-logo',
        src: 'img/logo.webp',
      },
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'right'
        },
        {
          type: 'localeDropdown',
          position: 'right'
        },
        {
          to: 'https://discord.gg/badbones-s-live-chat-182615261403283459',
          label: 'Discord',
          position: 'left',
        },
        {
          to: 'https://github.com/Crazy-Crew',
          label: 'Github',
          position: 'left',
        },
        {
          to: 'https://ko-fi.com/ryderbelserion',
          label: 'Kofi',
          position: 'left',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} CrazyCrew. Built with Docusaurus.`,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    prism: {
      additionalLanguages: [
        "batch",
        "bash",
        "git",
        "java",
        "javastacktrace",
        "kotlin",
        "groovy",
        "log",
        "toml",
        "properties",
      ],
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    }
  } satisfies Preset.ThemeConfig,
};

export default config;