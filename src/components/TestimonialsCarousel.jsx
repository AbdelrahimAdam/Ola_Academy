// src/components/TestimonialsCarousel.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const TestimonialsCarousel = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const [index, setIndex] = useState(0);

  const testimonials = [
    {
      name: "سارة أحمد",
      country: "مصر",
      review: "أول مرة شعري يطول بالشكل ده! زيت الثعلبة غير حياتي، النتيجة من الأسبوع الثالث. شكراً مواهب مهاجر!",
      productImage: "/img/products/alopecia-oil.jpg",
      productName: "زيت علاج الثعلبة",
      rating: 5,
    },
    {
      name: "لين محمد",
      country: "السودان",
      review: "بعد سنين من القشرة والحكة، الكركار السوداني أنهى المشكلة تماماً. طبيعي 100% وفعال!",
      productImage: "/img/products/sudanese-karkar.jpg",
      productName: "الكركار السوداني الأصلي",
      rating: 5,
    },
    {
      name: "نورا علي",
      country: "السعودية",
      review: "خلطة الحنة العلاجية أعادت لمعان شعري بعد الصبغات! أحلى لون طبيعي وشعري صار أقوى بكتير.",
      productImage: "/img/products/henna.jpg",
      productName: "خلطة الحنة العلاجية",
      rating: 5,
    },
    {
      name: "فاطمة يوسف",
      country: "مصر",
      review: "زيت الجوجوبا ده سحر! شعري المجعد بقى ناعم ومرطب ومش بيتلبد خالص. أحسن استثمار عملته لشعري.",
      productImage: "/img/products/joioba-oil.jpg",
      productName: "زيت الجوجوبا النقي",
      rating: 5,
    },
    {
      name: "هبة خالد",
      country: "السودان",
      review: "ماسك الحنة المغذي أنقذ شعري بعد الكيراتين! رجع لمعانه وحيويته في جلسة واحدة فقط.",
      productImage: "/img/products/henna2.jpg",
      productName: "ماسك الحنة المغذي",
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-emerald-50 via-white to-green-50 dark:from-gray-900 dark:via-black dark:to-emerald-950">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
        >
          {t("home.testimonials_title") || "موثوق من أكثر من 12,000 عميلة"}
        </motion.h2>

        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="grid md:grid-cols-2 gap-0 items-center bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-emerald-200 dark:border-emerald-800"
            >
              {/* صورة المنتج */}
              <div className="relative h-96 md:h-full min-h-96">
                <img
                  src={testimonials[index].productImage}
                  alt={testimonials[index].productName}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-2xl font-bold drop-shadow-2xl">{testimonials[index].productName}</p>
                  <div className="flex gap-1 mt-3">
                    {[...Array(testimonials[index].rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-xl drop-shadow" />
                    ))}
                  </div>
                </div>
              </div>

              {/* النص */}
              <div className="p-10 md:p-14 text-center lg:text-right">
                <FaQuoteLeft className="text-7xl text-emerald-500 dark:text-emerald-400 opacity-20 mb-8" />

                <p className="text-xl md:text-2xl leading-relaxed text-gray-800 dark:text-gray-200 mb-10 italic font-medium">
                  "{testimonials[index].review}"
                </p>

                <div>
                  <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">
                    — {testimonials[index].name}
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
                    {testimonials[index].country}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`transition-all duration-300 ${
                  i === index
                    ? "bg-emerald-600 w-12 h-3 rounded-full"
                    : "bg-gray-400 w-3 h-3 rounded-full hover:bg-emerald-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;