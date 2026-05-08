import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

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

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap',
      },
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-VGP7HBBCJ2',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/nar-logo.svg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      // logo: {
      //   alt: 'North Arrow Research logo',
      //   src: 'img/nar-logo.svg',
      // },
      items: [
        { to: '/', label: 'Home', position: 'right' },
        { to: '/about', label: 'About', position: 'right' },
        { to: '/people', label: 'People', position: 'right' },
        { to: 'https://shop.northarrowresearch.com', label: 'Shop', position: 'right' },
        { to: '/contact-us', label: 'Contact Us', position: 'right' },
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
          title: 'Pages',
          items: [
            {
              label: 'Home',
              to: '/',
            },
            {
              label: 'About',
              to: '/about',
            },
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
    },
  } satisfies Preset.ThemeConfig,
}

export default config
