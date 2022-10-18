import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "qilme",
  description: "qilme 的博客",
  theme,
  plugins: [
    searchPlugin({

    }),
  ],
});
