// src/components/Card.jsx
import { motion } from "framer-motion";

const Card = ({ children, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -12, scale: 1.04 }}
      className={`
        relative overflow-hidden
        bg-white dark:bg-gray-900
        border border-emerald-200/50 dark:border-emerald-800/50
        rounded-2xl
        shadow-xl
        backdrop-blur-xl
        bg-opacity-90 dark:bg-opacity-80
        p-6 sm:p-8
        transition-all duration-500
        hover:shadow-2xl hover:shadow-emerald-500/20
        hover:border-emerald-400 dark:hover:border-emerald-600
        ${className}
      `}
    >
      {/* جراديانت خفيف في الخلفية للأناقة */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600" />
      </div>

      {/* تأثير لمعان خفيف عند الـ Hover */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        initial={false}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-emerald-300/20 to-transparent translate-x-[-100%] animate-[shine_2s_ease-in-out_infinite]" />
      </motion.div>

      {/* المحتوى */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default Card;