import enCommon from "./en/common.json";
import enHome from "./en/home.json";
import enLogin from "./en/login.json";
import enPosts from "./en/posts.json";
import jaCommon from "./ja/common.json";
import jaHome from "./ja/home.json";
import jaLogin from "./ja/login.json";

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

export const resources = {
    en: {
        home: enHome,
        login: enLogin,
        common: enCommon,
        posts: enPosts,
    },
    ja: { home: jaHome, login: jaLogin, common: jaCommon },
} as const;
export const LANGUAGES_LABEL = [
    {
        code: "en",
        text: "English",
    },
    {
        code: "ja",
        text: "Japanese",
    },
];
i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: "en",
        ns: ["home", "login", "common", "posts"],
        resources,
    });
