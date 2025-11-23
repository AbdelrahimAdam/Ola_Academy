// src/pages/Blog.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaClock, FaUser, FaLeaf } from "react-icons/fa";

const blogPosts = [
  {
    id: 1,
    title: "كيف تعالجين الثعلبة نهائيًا بزيت الخروع والأعشاب الأيورفيدية؟",
    titleEn: "How to Permanently Treat Alopecia Areata with Castor Oil & Ayurvedic Herbs?",
    excerpt: "تجربتي الشخصية مع خلطة مواهب مهاجر التي أعادت شعري بعد 2 أشهر فقط من الثعلبة المزمنة...",
    excerptEn: "My personal experience with Mowahib's blend that regrew my hair in just 2 months after chronic alopecia...",
    date: "2025-11-15",
    author: "مواهب مهاجر",
    image: "/img/blog-alopecia.jpg",
    category: "علاج الثعلبة",
  },
  {
    id: 2,
    title: "أفضل 5 زيوت طبيعية لتطويل الشعر الأفريقي والمجعد",
    titleEn: "Top 5 Natural Oils for Growing Long, Healthy Afro & Curly Hair",
    excerpt: "اكتشفي السر وراء شعر طويل كثيف حتى مع الشعر المجعد الصعب...",
    excerptEn: "Discover the secret behind long, thick hair even with the most challenging curly textures...",
    date: "2025-11-10",
    author: "مواهب مهاجر",
    image: "/img/blog-growth.jpg",
    category: "تطويل الشعر",
  },
  {
    id: 3,
    title: "الفرق بين المنتجات الطبيعية والكيماوية: لماذا اخترنا الطبيعة؟",
    titleEn: "Natural vs Chemical Products: Why We Chose Nature?",
    excerpt: "كل ما تحتاجين معرفته عن تأثير الكيماويات على شعرك وبشرتك على المدى الطويل...",
    excerptEn: "Everything you need to know about the long-term effects of chemicals on your hair and skin...",
    date: "2025-11-05",
    author: "مواهب مهاجر",
    image: "/img/blog-natural.jpg",
    category: "نصائح العناية",
  },
];

const Blog = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <>
      <Helmet>
        <title>
          {isArabic
            ? "مدونة هبة ناتشورالز - أسرار العناية بالشعر الطبيعي"
            : "Heba Naturals Blog - Natural Hair Care Secrets"}
        </title>
        <meta
          name="description"
          content="مدونة هبة ناتشورالز - نصائح يومية من مواهب مهاجر لعلاج الثعلبة، تطويل الشعر الأفريقي والمجعد، وصفات طبيعية 100%"
        />
      </Helmet>

      <main className="min-h-screen py-20 px-4 bg-gradient-to-b from-emerald-50/70 via-teal-50/50 to-green-50/70 dark:from-emerald-950/90 dark:via-gray-900 dark:to-black">
        <div className="container mx-auto max-w-7xl">

          {/* Hero Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-emerald-700 via-green-600 to-teal-700 bg-clip-text text-transparent drop-shadow-2xl mb-6">
              {t("blog_title", { defaultValue: "Natural Beauty Journal" })}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-emerald-700 dark:text-emerald-300 font-medium max-w-4xl mx-auto leading-relaxed">
              نصائح يومية من مواهب مهاجر للعناية بالشعر الأفريقي والعربي بطرق طبيعية 100%
            </p>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="group relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-emerald-50/80 via-white to-green-50/80 dark:from-emerald-950/60 dark:via-gray-900/90 dark:to-teal-950/60 backdrop-blur-xl border border-emerald-200/50 dark:border-emerald-800/60 transition-all duration-500 hover:shadow-emerald-500/30 dark:hover:shadow-emerald-700/40"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={post.image}
                    alt={isArabic ? post.title : post.titleEn}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 sm:p-8">
                  {/* Author & Date */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-emerald-700 dark:text-emerald-400 mb-5">
                    <span className="flex items-center gap-2">
                      <FaUser className="ml-1" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaClock className="ml-1" />
                      {new Date(post.date).toLocaleDateString(isArabic ? "ar-EG" : "en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 line-clamp-2 leading-tight">
                    {isArabic ? post.title : post.titleEn}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 leading-relaxed text-base">
                    {isArabic ? post.excerpt : post.excerptEn}
                  </p>

                  {/* Read More */}
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-3 text-emerald-600 dark:text-emerald-400 font-bold text-lg hover:gap-2 hover:text-emerald-500 dark:hover:text-emerald-300 transition-all duration-300"
                  >
                    {t("read_more", { defaultValue: "اقرئي المزيد" })}
                    <FaLeaf className="text-xl group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>

                {/* Shine Effect */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-300/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Blog;