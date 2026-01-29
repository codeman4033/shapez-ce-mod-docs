import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Shapez CE modding docs",
  description: "Docs for mod developers in Shapez CE",
  cleanUrls: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    sidebar: [
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
          {text: "Setting up dev environment", link: "/getting-started/setup-dev-env"}
        ]
      }
    ],
    nav: [
      { text: 'Guide', link: '/guide/introduction' },
      // { text: 'Reference', link: '/config' },
    ]
  },
  base: "/shapez-ce-mod-docs/",
})
