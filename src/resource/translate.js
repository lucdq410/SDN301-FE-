import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import i18nextBrowserLanguagedetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import store from "../redux/store/configuration";
import enTranslations from "./en.json";
import viTranslations from "./vi.json";

store.subscribe(() => {
  const state = store.getState();
  i18next.changeLanguage(state.languages.languages);
});
// Initialize i18next
i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslations,
    },
    vi: {
      translation: viTranslations,
    },
  },
  fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  lng: store.getState().languages.languages, // Initial language from Redux store
});

export default i18next;
