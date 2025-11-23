// src/pages/Products.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaWhatsapp, FaLeaf } from "react-icons/fa";

const Products = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const whatsappNumber = "201234567890";

  const products = [
    {
      id: 1,
      key: "alopecia_oil",
      image: "/img/products/alopecia-oil.jpg",
    },
    {
      id: 2,
      key: "jojoba_oil",
      image: "/img/products/joioba-oil.jpg",
    },
    {
      id: 3,
      key: "sudanese_karkar",
      image: "/img/products/sudanese-karkar.jpg",
    },
    {
      id: 4,
      key: "henna_treatment",
      image: "/img/products/henna.jpg",
    },
    {
      id: 5,
      key: "henna_mask",
      image: "/img/products/henna2.jpg",
    },
  ];

  const handleWhatsAppClick = (productName) => {
    const message = isArabic
      ? `مرحبًا هبة ناتشورالز\nأريد الاستفسار عن: *${productName}*\nمن فضلك أرسلي السعر، طريقة الاستخدام، وكيفية الطلب. شكرًا!`
      : `Hi Heba Naturals\nI'm interested in: *${productName}*\nPlease send price, usage, and how to order. Thank you!`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <>
      <Helmet>
        <title>{t("products.meta_title")}</title>
        <meta name="description" content={t("products.meta_description")} />
        <meta property="og:image" content="/img/products/alopecia-oil.jpg" />
      </Helmet>

      <main className="min-h-screen bg-gradient-to-b from-emerald-50/80 via-white to-green-50/80 dark:from-emerald-950 dark:via-gray-900 dark:to-black py-16 px-4">
        <div className="container mx-auto max-w-7xl">

          {/* Hero Section */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-emerald-700 to-green-600 bg-clip-text text-transparent drop-shadow-2xl mb-6">
              {t("products.page_title")}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-emerald-800 dark:text-emerald-300 font-medium max-w-4xl mx-auto leading-relaxed">
              {t("products.page_subtitle")}
            </p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                whileHover={{ y: -16, scale: 1.04 }}
                className="group relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-emerald-200/50 dark:border-emerald-800/60 hover:shadow-emerald-500/30 dark:hover:shadow-emerald-700/40 transition-all duration-500"
              >
                {/* Product Image */}
                <div className="relative h-80 sm:h-96 overflow-hidden">
                  <img
                    src={product.image}
                    alt={t(`products.${product.key}.name`)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Product Info */}
                <div className="p-6 sm:p-8 text-center">
                  <h3 className="text-2xl sm:text-3xl font-bold text-emerald-800 dark:text-emerald-400 mb-4">
                    {t(`products.${product.key}.name`)}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-8 min-h-[100px]">
                    {t(`products.${product.key}.description`)}
                  </p>

                  {/* WhatsApp Button */}
                  <button
                    onClick={() => handleWhatsAppClick(t(`products.${product.key}.name`))}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold text-lg py-5 rounded-2xl flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    <FaWhatsapp size={28} />
                    {t("products.whatsapp_button")}
                  </button>
                </div>

                {/* Shine Effect */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-300/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mt-24 py-14 bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/50 dark:to-teal-900/50 rounded-3xl border-2 border-emerald-300 dark:border-emerald-700"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-emerald-800 dark:text-emerald-300 mb-6">
              {t("products.help_title")}
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto px-6">
              {t("products.help_subtitle")}
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(t("products.help_whatsapp_message"))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-green-600 hover:bg-green-700 text-white font-bold text-2xl px-12 py-6 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300"
            >
              <FaWhatsapp size={36} />
              {t("products.help_button")}
            </a>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default Products;