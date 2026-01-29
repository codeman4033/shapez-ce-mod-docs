import { pluginClientRedirects } from '@rspress/plugin-client-redirects';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  title: "Shapez CE modding docs",
  description: "Docs for mod developers in Shapez CE",
  base: "/shapez-ce-mod-docs/",

  plugins: [
    pluginClientRedirects({
      redirects: [
        {
          from: "^\/$",
          to: '/shapez-ce-mod-docs/overview/introduction',
        },
      ],
    }),
  ],

  themeConfig: {
    sidebar: {
      "/": [
        {
          text: "Overview",
          items: [
            { text: "Introduction", link: "/overview/introduction" },
          ]
        },
        {
          text: "Getting started",
          link: "/getting-started/",
          items: [
            { text: "Setting up dev environment", link: "/getting-started/setup-dev-env" },
            { text: "Making the mod", link: "/" }
          ]
        }
      ]
    },
    nav: [
      { text: 'Guide', link: '/overview/introduction' },
      // { text: 'Reference', link: '/config' },
    ]
  },
  outDir: "dist"
});