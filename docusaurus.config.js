// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Athenian Engineering',
  tagline: 'At the intersection of technology and the liberal arts',
  url: 'https://athenian-eng.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'athenian-engineering', // Usually your GitHub org/user name.
  projectName: 'athenian-eng', // Usually your repo name.

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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/athenian-engineering/athenian-eng/blob/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/athenian-engineering/athenian-eng/blob/master',
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
      navbar: {
        title: 'Athenian Engineering',
        logo: {
          alt: 'Athenian Engineering Website',
          src: 'img/athenian-logo.png',
          width: 32,
          height: 32,
          //className: 'custom-navbar-logo-class',
          //style: {border: 'solid red'},
        },
        items: [
          {
            label: 'Classes',
            type: 'doc',
            docId: 'intro',
            position: 'left',
          },
          {
            to: '/projects/summary',
            label: 'Student Projects',
            position: 'left',
            activeBaseRegex: `/projects/`,
          },
          // {
          //   label: 'Computational Thinking',
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          // },
          // {
          //   label: 'Intro to CS',
          //   type: 'doc',
          //   docId: 'CompSci/CS_page',
          //   position: 'left',
          // },
          // {
          //   label: 'APCS',
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          // },
          // {
          //   label: 'Data Structures and Algorithms',
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          // },
          {
            label: 'Blog',
            to: '/blog',
            position: 'left',
          },
          {
            href: 'https://github.com/athenian-engineering/athenian-eng',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Classes',
            items: [
              {
                label: 'Computational Thinking',
                to: '/docs/ct/summary',
              },
              {
                label: 'Intro to CS',
                to: '/docs/intro/summary',
              },
              {
                label: 'APCS',
                to: '/docs/apcs/summary',
              },
              {
                label: 'Data Structures and Algorithms',
                to: '/docs/dsalgs/summary',
              },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/athenian-engineering/athenian-eng',
              },
            ],
          },
        ],
        //copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["kotlin", "java", "python"],
      },
      // Use this to enable an announcement.
      // see: https://docusaurus.io/docs/api/themes/configuration#announcement-bar
      // announcementBar: {
      //   id: 'support_us',
      //   content: 'This is an important announcement',
      //   backgroundColor: 'red',
      //   textColor: 'white',
      //   isCloseable: false,
      // },

      // Use this to disable the color switch option in the header.
      // see: https://docusaurus.io/docs/api/themes/configuration#color-mode---dark-mode
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },

      // algolia: {
      //   // The application ID provided by Algolia
      //   appId: '09LBSMLHQG',
      //
      //   // Public API key: it is safe to commit it
      //   apiKey: '9ee3b89159930ff5c89432aa5c0fba80',
      //
      //   indexName: 'athenian-eng.org',
      //
      //   // Optional: see doc section below
      //   contextualSearch: true,
      //
      //   // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      //   externalUrlRegex: 'athenian-eng\\.org',
      //
      //   // Optional: Algolia search parameters
      //   searchParameters: {},
      //
      //   // Optional: path for search page that enabled by default (`false` to disable it)
      //   searchPagePath: 'search',
      // },

    }),
    themes: ['@docusaurus/theme-live-codeblock'],
    plugins: [
      [
        'content-docs',
        /** @type {import('@docusaurus/plugin-content-docs').Options} */
        ({
          id: 'projects',
          path: 'projects',
          routeBasePath: 'projects',
          editUrl: 'https://github.com/athenian-engineering/athenian-eng/blob/master',
          //remarkPlugins: [npm2yarn],
          editCurrentVersion: true,
          sidebarPath: require.resolve('./sidebarsProjects.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        }),
      ],
    ],
};

module.exports = config;