// src/pages/Contact.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaHeart } from "react-icons/fa";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  // أرقام الواتساب حسب الدولة (غيّرها بالأرقام الحقيقية)
  const whatsappNumbers = {
    egypt: "201234567890",
    sudan: "249912345678",
    ksa: "966501234567",
  };

  const openWhatsApp = (country = "egypt") => {
    const number = whatsappNumbers[country];
    const message = isArabic
      ? `مرحبًا هبة ناتشورالز\nأريد التواصل معاكم بخصوص المنتجات والطلبات`
      : `Hi Heba Naturals\nI want to inquire about your products and place an order`;
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <>
      <Helmet>
        <title>{t("contact.meta_title")}</title>
        <meta name="description" content={t("contact.meta_description")} />
        <meta property="og:title" content={t("contact.meta_title")} />
        <meta property="og:description" content={t("contact.meta_description")} />
        <meta property="og:image" content="/img/og-contact.jpg" />
      </Helmet>

      <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-green-50 dark:from-gray-900 dark:via-black dark:to-emerald-950 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Hero */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-emerald-800 dark:text-emerald-400 mb-6">
              {t("contact.hero_title")}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {t("contact.hero_subtitle")}
            </p>
          </motion.div>

          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Egypt */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 text-center border border-emerald-100 dark:border-emerald-800"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                <img src="/img/flags/egypt.png" alt="Egypt" className="w-12 h-12 rounded-full" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-700 dark:text-emerald-400 mb-4">
                {t("contact.egypt")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{t("contact.available_24_7")}</p>
              <button
                onClick={() => openWhatsApp("egypt")}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transform hover:scale-105 transition-all shadow-xl"
              >
                <FaWhatsapp size={28} />
                {t("contact.chat_whatsapp")}
              </button>
            </motion.div>

            {/* Sudan */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 text-center border border-emerald-100 dark:border-emerald-800"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                <img src="/img/flags/sudan.png" alt="Sudan" className="w-12 h-12 rounded-full" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-700 dark:text-emerald-400 mb-4">
                {t("contact.sudan")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{t("contact.available_24_7")}</p>
              <button
                onClick={() => openWhatsApp("sudan")}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transform hover:scale-105 transition-all shadow-xl"
              >
                <FaWhatsapp size={28} />
                {t("contact.chat_whatsapp")}
              </button>
            </motion.div>

            {/* Saudi Arabia */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 text-center border border-emerald-100 dark:border-emerald-800"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                <img src="/img/flags/saudi.png" alt="Saudi Arabia" className="w-12 h-12 rounded-full" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-700 dark:text-emerald-400 mb-4">
                {t("contact.ksa")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{t("contact.available_24_7")}</p>
              <button
                onClick={() => openWhatsApp("ksa")}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transform hover:scale-105 transition-all shadow-xl"
              >
                <FaWhatsapp size={28} />
                {t("contact.chat_whatsapp")}
              </button>
            </motion.div>
          </div>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-center py-16 bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl shadow-2xl"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              <FaHeart className="inline-block mr-4 text-rose-300" />
              {t("contact.main_cta_title")}
            </h2>
            <p className="text-xl md:text-2xl text-emerald-50 mb-10 max-w-3xl mx-auto px-6">
              {t("contact.main_cta_subtitle")}
            </p>
            <button
              onClick={() => openWhatsApp("egypt")}
              className="bg-white text-emerald-700 hover:bg-emerald-50 font-bold text-2xl px-16 py-7 rounded-full shadow-2xl transform hover:scale-110 transition-all inline-flex items-center gap-4"
            >
              <FaWhatsapp size={40} className="text-green-600" />
              {t("contact.main_cta_button")}
            </button>
          </motion.div>

          {/* Working Hours */}
          <div className="mt-16 text-center">
            <p className="text-2xl font-bold text-emerald-800 dark:text-emerald-400 flex items-center justify-center gap-3">
              <FaClock className="text-emerald-600" />
              {t("contact.working_hours")}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-3">
              {t("contact.working_hours_detail")}
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;