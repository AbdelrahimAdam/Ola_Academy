// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import {
  FaMoon,
  FaSun,
  FaHome,
  FaInfoCircle,
  FaLeaf,
  FaShoppingBag,
  FaBlog,
  FaWhatsapp,
} from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false); // تم التصحيح هنا
  const { theme, toggleTheme } = useTheme();
  const isArabic = i18n.language === "ar";

  const toggleLanguage = () => {
    const newLang = isArabic ? "en" : "ar";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
    setIsOpen(false);
  };

  const navItems = [
    { path: "/", label: "nav.home", icon: <FaHome /> },
    { path: "/about", label: "nav.about", icon: <FaInfoCircle /> },
    { path: "/products", label: "nav.products", icon: <FaLeaf /> },
    { path: "/order", label: "nav.order_now", icon: <FaShoppingBag /> },
    { path: "/blog", label: "nav.blog", icon: <FaBlog /> },
    { path: "/contact", label: "nav.contact", icon: <FaWhatsapp /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-xl border-b border-emerald-100 dark:border-gray-800">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Brand Name */}
        <Link to="/" className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <img
              src="/img/logo.jpg"
              alt="Heba Naturals"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full object-cover shadow-lg border-3 border-emerald-300 dark:border-emerald-600"
            />
          </motion.div>

          <div className="flex flex-col leading-tight">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent drop-shadow-md">
                {isArabic ? "هبة" : "Heba"}
              </span>
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent drop-shadow-md ml-1">
                {isArabic ? "ناتشورالز" : "Naturals"}
              </span>
            </h1>
            <p className="text-[10px] sm:text-xs md:text-sm text-emerald-700 dark:text-emerald-300 font-medium opacity-90">
              {isArabic ? "علاج طبيعي أصلي" : "Original Natural Treatment"}
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              <span className="text-emerald-600 dark:text-emerald-400">{item.icon}</span>
              <span>{t(item.label)}</span>
            </Link>
          ))}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-emerald-100 dark:bg-gray-800 hover:bg-emerald-200 dark:hover:bg-gray-700 transition"
          >
            {theme === "dark" ? (
              <FaSun className="text-yellow-500 text-lg" />
            ) : (
              <FaMoon className="text-emerald-700 text-lg" />
            )}
          </button>

          <button
            onClick={toggleLanguage}
            className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold rounded-full text-sm shadow-lg transition"
          >
            {isArabic ? "EN" : "عربي"}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 rounded-lg bg-emerald-100 dark:bg-gray-800"
          >
            {isOpen ? (
              <AiOutlineClose size={24} className="text-emerald-700 dark:text-emerald-400" />
            ) : (
              <AiOutlineMenu size={24} className="text-emerald-700 dark:text-emerald-400" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-white dark:bg-gray-900 border-t-2 border-emerald-200 dark:border-emerald-800 shadow-2xl"
        >
          <div className="py-6 px-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 px-6 py-4 hover:bg-emerald-50 dark:hover:bg-gray-800 rounded-xl transition-all text-lg font-medium border-b border-gray-100 dark:border-gray-800 last:border-0"
              >
                <span className="text-emerald-600 dark:text-emerald-400 text-xl">
                  {item.icon}
                </span>
                <span className="text-gray-800 dark:text-gray-100">
                  {t(item.label)}
                </span>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;