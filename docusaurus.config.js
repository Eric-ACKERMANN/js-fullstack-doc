module.exports = {
  title: "My Site",
  tagline: "The tagline of my site",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  favicon: "img/javascript.ico",
  organizationName: "Eric ACKERMANN", // Usually your GitHub org/user name.
  projectName: "js-fullstack-doc", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "This is JavaScript (or what I know of)",
      logo: {
        alt: "My Site Logo",
        src: "img/javascript.ico",
      },
      links: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "right",
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: "https://github.com/eric-ackermann/js-fullstack-doc",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Style Guide",
              to: "docs/",
            },
            {
              label: "Second Doc",
              to: "docs/doc2/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            // {
            //   label: "Blog",
            //   to: "blog",
            // },
            {
              label: "Personnal Site",
              href: "https://github.com/eric-ackermann/personnal-site",
            },

            {
              label: "Github",
              href: "https://github.com/eric-ackermann",
            },
            {
              label: "Docusaurus site",
              href: "https://v2.docusaurus.io/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} made by Eric ACKERMANN. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "doc1",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/Eric-ACKERMANN/js-fullstack-doc",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
