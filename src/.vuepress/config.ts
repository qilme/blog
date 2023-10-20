import {defineUserConfig} from "vuepress";
import {searchProPlugin} from "vuepress-plugin-search-pro";
import {cut} from "nodejs-jieba";
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
            indexOptions: {
                tokenize: (text, fieldName) =>
                    fieldName === "id" ? [text] : cut(text, true),
            }
        })
    ]
});
