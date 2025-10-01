// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {
  FaMoon,
  FaSun,
  FaHome,
  FaBookOpen,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaBlog,
  FaWhatsapp,
  FaInfoCircle,
} from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const isArabic = i18n.language === "ar";

  const toggleLanguage = () => {
    const newLang = isArabic ? "en" : "ar";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  const navItems = [
    { path: "/", label: "home", icon: <FaHome /> },
    { path: "/about", label: "about", icon: <FaInfoCircle /> },
    { path: "/courses", label: "courses", icon: <FaBookOpen /> },
    { path: "/exams", label: "exams", icon: <FaUserGraduate /> },
    { path: "/registration", label: "registration", icon: <FaChalkboardTeacher /> },
    { path: "/blog", label: "blog", icon: <FaBlog /> },
    { path: "/contact", label: "contact", icon: <FaWhatsapp /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-lg">
      <div
        className={`container mx-auto px-4 py-4 flex items-center justify-between ${
          isArabic ? "flex-row-reverse" : "flex-row"
        }`}
      >
        {/* ===== Logo & Title (flip with language) ===== */}
        <Link
          to="/"
          className={`flex items-center gap-2 absolute top-4 ${
            isArabic ? "right-4 flex-row-reverse" : "left-4"
          }`}
        >
          <img
            src="/logo.jpg"
            alt="El Ola Academy Logo"
            className="w-10 h-10 rounded-full object-cover shadow-md"
          />
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            {t("academy_name")}
          </span>
        </Link>

        {/* ===== Desktop Navigation ===== */}
        <div className="hidden md:flex items-center gap-4 mx-auto">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-800 
                           text-gray-800 dark:text-gray-200 font-medium shadow-sm 
                           hover:bg-primary hover:text-white dark:hover:bg-secondary transition"
              >
                <span className="text-lg">{item.icon}</span>
                <span className="capitalize">{t(item.label)}</span>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* ===== Theme & Language Controls in Opposite Corner ===== */}
        <div
          className={`absolute top-4 ${
            isArabic ? "left-4 flex-row-reverse" : "right-4"
          } flex items-center gap-3`}
        >
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 
                       text-gray-800 dark:text-yellow-400 hover:scale-110 transition"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="px-3 py-2 rounded-md bg-secondary text-white font-medium 
                       hover:bg-green-600 transition"
          >
            {isArabic ? t("switch_to_en") : t("switch_to_ar")}
          </button>
        </div>

        {/* ===== Mobile Menu Button ===== */}
        <button
          className="md:hidden ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <AiOutlineClose size={24} className="text-gray-900 dark:text-white" />
          ) : (
            <AiOutlineMenu size={24} className="text-gray-900 dark:text-white" />
          )}
        </button>
      </div>

      {/* ===== Mobile Dropdown ===== */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-md px-4 py-4 space-y-3 shadow-lg mt-2"
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center gap-3 px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 
                              text-gray-800 dark:text-gray-200 font-medium shadow-sm 
                              hover:bg-primary hover:text-white dark:hover:bg-secondary transition"
              >
                <span className="text-lg">{item.icon}</span>
                <span className="capitalize">{t(item.label)}</span>
              </div>
            </Link>
          ))}

          {/* Theme Toggle (Mobile) */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 w-full px-4 py-2 rounded-md 
                       bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 
                       hover:bg-primary hover:text-white dark:hover:bg-secondary transition"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
            <span>{theme === "dark" ? t("light_mode") : t("dark_mode")}</span>
          </button>

          {/* Language Toggle (Mobile) */}
          <button
            onClick={toggleLanguage}
            className="block w-full text-left px-4 py-2 rounded-md 
                       bg-secondary text-white font-medium hover:bg-green-600 transition"
          >
            {isArabic ? t("switch_to_en") : t("switch_to_ar")}
          </button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
