import { defineUserConfig } from "@vuepress/cli";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

const base = <"/" | `/${string}/`>process.env.BASE || "/";

export default defineUserConfig({
  base,
  lang: "zh-CN",
  title: "qilme",
  description: "qilme 的博客",
  theme,
  plugins: [
    searchProPlugin({
      indexContent: true,
    })
  ],
});
