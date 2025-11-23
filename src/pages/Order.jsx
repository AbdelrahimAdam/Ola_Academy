// src/pages/Order.jsx
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaWhatsapp, FaTruck, FaShieldAlt, FaCheckCircle, FaLeaf, FaStar } from "react-icons/fa";

const Order = () => {
  const whatsappLink = "https://wa.me/201234567890?text=مرحبًا%20هبة%20ناتشورالز%20%F0%9F%8C%BF%0Aأريد%20الاستفسار%20عن%20المنتجات%20العلاجية%20الطبيعية...";

  return (
    <>
      <Helmet>
        <title>اطلبي الآن | هبة ناتشورالز - منتجات علاجية طبيعية</title>
        <meta
          name="description"
          content="تواصلي معنا عبر واتساب لطلب منتجات هبة ناتشورالز الأصلية - شحن لمصر والسودان والسعودية - دفع عند الاستلام"
        />
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950 dark:via-teal-950 dark:to-cyan-900 py-16 px-5">

        <div className="container mx-auto max-w-4xl text-center">

          {/* العنوان */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-emerald-800 dark:text-emerald-300 mb-4">
              اطلبي منتجاتك الآن
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
              شحن سريع • دفع عند الاستلام • ضمان نتائج
            </p>
          </motion.div>

          {/* زر واتساب رئيسي – حجم مثالي على الموبايل */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 120 }}
            className="mb-16"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold text-lg sm:text-xl px-10 sm:px-12 py-5 sm:py-6 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <FaWhatsapp className="text-3xl sm:text-4xl" />
              تواصلي مع الدكتورة هبة عبر واتساب
            </a>
          </motion.div>

          {/* المزايا */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: <FaTruck />, title: "شحن سريع", desc: "مصر • السودان • السعودية" },
              { icon: <FaShieldAlt />, title: "دفع عند الاستلام", desc: "آمن ومريح" },
              { icon: <FaCheckCircle />, title: "ضمان النتائج", desc: "إرجاع كامل إذا لم تعجبك النتيجة" },
              { icon: <FaLeaf />, title: "منتجات طبيعية 100%", desc: "صناعة يدوية وتركيبات أيورفيدية أصلية" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-lg border border-emerald-100 dark:border-emerald-800"
              >
                <div className="text-4xl sm:text-5xl text-emerald-600 dark:text-emerald-400 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* الثقة */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/40 dark:to-teal-900/40 rounded-3xl p-10 shadow-xl"
          >
            <FaStar className="text-5xl sm:text-6xl text-yellow-500 mx-auto mb-4" />
            <p className="text-2xl sm:text-3xl font-bold text-emerald-800 dark:text-emerald-300">
              أكثر من 15,000 عميلة سعيدة
            </p>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-400 mt-2">
              من مصر والسودان والسعودية والخليج
            </p>
          </motion.div>

          {/* زر واتساب سفلي صغير وأنيق */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 font-bold text-lg hover:text-green-700 dark:hover:text-green-300 transition"
            >
              <FaWhatsapp className="text-2xl" />
              تواصلي معنا الآن عبر واتساب
            </a>
          </motion.div>

        </div>
      </main>
    </>
  );
};

export default Order;