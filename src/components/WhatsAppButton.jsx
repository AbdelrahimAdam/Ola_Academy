// src/components/ContactUsButton.jsx
import { useState } from 'react';
import { FaWhatsapp, FaFacebook, FaTelegram, FaTiktok, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ContactUsButton = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    {
      href: 'https://wa.me/249924357822',
      icon: <FaWhatsapp size={24} />,
      label: t('contact_whatsapp'),
      bgColor: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
    },
    {
      href: 'https://www.facebook.com/ola.ali.algaily',
      icon: <FaFacebook size={24} />,
      label: 'Facebook',
      bgColor: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700',
    },
    {
      href: 'https://t.me/topractise',
      icon: <FaTelegram size={24} />,
      label: 'Telegram',
      bgColor: 'bg-sky-500',
      hoverColor: 'hover:bg-sky-600',
    },
    {
      href: 'https://www.tiktok.com/@al_olafor99english?_t=ZS-909t3tnHRNX&_r=1',
      icon: <FaTiktok size={24} />,
      label: 'TikTok',
      bgColor: 'bg-pink-500',
      hoverColor: 'hover:bg-pink-600',
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end z-50">
      {/* Expandable Social Icons */}
      <AnimatePresence>
        {isOpen &&
          socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 }}
              className={`mb-3 text-white p-3 rounded-full shadow-lg ${link.bgColor} ${link.hoverColor} transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${link.bgColor.split('-')[1]}-500 dark:focus:ring-offset-gray-800`}
              title={link.label}
              aria-label={`${link.label} Link`}
            >
              {link.icon}
            </motion.a>
          ))}
      </AnimatePresence>

      {/* Main Floating Action Button (Contact Us) */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="px-4 py-3 rounded-full bg-primary hover:bg-indigo-700 text-white shadow-lg flex items-center justify-center font-semibold text-sm md:text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
        aria-label={t('contact_us_button', { defaultValue: 'Toggle Contact Us Options' })}
      >
        {isOpen ? <FaTimes size={24} /> : t('contact_us')}
      </motion.button>
    </div>
  );
};

export default ContactUsButton;