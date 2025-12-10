import type * as Preset from '@docusaurus/preset-classic'
import type { Config } from '@docusaurus/types'
import { themes } from 'prism-react-renderer'

const lightCodeTheme = themes.github
const darkCodeTheme = themes.dracula

const config: Config = {
  title: 'Bod',
  tagline: 'Boilerplate CLI App',
  url: 'https://tazimi.dev',
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
          path: '../docs',
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/sabertazimi/bod/edit/main/website/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        docsDir: '../docs',
        docsRouteBasePath: 'docs',
        language: ['en', 'zh'],
        hashed: true,
      },
    ],
  ],
  themeConfig: {
    respectPrefersColorScheme: true,
    docs: {
      sidebar: {
        hideable: true,
      },
    },
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
          activeBaseRegex: 'docs/intro',
        },
        {
          to: 'docs/bod',
          label: 'Bod CLI',
          position: 'left',
          activeBaseRegex: 'docs/bod',
        },
        {
          to: 'docs/webpack-template',
          label: 'Webpack Template',
          position: 'left',
          activeBaseRegex: 'docs/webpack-template',
        },
        {
          to: 'docs/eslint-config-bod',
          label: 'Bod ESLint',
          position: 'left',
          activeBaseRegex: 'docs/eslint-config*',
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
              label: 'Webpack Template',
              href: 'https://tazimi.dev/bod/webpack',
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
              label: 'Webpack Template',
              href: 'https://tazimi.dev/bod/webpack',
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
      // https://github.com/FormidableLabs/prism-react-renderer/blob/master/packages/generate-prism-languages/index.ts#L9-L25
      additionalLanguages: [
        'bash',
        'json',
      ],
    },
  } satisfies Preset.ThemeConfig,
}

export default config
