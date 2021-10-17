import enHome from "./en/home.json";
import enLogin from "./en/login.json";
import jaHome from "./ja/home.json";
import jaLogin from "./ja/login.json";

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

export const resources = {
    en: {
        home: enHome,
        login: enLogin,
    },
    ja: { home: jaHome, login: jaLogin },
} as const;

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: "en",
        ns: ["home", "login"],
        resources,
    });
