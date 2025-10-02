import React, { useState, useEffect } from "react"; 
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FaInfoCircle,
  FaBookOpen,
  FaBlog,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaCertificate,
} from "react-icons/fa";
import TestimonialsCarousel from "../components/TestimonialsCarousel";

const navItems = [
  { 
    path: "/about", 
    label: "about", 
    icon: <FaInfoCircle />,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-600 dark:text-blue-400"
  },
  { 
    path: "/courses", 
    label: "courses", 
    icon: <FaBookOpen />,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-600 dark:text-green-400"
  },
  { 
    path: "/exams", 
    label: "exams", 
    icon: <FaCertificate />,
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-gradient-to-br from-purple-500/20 to-violet-500/20",
    iconColor: "text-purple-600 dark:text-purple-400"
  },
  { 
    path: "/registration", 
    label: "registration", 
    icon: <FaChalkboardTeacher />,
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-gradient-to-br from-orange-500/20 to-amber-500/20",
    iconColor: "text-orange-600 dark:text-orange-400"
  },
  { 
    path: "/blog", 
    label: "blog", 
    icon: <FaBlog />,
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-gradient-to-br from-pink-500/20 to-rose-500/20",
    iconColor: "text-pink-600 dark:text-pink-400"
  },
  { 
    path: "/contact", 
    label: "contact", 
    icon: <FaUserGraduate />,
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-gradient-to-br from-indigo-500/20 to-blue-500/20",
    iconColor: "text-indigo-600 dark:text-indigo-400"
  },
];

const Home = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  // State for form and testimonials
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    review: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Load initial reviews (simulated persistence)
  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem("academyReviews")) || [
      { name: t("testimonial_fatima_name"), course: "General English", review: t("testimonial_fatima_quote"), color: "bg-blue-50 dark:bg-blue-900/50" },
      { name: t("testimonial_mohammed_name"), course: "Business English", review: t("testimonial_mohammed_quote"), color: "bg-indigo-50 dark:bg-indigo-900/50" },
    ];
    setReviews(savedReviews);
  }, [t]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.course || !formData.review) {
      setError(t("review_error_required"));
      setSuccess("");
      return;
    }
    const newReview = {
      name: formData.name,
      course: formData.course,
      review: formData.review,
      color: getRandomColor(),
    };
    const updatedReviews = [...reviews, newReview].slice(-5); // Limit to 5 reviews
    setReviews(updatedReviews);
    localStorage.setItem("academyReviews", JSON.stringify(updatedReviews));
    setFormData({ name: "", course: "", review: "" });
    setError("");
    setSuccess(t("review_success"));
  };

  // Random color assignment for new reviews
  const getRandomColor = () => {
    const colors = [
      "bg-blue-50 dark:bg-blue-900/50",
      "bg-indigo-50 dark:bg-indigo-900/50",
      "bg-sky-50 dark:bg-sky-900/50",
      "bg-cyan-50 dark:bg-cyan-900/50",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <>
      <Helmet>
        <title>
          {t("academy_name")} - {t("home")}
        </title>
        <meta name="description" content={t("hero_description")} />
      </Helmet>

      {/* ======= Main Content Wrapper ======= */}
      <main className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        
        {/* Hero Section - Enhanced Vibrant Colors with Animated Wave */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="relative bg-gradient-to-br from-blue-400 via-blue-500 to-cyan-500 dark:from-blue-600 dark:via-blue-700 dark:to-cyan-600 text-white py-16 md:py-32 overflow-hidden"
        >
          {/* Enhanced Sun Rising Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute top-1/4 right-10 w-60 h-60 md:w-80 md:h-80 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full blur-2xl opacity-70"
          />
          
          {/* Enhanced Sun Rays */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200/30 to-transparent"
          />

          {/* Enhanced Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 md:w-3 md:h-3 bg-white/40 rounded-full"
                initial={{ y: -100, opacity: 0 }}
                animate={{ 
                  y: window.innerHeight,
                  opacity: [0, 0.8, 0],
                  x: Math.sin(i * 0.5) * 100
                }}
                transition={{
                  duration: 20 + Math.random() * 15,
                  repeat: Infinity,
                  delay: Math.random() * 8
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
          
          {/* Color Intensity Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-cyan-400/20 to-purple-400/10"></div>
          
          <div className="relative container mx-auto px-4 md:px-6 text-center z-10">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight bg-gradient-to-br from-white to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl ${
                isArabic ? 'font-["Noto_Sans_Arabic"]' : "font-['Inter']"
              }`}
            >
              {t("hero_welcome")}
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 1 }}
              className={`text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 md:mb-10 max-w-3xl mx-auto leading-relaxed font-light text-white/90 drop-shadow-lg px-2 ${
                isArabic ? 'font-["Noto_Sans_Arabic"]' : "font-['Inter']"
              }`}
            >
              {t("slogan")}
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 px-2"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.2 }}
            >
              <Link
                to="/courses"
                className="bg-white text-blue-600 hover:text-blue-700 px-6 py-3 md:px-10 md:py-4 rounded-xl font-bold text-base md:text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transform transition-all duration-300 border-2 border-white/50 hover:border-white backdrop-blur-sm text-center"
              >
                {t("quick_links_courses")}
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white text-white px-6 py-3 md:px-10 md:py-4 rounded-xl font-bold text-base md:text-lg shadow-2xl hover:bg-white hover:text-blue-600 hover:scale-105 transform transition-all duration-300 backdrop-blur-sm text-center"
              >
                {t("quick_links_contact")}
              </Link>
            </motion.div>
          </div>

          {/* Animated Wave Divider */}
          <motion.div 
            className="absolute bottom-0 left-0 right-0"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg className="w-full h-12 md:h-16 text-white dark:text-gray-900" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".35" className="fill-current"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-current"></path>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-current"></path>
            </svg>
          </motion.div>
        </motion.section>

        {/* Navigation Section - Enhanced Colors */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 dark:from-gray-800 dark:via-blue-900/30 dark:to-cyan-900/30 transition-colors duration-300 relative overflow-hidden">
          {/* Enhanced 3D Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-300/30 via-transparent to-transparent"></div>
          <div className="absolute top-10 left-10 w-32 h-32 md:w-40 md:h-40 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-36 h-36 md:w-48 md:h-48 bg-cyan-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 md:w-32 md:h-32 bg-sky-400/20 rounded-full blur-2xl"></div>
          
          <div className="relative container mx-auto px-4 md:px-6 z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16 text-gray-800 dark:text-white bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent ${
                isArabic ? 'font-["Noto_Sans_Arabic"]' : "font-['Inter']"
              }`}
            >
              {t("navigation", { defaultValue: "Explore Our Academy" })}
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {navItems.map((item, index) => (
                <Link key={index} to={item.path} aria-label={t(item.label)}>
                  <motion.div
                    className={`bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl p-4 md:p-6 lg:p-8 flex flex-col items-center text-center hover:shadow-xl md:hover:shadow-3xl hover:scale-105 transform transition-all duration-500 border-2 ${item.bgColor} border-opacity-50 hover:border-opacity-80 backdrop-blur-sm`}
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className={`text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4 ${item.iconColor} bg-gradient-to-br ${item.color} bg-opacity-20 p-3 md:p-4 rounded-xl md:rounded-2xl border border-opacity-30`}>
                      {item.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-2 md:mb-3">
                      {t(item.label)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm leading-relaxed">
                      {t(`${item.label}_description`, { defaultValue: "Discover more about our offerings and services tailored for your success" })}
                    </p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section - Enhanced Colors */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-slate-100 via-gray-100 to-blue-100 dark:from-slate-800 dark:via-gray-800 dark:to-blue-900/40 transition-colors duration-300 relative overflow-hidden">
          {/* Enhanced Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-200/30 via-blue-200/30 to-cyan-200/30 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-cyan-900/20"></div>
          
          {/* Enhanced Floating Shapes */}
          <div className="absolute top-10 right-10 md:top-20 md:right-20 w-12 h-12 md:w-20 md:h-20 bg-purple-400/30 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 left-10 md:bottom-20 md:left-20 w-16 h-16 md:w-24 md:h-24 bg-blue-400/30 rounded-lg blur-xl rotate-45"></div>
          <div className="absolute top-1/3 left-1/3 w-10 h-10 md:w-16 md:h-16 bg-cyan-400/30 rounded-full blur-lg"></div>
          
          <div className="relative container mx-auto px-4 md:px-6 z-10">
            <TestimonialsCarousel testimonials={reviews} />
          </div>
        </section>

        {/* Review Submission Section - Enhanced Colors */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-white via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-cyan-900/20 transition-colors duration-300">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2 
              className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16 text-gray-800 dark:text-white bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent ${isArabic ? 'font-["Noto_Sans_Arabic"]' : 'font-["Inter"]'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {t("review_title")}
            </motion.h2>
            <motion.div 
              className={`bg-gradient-to-br from-white to-blue-100 dark:from-gray-800 dark:to-blue-900/30 rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl p-6 md:p-8 lg:p-10 max-w-4xl mx-auto border border-gray-300 dark:border-gray-600 backdrop-blur-sm ${isArabic ? "text-right" : "text-left"}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 text-gray-800 dark:text-white bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {t("review_form_title")}
              </h3>
              {error && (
                <motion.p 
                  className="bg-red-100 dark:bg-red-900/40 border border-red-300 dark:border-red-700 text-red-700 dark:text-red-300 px-3 py-2 md:px-4 md:py-3 rounded-lg mb-4 md:mb-6 text-sm md:text-base"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {error}
                </motion.p>
              )}
              {success && (
                <motion.p 
                  className="bg-green-100 dark:bg-green-900/40 border border-green-300 dark:border-green-700 text-green-700 dark:text-green-300 px-3 py-2 md:px-4 md:py-3 rounded-lg mb-4 md:mb-6 text-sm md:text-base"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {success}
                </motion.p>
              )}
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                <div>
                  <label htmlFor="name" className="block text-base md:text-lg font-semibold mb-2 md:mb-3 text-gray-700 dark:text-gray-300">
                    {t("review_form_name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 md:px-6 md:py-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg md:rounded-xl focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-200 transition-all duration-300 bg-white/70 dark:bg-gray-600/70 backdrop-blur-sm text-sm md:text-base"
                    placeholder={t("review_form_name_placeholder")}
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="course" className="block text-base md:text-lg font-semibold mb-2 md:mb-3 text-gray-700 dark:text-gray-300">
                    {t("review_form_course")}
                  </label>
                  <select
                    id="course"
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full px-4 py-3 md:px-6 md:py-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg md:rounded-xl focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-200 transition-all duration-300 bg-white/70 dark:bg-gray-600/70 backdrop-blur-sm text-sm md:text-base"
                    aria-required="true"
                  >
                    <option value="">{t("review_form_course_placeholder")}</option>
                    <option value="General English">General English</option>
                    <option value="Business English">Business English</option>
                    <option value="IELTS Preparation">IELTS Preparation</option>
                    <option value="Kids English">Kids English</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="review" className="block text-base md:text-lg font-semibold mb-2 md:mb-3 text-gray-700 dark:text-gray-300">
                    {t("review_form_review")}
                  </label>
                  <textarea
                    id="review"
                    value={formData.review}
                    onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                    className="w-full px-4 py-3 md:px-6 md:py-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg md:rounded-xl focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-200 transition-all duration-300 bg-white/70 dark:bg-gray-600/70 backdrop-blur-sm resize-vertical text-sm md:text-base"
                    rows="4"
                    placeholder={t("review_form_review_placeholder")}
                    aria-required="true"
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-3 md:py-4 rounded-lg md:rounded-xl text-base md:text-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t("review_form_submit")}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;