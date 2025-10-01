// src/components/Footer.jsx
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  FaWhatsapp,
  FaFacebook,
  FaTelegramPlane,
  FaTiktok,
} from 'react-icons/fa';

const socialLinks = [
  {
    href: "https://www.tiktok.com/@al_olafor99english?_t=ZS-909t3tnHRNX&_r=1",
    icon: <FaTiktok size={20} />,
    label: "TikTok",
    bgColor: "bg-black dark:bg-gray-800",
    hoverColor: "hover:bg-gray-800 dark:hover:bg-gray-700",
  },
  {
    href: "https://www.facebook.com/ola.ali.algaily",
    icon: <FaFacebook size={20} />,
    label: "Facebook",
    bgColor: "bg-blue-600 dark:bg-blue-800",
    hoverColor: "hover:bg-blue-700 dark:hover:bg-blue-900",
  },
  {
    href: "https://t.me/topractise",
    icon: <FaTelegramPlane size={20} />,
    label: "Telegram",
    bgColor: "bg-blue-400 dark:bg-blue-600",
    hoverColor: "hover:bg-blue-500 dark:hover:bg-blue-700",
  },
  {
    href: "https://wa.me/+249924357822",
    icon: <FaWhatsapp size={20} />,
    label: "WhatsApp",
    bgColor: "bg-green-500 dark:bg-green-700",
    hoverColor: "hover:bg-green-600 dark:hover:bg-green-800",
  },
];

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8 transition-colors duration-300">
      <div className="container mx-auto px-4 text-center">
        {/* Social Media Links */}
        <div className="mb-6">
          <h2 className={`text-xl font-bold mb-4 ${isArabic ? 'font-["Noto_Sans_Arabic"]' : "font-['Inter']"}`}>
            {t("connect_with_us", { defaultValue: "Connect With Us" })}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <motion.div
                  className={`flex items-center px-4 py-2 rounded-full shadow-md ${link.bgColor} ${link.hoverColor} text-white font-medium transition-colors duration-300`}
                  whileHover={{ scale: 1.05 }}
                >
                  {link.icon}
                  <span className="ml-2">{link.label}</span>
                </motion.div>
              </a>
            ))}
          </div>
        </div>

        {/* Copyright and Links */}
        <div className="border-t border-gray-600 dark:border-gray-700 pt-4">
          <p className="text-gray-300 dark:text-gray-400">
            © {year} {t('academy_name')}. {t('footer_rights', { defaultValue: 'All rights reserved.' })}
          </p>
          <div className="mt-3 space-x-6">
            <Link 
              to="/privacy" 
              className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors duration-300"
            >
              {t('privacy_policy', { defaultValue: 'Privacy Policy' })}
            </Link>
            <Link 
              to="/terms" 
              className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors duration-300"
            >
              {t('terms_of_service', { defaultValue: 'Terms of Service' })}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;