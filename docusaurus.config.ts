import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'North Arrow Research',
  tagline: 'Geospatial Software for conservation',
  favicon: 'img/nar-logo.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://northarrowresearch.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'northarrowresearch',
  projectName: 'nar-website',

  onBrokenLinks: 'throw',

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
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/NA_JustArrow.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      logo: {
        alt: 'North Arrow Research logo',
        src: 'img/nar-logo.svg',
      },
      items: [
        {to: '/people', label: 'People', position: 'left'},
        {to: '/contact-us', label: 'Contact Us', position: 'left'},
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'North Arrow Research',
          items: [
            {
              label: 'info@northarrowresearch.com',
              href: 'mailto:info@northarrowresearch.com',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'People',
              to: '/people',
            },
            {
              label: 'Contact Us',
              to: '/contact-us',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} North Arrow Research.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
