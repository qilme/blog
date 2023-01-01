import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar";
import { enSidebar, zhSidebar } from "./sidebar";

export default hopeTheme({
  hostname: "https://qill.me",

  author: {
    name: "qilme",
    url: "https://qill.me",
  },

  iconAssets: "iconfont",

  logo: "/logo.webp",

  repo: "qilme/blog",

  repoDisplay: false,

  docsDir: "src",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    medias: {
    },
  },

  locales: {
    "/": {
      navbar: zhNavbar,

      sidebar: zhSidebar,

      footer: "<a href=\"https://icp.gov.moe/?keyword=20222365\" target=\"_blank\">萌 ICP 备 20222365 号</a>",

      displayFooter: true,

      blog: {
        avatar: "/logo.webp",
        roundAvatar: true,
        name: "qilme",
        description: "!",
        intro: "/about/",
      },

      // page meta
      metaLocales: {
        editLink: "GitHub",
      },
    },
    "/en": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "<a href=\"https://icp.gov.moe/?keyword=20222365\" target=\"_blank\">萌 ICP 备 20222365 号</a>",

      displayFooter: true,

      blog: {
        description: "",
        intro: "/about/",
      },

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },
  },

  encrypt: {
    config: {
    },
  },

  plugins: {
    blog: true,
    comment: {
      provider: "Waline",
      serverURL: "https://waline.qill.me/",
      reaction: false,
    },
    feed: {
      atom: true,
      json: true,
      rss: true,
    },
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      imgSize: true,
      include: true,
      katex: true,
      imgLazyload: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
  },
});
