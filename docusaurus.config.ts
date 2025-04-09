import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Gestione Sagre Web Cloud App',
  //tagline: 'Free software that allows the management of festivals, events or shows where it is necessary to control the orders for the kitchen and/or the bar.',
  //tagline: 'Free software that allows the management of festivals, events or shows where it is necessary to control the orders.',
  tagline: 'Free order management software for any type of event.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

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
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Gestione Sagre Web Cloud App',
      logo: {
        alt: 'Gestione Sagre Web Cloud App Logo',
        src: 'img/logo.svg',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        {to: '/docs/intro', label: 'Get Started', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/AngeloDotNet/GSWebCloudApp',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting started',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          // items: [
          //   {
          //     label: 'Linkedin',
          //     href: 'https://www.linkedin.com/in/pirolaangelo/',
          //   },
          //   {
          //     label: 'X',
          //     href: 'https://x.com/angeloIT87',
          //   },
          // ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/AngeloDotNet/GSWebCloudApp',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Gestione Sagre Web Cloud App - Built with Docusaurus - Image by vectorjuice on <a href="https://it.freepik.com/vettori-gratuito/lista-di-controllo-per-l-acquisto-di-regali-personaggio-dei-cartoni-animati-della-ragazza-acquisto-di-regali-online-e-commerce-gift-card-promozione-compleanno-bonus-anniversario_10780103.htm#fromView=search&page=2&position=35&uuid=c5fe4aa8-b29d-415e-8d7f-a6e13f350a5f&query=management+festival">Freepik</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
