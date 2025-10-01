// src/pages/About.jsx
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Card from '../components/Card';
import { FaTelegram, FaWhatsapp, FaFacebook, FaTiktok } from 'react-icons/fa'; // Import social media icons

const team = [
  { name: 'team_member1_name', bio: 'team_member1_bio', photo: '/logo.jpg' },
  { name: 'team_member2_name', bio: 'team_member2_bio', photo: '/logo.jpg' },
  { name: 'team_member3_name', bio: 'team_member3_bio', photo: '/logo.jpg' },
];

const whyChoose = ['why_choose1', 'why_choose2', 'why_choose3', 'why_choose4'];

const About = () => {
  const { t } = useTranslation();

  // Example social media links (replace with actual URLs)
  const socialLinks = {
    telegram: 'https://t.me/topractise',
    whatsapp: 'https://wa.me/+249924357822',
    facebook: 'https://www.facebook.com/ola.ali.algaily',
    tiktok: 'https://www.tiktok.com/@al_olafor99english?_t=ZS-909t3tnHRNX&_r=1',
  };

  return (
    <>
      <Helmet>
        <title>{t('academy_name')} - {t('about')}</title>
        <meta name="description" content={t('about_description')} />
        <meta property="og:title" content={`${t('academy_name')} - ${t('about')}`} />
        <meta property="og:description" content={t('about_description')} />
        <meta property="og:image" content="https://via.placeholder.com/1200x400?text=El+Ola+Academy+About" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${t('academy_name')} - ${t('about')}`} />
        <meta name="twitter:description" content={t('about_description')} />
        <meta name="twitter:image" content="https://via.placeholder.com/1200x400?text=El+Ola+Academy+About" />
      </Helmet>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-900 dark:text-white font-serif"
          >
            {t('about')}
          </motion.h1>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          >
            <Card className="p-6 bg-teal-100 dark:bg-teal-900 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-4 text-teal-800 dark:text-teal-200 font-serif">
                {t('about_mission')}
              </h2>
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed font-semibold text-lg font-serif">
                {t('about_mission_description')}
              </p>
            </Card>
            <Card className="p-6 bg-indigo-100 dark:bg-indigo-900 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-4 text-indigo-800 dark:text-indigo-200 font-serif">
                {t('about_vision')}
              </h2>
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed font-semibold text-lg font-serif">
                {t('about_vision_description')}
              </p>
            </Card>
          </motion.div>
          <motion.h2
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl font-bold mt-16 mb-8 text-gray-900 dark:text-white font-serif"
          >
            {t('about_team')}
          </motion.h2>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {team.map((member, index) => (
              <Card
                key={index}
                className="p-6 shadow-md hover:shadow-2xl transition-all duration-300 text-center flex flex-col items-center justify-center h-full dark:bg-opacity-80 dark:hover:bg-opacity-100 dark:bg-gradient-to-br dark:from-green-900 dark:to-purple-900"
              >
                <img
                  src={member.photo}
                  alt={t(member.name)}
                  className="rounded-full mb-4 w-32 h-32 sm:w-36 sm:h-36 object-cover"
                />
                <div className="flex flex-col items-center">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white font-serif hidden">
                    {t(member.name)}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-100 leading-relaxed font-semibold text-base sm:text-lg font-serif text-center">
                    {t(member.name)} - {t(member.bio)}
                  </p>
                </div>
              </Card>
            ))}
          </motion.div>
          <motion.h2
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-3xl font-bold mt-16 mb-8 text-gray-900 dark:text-white font-serif"
          >
            {t('about_why_choose')}
          </motion.h2>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {whyChoose.map((item, index) => (
              <Card
                key={index}
                className="p-6 shadow-md hover:shadow-2xl transition-all duration-300 text-center h-full dark:bg-opacity-80 dark:hover:bg-opacity-100 dark:bg-gradient-to-br dark:from-teal-900 dark:to-indigo-900"
              >
                <p className="text-gray-700 dark:text-gray-100 leading-relaxed font-semibold text-base sm:text-lg font-serif">
                  {t(item)}
                </p>
              </Card>
            ))}
          </motion.div>
          <motion.h2
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-3xl font-bold mt-16 mb-8 text-gray-900 dark:text-white font-serif"
          >
            {t('about_social_contact')}
          </motion.h2>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="flex justify-center gap-6"
          >
            <a
              href={socialLinks.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-300"
            >
              <FaTelegram />
            </a>
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200 transition-colors duration-300"
            >
              <FaWhatsapp />
            </a>
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-100 transition-colors duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href={socialLinks.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-black dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-400 transition-colors duration-300"
            >
              <FaTiktok />
            </a>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default About;