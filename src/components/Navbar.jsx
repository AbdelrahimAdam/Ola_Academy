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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-lg border-b border-gray-200/50 dark:border-gray-700/50">
      <div
        className={`container mx-auto px-4 py-3 flex items-center justify-between ${
          isArabic ? "flex-row-reverse" : "flex-row"
        }`}
      >
        {/* ===== Logo & Title - Left Corner ===== */}
        <Link
          to="/"
          className={`flex items-center gap-3 z-60 ${
            isArabic ? "flex-row-reverse" : "flex-row"
          }`}
        >
          {/* Enhanced Logo with 3D Effect */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-sm"></div>
            <img
              src="/logo.jpg"
              alt="El Ola Academy Logo"
              className="relative w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shadow-2xl border-2 border-white/50 dark:border-gray-600/50"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent mix-blend-overlay"></div>
          </motion.div>

          {/* Simplified Single Line Title */}
          <motion.div
            initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className={`
              text-lg md:text-xl font-bold 
              bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 
              dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400
              bg-clip-text text-transparent
              drop-shadow-md
              whitespace-nowrap
              ${isArabic ? 'font-["Noto_Sans_Arabic"]' : "font-['Poppins']"}
              tracking-tight
            `}>
              {t("academy_name")}
            </span>
          </motion.div>
        </Link>

        {/* ===== Desktop Navigation - Center ===== */}
        <div className="hidden md:flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/80 dark:bg-gray-800/80 
                           text-gray-700 dark:text-gray-300 font-semibold shadow-lg 
                           hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white 
                           dark:hover:from-blue-600 dark:hover:to-cyan-600 
                           border border-gray-200/50 dark:border-gray-600/50
                           backdrop-blur-sm transition-all duration-300"
              >
                <span className="text-lg">{item.icon}</span>
                <span className="capitalize text-sm">{t(item.label)}</span>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* ===== Desktop Theme & Language Controls - Right Corner ===== */}
        <div
          className={`hidden md:flex items-center gap-3 ${
            isArabic ? "flex-row-reverse" : "flex-row"
          }`}
        >
          {/* Theme Toggle with Enhanced Styling */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 
                       dark:from-gray-700 dark:to-gray-800 
                       text-gray-700 dark:text-yellow-400 
                       shadow-lg hover:shadow-xl
                       border border-gray-300/50 dark:border-gray-600/50
                       backdrop-blur-sm transition-all duration-300"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
          </motion.button>

          {/* Language Toggle with Enhanced Styling */}
          <motion.button
            onClick={toggleLanguage}
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 
                       hover:from-green-600 hover:to-emerald-600
                       text-white font-semibold shadow-lg hover:shadow-xl
                       border border-green-400/50
                       backdrop-blur-sm transition-all duration-300
                       text-sm"
          >
            {isArabic ? t("switch_to_en") : t("switch_to_ar")}
          </motion.button>
        </div>

        {/* ===== Mobile Controls Container ===== */}
        <div
          className={`flex md:hidden items-center gap-3 ${
            isArabic ? "flex-row-reverse" : "flex-row"
          }`}
        >
          {/* Theme Toggle (Mobile) */}
          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 
                       text-gray-700 dark:text-yellow-400 
                       shadow-md hover:shadow-lg transition-all duration-200"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
          </motion.button>

          {/* Language Toggle (Mobile) */}
          <motion.button
            onClick={toggleLanguage}
            whileTap={{ scale: 0.9 }}
            className="px-3 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 
                       text-white font-medium shadow-md hover:shadow-lg
                       transition-all duration-200 text-xs"
          >
            {isArabic ? t("switch_to_en") : t("switch_to_ar")}
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            className="p-2 rounded-lg bg-gray-200/80 dark:bg-gray-700/80 
                       text-gray-700 dark:text-gray-300 
                       shadow-md hover:shadow-lg transition-all duration-200"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <AiOutlineClose size={22} />
            ) : (
              <AiOutlineMenu size={22} />
            )}
          </motion.button>
        </div>
      </div>

      {/* ===== Mobile Dropdown ===== */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ type: "spring", damping: 25 }}
          className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl px-4 py-6 space-y-3 shadow-2xl border-t border-gray-200/50 dark:border-gray-700/50 z-50"
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center gap-4 px-4 py-4 rounded-xl bg-white/80 dark:bg-gray-800/80 
                                text-gray-700 dark:text-gray-300 font-medium shadow-lg 
                                hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white 
                                dark:hover:from-blue-600 dark:hover:to-cyan-600 
                                border border-gray-200/50 dark:border-gray-600/50
                                backdrop-blur-sm transition-all duration-300"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="capitalize text-base">{t(item.label)}</span>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Mobile Theme Toggle in Menu */}
          <motion.div
            initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: navItems.length * 0.1 }}
          >
            <button
              onClick={() => {
                toggleTheme();
                setIsOpen(false);
              }}
              className="flex items-center gap-4 w-full px-4 py-4 rounded-xl bg-white/80 dark:bg-gray-800/80 
                         text-gray-700 dark:text-gray-300 font-medium shadow-lg 
                         hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white 
                         dark:hover:from-blue-600 dark:hover:to-cyan-600 
                         border border-gray-200/50 dark:border-gray-600/50
                         backdrop-blur-sm transition-all duration-300"
            >
              {theme === "dark" ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
              <span className="text-base">{theme === "dark" ? t("light_mode") : t("dark_mode")}</span>
            </button>
          </motion.div>

          {/* Mobile Language Toggle in Menu */}
          <motion.div
            initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: (navItems.length + 1) * 0.1 }}
          >
            <button
              onClick={() => {
                toggleLanguage();
                setIsOpen(false);
              }}
              className="flex items-center justify-center gap-3 w-full px-4 py-4 rounded-xl 
                         bg-gradient-to-r from-green-500 to-emerald-500 
                         hover:from-green-600 hover:to-emerald-600
                         text-white font-semibold shadow-lg hover:shadow-xl
                         border border-green-400/50
                         backdrop-blur-sm transition-all duration-300 text-base"
            >
              {isArabic ? t("switch_to_en") : t("switch_to_ar")}
            </button>
          </motion.div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;