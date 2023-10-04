import {defineUserConfig} from "vuepress";
import {searchProPlugin} from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
    base: "/",
    lang: "zh-CN",
    title: "qilme",
    description: "qilme 的博客",
    theme,
    shouldPrefetch: false,
    plugins: [
        searchProPlugin({
            indexContent: true,
        })
    ]
});
