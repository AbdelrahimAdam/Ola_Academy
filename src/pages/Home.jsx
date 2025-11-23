// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";  // الصحيح
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaLeaf, FaHeart, FaShoppingBag, FaComments, FaWhatsapp } from "react-icons/fa";
import TestimonialsCarousel from "../components/TestimonialsCarousel";

const Home = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <>
      <Helmet>
        <title>هبة ناتشورالز | منتجات علاجية طبيعية بإشراف الدكتورة هبة مهاجر</title>
        <meta name="description" content="منتجات علاجية طبيعية 100% للشعر الأفريقي والمجعد من أجود الأعشاب الأيورفيدية والسودانية بإشراف الدكتورة هبة مهاجر" />
        <meta property="og:image" content="/img/products/alopecia-oil.jpg" />
      </Helmet>

      <main className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 dark:from-emerald-950 dark:via-teal-950 dark:to-cyan-900 min-h-screen">

        {/* Hero Section */}
        <section
          className="relative py-24 md:py-32 lg:py-40 overflow-hidden text-white"
          style={{
            backgroundImage: `url('/img/products/alopecia-oil.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/95 via-black/80 to-teal-900/95" />

          <div className="absolute inset-0 opacity-40 pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-emerald-200"
                initial={{ y: -200 }}
                animate={{ y: 1600 }}
                transition={{
                  duration: 22 + i * 1.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 1.8,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  fontSize: "3rem",
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              >
                <FaLeaf />
              </motion.div>
            ))}
          </div>

          <div className="container mx-auto px-5 text-center relative z-10">
            <motion.h1
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight"
            >
              <span className="bg-gradient-to-r from-emerald-200 via-cyan-200 to-lime-200 bg-clip-text text-transparent drop-shadow-2xl arabic">
                {isArabic ? "هبة" : "Heba"}
              </span>
              <span className="bg-gradient-to-r from-lime-200 via-teal-200 to-emerald-200 bg-clip-text text-transparent drop-shadow-2xl arabic ml-3">
                {isArabic ? "ناتشورالز" : "Naturals"}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mt-6 text-white/90 drop-shadow-lg arabic leading-relaxed max-w-4xl mx-auto px-4"
            >
              منتجات علاجية طبيعية 100% بإشراف الدكتورة هبة مهاجر
            </motion.p>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 120 }}
              className="flex flex-col sm:flex-row gap-5 justify-center mt-12"
            >
              <Link
                to="/products"
                className="bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-4 rounded-full text-lg sm:text-xl md:text-2xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-4 border-white/30 arabic"
              >
                {t("home.shop_now") || "تسوقي الآن"}
              </Link>
              <Link
                to="/contact"
                className="bg-transparent backdrop-blur-xl border-4 border-white/60 hover:bg-white/20 px-8 py-4 rounded-full text-lg sm:text-xl md:text-2xl font-bold hover:scale-105 transition-all duration-300 arabic"
              >
                {t("home.contact_us") || "تواصلي معنا"}
              </Link>
            </motion.div>
          </div>

          <div className="absolute bottom-0 w-full">
            <svg viewBox="0 0 1440 150" className="w-full h-24 md:h-32">
              <path fill="currentColor" className="text-emerald-100 dark:text-emerald-900"
                d="M0,70 C320,140 1120,20 1440,90 L1440,150 L0,150 Z" />
            </svg>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="py-20 bg-gradient-to-br from-teal-50/80 via-emerald-50/90 to-cyan-50/80 dark:from-teal-950/40 dark:via-emerald-950/50 dark:to-cyan-950/40">
          <div className="container mx-auto px-5">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-700 to-teal-700 dark:from-emerald-300 dark:to-teal-300 bg-clip-text text-transparent arabic"
            >
              اكتشفي مجموعتنا العلاجية
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { path: "/about",    label: "من نحن",       Icon: FaLeaf,       gradient: "from-emerald-500 to-teal-600" },
                { path: "/products", label: "المنتجات",     Icon: FaHeart,      gradient: "from-rose-500 to-pink-600" },
                { path: "/order",    label: "اطلبي الآن",   Icon: FaShoppingBag,gradient: "from-amber-500 to-orange-600" },
                { path: "/contact",  label: "تواصلي معنا", Icon: FaComments,   gradient: "from-cyan-500 to-blue-600" },
              ].map((item, i) => {
                const Icon = item.Icon;
                return (
                  <Link key={i} to={item.path}>
                    <motion.div
                      whileHover={{ y: -10, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`group relative overflow-hidden bg-gradient-to-br ${item.gradient} p-8 rounded-2xl shadow-xl hover:shadow-2xl text-white text-center transition-all duration-500 border border-white/30 backdrop-blur-sm`}
                    >
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <Icon className="text-5xl mx-auto mb-4 drop-shadow-lg" />
                      <p className="font-bold text-lg sm:text-xl arabic relative z-10">
                        {item.label}
                      </p>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <TestimonialsCarousel />

        {/* Floating WhatsApp */}
        <a
          href="https://wa.me/201234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 group"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-green-400 rounded-full blur-xl scale-150 animate-ping opacity-70" />
            <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 p-4 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 border-4 border-white/40">
              <FaWhatsapp className="text-3xl sm:text-4xl text-white drop-shadow" />
            </div>
          </div>
        </a>
      </main>
    </>
  );
};

export default Home;