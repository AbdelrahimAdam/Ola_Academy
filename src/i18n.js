// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// استيراد ملفات الترجمة
import en from "./locales/en.json";
import ar from "./locales/ar.json";

const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
};

i18n
  // كشف اللغة تلقائيًا (من المتصفح أو localStorage)
  .use(LanguageDetector)
  // تمرير i18n إلى react-i18next
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["en", "ar"], // اللغات المدعومة فقط
    debug: process.env.NODE_ENV === "development", // Debug في التطوير بس

    // إعدادات كشف اللغة (الأولوية)
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      lookupLocalStorage: "i18nextLng",
      caches: ["localStorage"], // يحفظ اختيار المستخدم
    },

    interpolation: {
      escapeValue: false, // React يحمي من XSS بالفعل
    },

    react: {
      useSuspense: false, // مهم لو مش مستخدم Suspense
    },

    // تحسين الأداء في الإنتاج
    saveMissing: false,
    missingKeyHandler: false,
  });

// تغيير اتجاه النص (RTL/LTR) تلقائيًا عند تغيير اللغة
i18n.on("languageChanged", (lng) => {
  document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = lng;
});

export default i18n;