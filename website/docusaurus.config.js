const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Bod',
  tagline: 'Boilerplate CLI App',
  url: 'https://sabertazimi.github.io',
  baseUrl: '/bod/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'sabertazimi',
  projectName: 'bod',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/sabertazimi/bod/edit/main/website/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        docsDir: 'docs',
        docsRouteBasePath: 'docs',
        language: ['en', 'zh'],
        hashed: true,
      },
    ],
  ],
  themeConfig: {
    respectPrefersColorScheme: true,
    hideableSidebar: true,
    navbar: {
      title: 'Bod',
      logo: {
        alt: 'Bod',
        src: 'img/logo.svg',
      },
      hideOnScroll: true,
      items: [
        {
          to: 'docs/intro',
          label: 'Getting Started',
          position: 'left',
          activeBasePath: 'docs/intro',
        },
        {
          to: 'docs/bod',
          label: 'Bod CLI',
          position: 'left',
          activeBasePath: 'docs/bod',
        },
        {
          to: 'docs/cra-template-bod',
          label: 'Bod Template',
          position: 'left',
          activeBaseRegex: 'docs/cra-template*',
        },
        {
          to: 'docs/react-scripts',
          label: 'Bod Scripts',
          position: 'left',
          activeBasePath: 'docs/react-scripts',
        },
        {
          to: 'docs/eslint-config-bod',
          label: 'Bod ESLint',
          position: 'left',
          activeBasePath: 'docs/eslint-config-bod',
        },
        {
          to: 'docs/stylelint-config-bod',
          label: 'Bod StyleLint',
          position: 'left',
          activeBaseRegex: 'docs/stylelint-config*',
        },
        {
          type: 'dropdown',
          label: 'Demos',
          position: 'right',
          items: [
            {
              label: 'Bod Template',
              href: 'https://sabertazimi.github.io/bod/bod',
            },
            {
              label: 'JSX Template',
              href: 'https://sabertazimi.github.io/bod/@sabertazimi',
            },
            {
              label: 'TSX Template',
              href: 'https://sabertazimi.github.io/bod/@sabertazimi/typescript',
            },
          ],
        },
        {
          href: 'https://github.com/sabertazimi/bod',
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
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Template',
          items: [
            {
              label: 'Bod Template',
              href: 'https://sabertazimi.github.io/bod/bod',
            },
            {
              label: 'JSX Template',
              href: 'https://sabertazimi.github.io/bod/@sabertazimi',
            },
            {
              label: 'TSX Template',
              href: 'https://sabertazimi.github.io/bod/@sabertazimi/typescript',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/sabertazimi/bod',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/sabertazimi',
            },
            {
              label: 'Email',
              href: 'mailto:sabertazimi@gmail.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sabertazimi.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: [
        'cmake',
        'csharp',
        'csv',
        'docker',
        'haskell',
        'http',
        'java',
        'kotlin',
        'latex',
        'lisp',
        'lua',
        'matlab',
        'perl',
        'php',
        'regex',
        'ruby',
        'scala',
        'scheme',
        'swift',
        'tcl',
        'verilog',
        'vhdl',
        'vim',
      ],
    },
  },
};
