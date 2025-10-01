import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const TestimonialsCarousel = ({ testimonials: propTestimonials }) => {
  const [index, setIndex] = useState(0);
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language === "ar";
  const prefersDarkMode = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Use propTestimonials if provided, otherwise fallback to local state
  const [testimonials, setTestimonials] = useState(propTestimonials || []);
  useEffect(() => {
    setTestimonials(propTestimonials || []);
  }, [propTestimonials]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 10000); // Auto-slide every 10 seconds
    return () => clearInterval(timer);
  }, [testimonials]);

  if (testimonials.length === 0) {
    return <p className="text-center text-gray-500 dark:text-gray-400">{t("no_reviews")}</p>;
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden py-12">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-900 dark:text-gray-100 tracking-wide">
        {t("testimonials_title")}
      </h2>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: isArabic ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: isArabic ? 50 : -50 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className={`rounded-2xl shadow-xl p-6 text-center max-w-md mx-auto ${testimonials[index].color} transition-colors duration-300`}
        >
          <p
            className={`italic text-lg leading-relaxed mb-4 ${
              isArabic ? 'font-["Noto_Sans_Arabic"]' : 'font-["Inter"]'
            } text-gray-800 dark:text-gray-200`}
          >
            "{testimonials[index].review}"
          </p>
          <p
            className={`font-extrabold text-xl ${
              isArabic ? 'font-["Noto_Sans_Arabic"]' : 'font-["Inter"]'
            } text-gray-900 dark:text-gray-100 tracking-tight`}
          >
            – {testimonials[index].name} ({testimonials[index].course})
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center mt-8 space-x-3">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-4 h-4 rounded-full transition-colors ${
              i === index ? "bg-primary dark:bg-primary-dark" : "bg-gray-300 dark:bg-gray-600"
            } hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark`}
            aria-label={`Go to testimonial ${i + 1} by ${testimonials[i].name}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;