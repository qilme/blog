import {hopeTheme} from "vuepress-theme-hope";
import {enNavbar, zhNavbar} from "./navbar";
import {enSidebar, zhSidebar} from "./sidebar";

export default hopeTheme({
    hostname: "https://qill.me/",

    author: {
        name: "qilme",
        url: "https://qill.me",
    },

    iconAssets: "iconfont",

    logo: "/assets/logo.webp",

    repo: "qilme/blog",

    repoDisplay: false,

    docsDir: "src",

    locales: {
        "/": {
            navbar: zhNavbar,

            sidebar: zhSidebar,

            footer: "<a href='https://icp.gov.moe/?keyword=20222365' target='_blank'>萌 ICP 备 20222365 号</a>",

            displayFooter: true,

            copyright: "<a href='/CC-BY-NC-SA-4.0/'>BY-NC-SA 4.0</a> <a href='/rss.xml' target='_blank'><span class='font-icon icon iconfont icon-rss' style='color: orange'></span></a> <a href='/atom.xml' target='_blank'><span class='font-icon icon iconfont icon-react' style='color: orange;'></span></a> <a href='/feed.json' target='_blank'><span class='font-icon icon iconfont icon-json' style='color: orange;'></span></a>",

            blog: {
                avatar: "/assets/logo.webp",
                roundAvatar: true,
                name: "qilme",
                description: "!",
                intro: "/about/",
            },

            metaLocales: {
                editLink: "GitHub",
            },
        },
        "/en/": {
            // navbar
            navbar: enNavbar,

            // sidebar
            sidebar: enSidebar,

            footer: "<a href='https://icp.gov.moe/?keyword=20222365' target='_blank'>萌 ICP 备 20222365 号</a>",

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

    plugins: {
        blog: true,
        comment: {
            provider: "Waline",
            serverURL: "https://waline.qill.me/",
            recaptchaV3Key: "6LchYmUlAAAAAJbTfdG2Ur5cKTgXA4pK4q5jPhMj",
            // turnstileKey: "0x4AAAAAAAL8AQMcX6K0Wh32",
            locale: {
                placeholder: "",
            },
        },
        pwa: {
            manifest: {
                icons: [
                    {
                        src: "/assets/logo.webp",
                        sizes: "750x750",
                        type: "image/webp",
                    },
                    {
                        src: "/assets/logo@512x.webp",
                        sizes: "512x512",
                        type: "image/webp",
                    },
                    {
                        src: "/assets/logo@192x.webp",
                        sizes: "192x192",
                        type: "image/webp",
                    }
                ],
            },
            themeColor: "#000000",
            cachePic: true,
            update: "disable"
        },
        feed: {
            atom: true,
            json: true,
            rss: true,
        },
        mdEnhance: {
            checkLinks: {
                status: "always"
            }
        }
    }
});
