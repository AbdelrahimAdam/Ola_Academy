// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaLeaf, FaHandSparkles, FaHeart, FaShieldAlt, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

const About = () => {
  return (
    <>
      <Helmet>
        <title>من نحن | هبة ناتشورالز - منتجات علاجية طبيعية بإشراف الدكتورة هبة مهاجر</title>
        <meta
          name="description"
          content="هبة ناتشورالز – علامة تجارية رائدة في المنتجات العلاجية الطبيعية 100% للشعر الأفريقي والمجعد، بتركيبات أيورفيدية أصلية من أجود الأعشاب، بإشراف الدكتورة هبة مهاجر."
        />
        <meta property="og:title" content="من نحن | هبة ناتشورالز" />
        <meta property="og:description" content="تعرفي على قصة الدكتورة هبة مهاجر وكيف صنعت منتجات علاجية طبيعية غيرت حياة آلاف النساء" />
        <meta property="og:image" content="/img/about-og.jpg" />
        <meta property="og:url" content="https://hebanaturals.com/about" />
      </Helmet>

      <main className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950 dark:via-teal-950 dark:to-cyan-900 min-h-screen py-12 md:py-20">

        <div className="container mx-auto px-5 max-w-6xl">

          {/* العنوان الرئيسي */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-24"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-emerald-800 dark:text-emerald-300 mb-6 leading-tight">
              قصتنا مع الطبيعة
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium px-4">
              هبة ناتشورالز هي ثمرة شغف وعلم وإصرار الدكتورة هبة مهاجر على إعادة الجمال الطبيعي لشعركِ بأنقى المكونات وأصدق التركيبات.
            </p>
          </motion.div>

          {/* قسم المؤسسة - صورة دائرية كاملة + متجاوبة */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-20 md:mb-28 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-emerald-200 dark:border-emerald-800"
          >
            {/* الصورة - دائرية كاملة ومتجاوبة */}
            <div className="flex justify-center p-8 md:p-12">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-400 rounded-full blur-3xl opacity-30 scale-110"></div>
                <img
                  src="/img/founder.jpg"
                  alt="الدكتورة هبة مهاجر - مؤسسة هبة ناتشورالز"
                  className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover rounded-full shadow-2xl border-8 border-white dark:border-gray-800 z-10"
                />
              </div>
            </div>

            {/* النص */}
            <div className="p-8 md:p-12 text-center md:text-right">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-emerald-700 dark:text-emerald-400 mb-4">
                الدكتورة هبة مهاجر
              </h2>
              <p className="text-lg sm:text-xl text-emerald-600 dark:text-emerald-400 font-semibold mb-6">
                خبيرة في التركيبات العلاجية الطبيعية والأيورفيدا
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                بعد سنوات من البحث والتجربة، قررت الدكتورة هبة مهاجر أن تعيد للمرأة جمالها الطبيعي من خلال منتجات علاجية نقية 100%، مصممة خصيصًا للشعر الأفريقي والمجعد بكل تحدياته.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-5">
                تركيباتنا تجمع بين أسرار الأيورفيدا الهندية، والكركار السوداني الأصيل، والأعشاب الطبيعية المختارة بعناية فائقة، لتقدم لكِ نتائج حقيقية ومرئية من الأسبوع الأول.
              </p>
            </div>
          </motion.section>

          {/* لماذا تختارين هبة ناتشورالز؟ */}
          <section className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center mb-14 md:mb-20 bg-gradient-to-r from-emerald-700 to-teal-700 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent"
            >
              لماذا تثقين بهبة ناتشورالز؟
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <FaLeaf className="text-4xl sm:text-5xl text-emerald-600" />,
                  title: "طبيعية 100%",
                  desc: "بدون كيماويات، بارابين، سلفات أو مواد حافظة"
                },
                {
                  icon: <FaHandSparkles className="text-4xl sm:text-5xl text-amber-600" />,
                  title: "صناعة يدوية بحب",
                  desc: "كل قطرة تُصنع بعناية فائقة وضمير حي"
                },
                {
                  icon: <FaHeart className="text-4xl sm:text-5xl text-rose-600" />,
                  title: "نتائج من أول استخدام",
                  desc: "ملء الفراغات، علاج الثعلبة، والقضاء على القشرة"
                },
                {
                  icon: <FaShieldAlt className="text-4xl sm:text-5xl text-teal-600" />,
                  title: "مخصصة لشعرنا",
                  desc: "مصممة خصيصًا للشعر الأفريقي والمجعد بكل أنواعه"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-emerald-100 dark:border-emerald-800 text-center"
                >
                  <div className="mb-6 flex justify-center">{item.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* تواصلي معنا */}
          <section className="text-center py-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl shadow-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-8">
              انضمي لعائلة هبة ناتشورالز
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto px-4 leading-relaxed">
              تابعينا على السوشيال ميديا وشوفي قبل وبعد آلاف العميلات اللي غيّروا حياتهم مع منتجاتنا
            </p>
            <div className="flex justify-center gap-10 text-4xl sm:text-5xl text-white">
              <a href="https://instagram.com/hebanaturals" target="_blank" rel="noopener noreferrer"
                 className="hover:scale-125 transition-transform duration-300">
                <FaInstagram />
              </a>
              <a href="https://facebook.com/hebanaturals" target="_blank" rel="noopener noreferrer"
                 className="hover:scale-125 transition-transform duration-300">
                <FaFacebook />
              </a>
              <a href="https://wa.me/201234567890" target="_blank" rel="noopener noreferrer"
                 className="hover:scale-125 transition-transform duration-300">
                <FaWhatsapp />
              </a>
            </div>
          </section>

        </div>
      </main>
    </>
  );
};

export default About;