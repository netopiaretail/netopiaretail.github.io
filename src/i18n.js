import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import EN from "./locale/en/translations.json";
import RO from "./locale/ro/translations.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      ro: { translation: RO },
      en: { translation: EN },
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
