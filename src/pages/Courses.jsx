// src/pages/Courses.jsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaBook, FaClock, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import Card from '../components/Card';

const courses = [
  {
    title: 'general_english',
    description: 'general_english_description', // Use key as placeholder
    level: 'Beginner to Advanced',
    duration: '3 months',
    color: 'bg-blue-100 dark:bg-blue-900', // Soft blue
  },
  {
    title: 'business_english',
    description: 'business_english_description', // Use key as placeholder
    level: 'Intermediate',
    duration: '2 months',
    color: 'bg-green-100 dark:bg-green-900', // Soft green
  },
  {
    title: 'ielts_prep',
    description: 'ielts_prep_description', // Use key as placeholder
    level: 'Advanced',
    duration: '1 month',
    color: 'bg-orange-100 dark:bg-orange-900', // Soft orange
  },
  {
    title: 'kids_english',
    description: 'kids_english_description', // Use key as placeholder
    level: 'Beginner',
    duration: '4 months',
    color: 'bg-pink-100 dark:bg-pink-900', // Soft pink
  },
];

const Courses = () => {
  const { t } = useTranslation();
  const [showForm, setShowForm] = useState(null);
  const [formData, setFormData] = useState({ fullName: '', country: '', nationality: '', email: '', course: '' });
  const [success, setSuccess] = useState(false);
  const formspreeEndpoint = 'https://formspree.io/f/xnngdgjq'; // Replace with your actual Formspree ID if needed
  const whatsappNumber = '+249924357822'; // Manager's WhatsApp number

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataPayload = new URLSearchParams({
      fullName: formData.fullName,
      country: formData.country,
      nationality: formData.nationality,
      email: formData.email,
      course: formData.course, // Use pre-set formData.course
      courseDescription: courses.find(c => t(c.title) === formData.course)?.description || '',
      duration: courses.find(c => t(c.title) === formData.course)?.duration || '',
      _subject: `Enrollment Inquiry for ${formData.course}`,
      _replyto: formData.email, // Allows manager to reply to student
    });
    console.log('Submitting payload:', Object.fromEntries(formDataPayload)); // Debug: Log payload to console
    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      body: formDataPayload, // Send as form-urlencoded
      headers: {
        'Accept': 'application/json', // For JSON response
      },
    });
    if (response.ok) {
      setSuccess(true);
      setFormData({ fullName: '', country: '', nationality: '', email: '', course: '' });
      setTimeout(() => setSuccess(false), 10000); // Extended to 10 seconds
    } else {
      const errorText = await response.text();
      alert(t('enroll_error', { defaultValue: `Failed to submit. Please try again. Error: ${errorText || 'Check Formspree ID and internet.'}` }));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Helmet>
        <title>{t('academy_name')} - {t('courses')}</title>
        <meta name="description" content={t('courses_description')} />
        <meta property="og:title" content={`${t('academy_name')} - ${t('courses')}`} />
        <meta property="og:description" content={t('courses_description')} />
        <meta property="og:image" content="https://via.placeholder.com/1200x400?text=El+Ola+Academy+Courses" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${t('academy_name')} - ${t('courses')}`} />
        <meta name="twitter:description" content={t('courses_description')} />
        <meta name="twitter:image" content="https://via.placeholder.com/1200x400?text=El+Ola+Academy+Courses" />
      </Helmet>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-12 bg-background dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            {t('courses_title')}
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            {t('courses_subtitle')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`${course.color} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <FaBook /> {t(course.title)}
                </h2>
                <p className="mb-4 text-gray-700 dark:text-gray-300">{t(course.description)}</p>
                <div className="space-y-2 text-sm md:text-base">
                  <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <FaClock /> {t('course_level')}: {course.level}
                  </p>
                  <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <FaClock /> {t('course_duration')}: {course.duration}
                  </p>
                </div>
                {/* WhatsApp Inquiry Button */}
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello, I would like to inquire about the price and details for ${t(course.title)} course. Thank you!`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-medium shadow-md transition flex items-center justify-center gap-2"
                >
                  <FaWhatsapp /> {t('course_inquiry')}
                </a>
                {/* Enroll Button to Show Form */}
                <button
                  className="mt-4 w-full bg-primary dark:bg-secondary hover:bg-primary-dark dark:hover:bg-secondary-dark text-white px-4 py-2 rounded-full font-medium shadow-md transition"
                  onClick={() => {
                    setShowForm(course.title);
                    setFormData(prev => ({ ...prev, course: t(course.title) })); // Pre-set course value
                  }}
                >
                  {t('course_enroll')}
                </button>
                {showForm === course.title && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-4 overflow-hidden"
                  >
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder={t('enroll_fullname_placeholder')}
                        className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary"
                        required
                      />
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder={t('enroll_country_placeholder')}
                        className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary"
                        required
                      />
                      <input
                        type="text"
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleChange}
                        placeholder={t('enroll_nationality_placeholder')}
                        className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t('enroll_email_placeholder')}
                        className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary"
                        required
                      />
                      <input
                        type="text"
                        name="course"
                        value={formData.course} // Use formData.course to reflect pre-set value
                        readOnly
                        className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary"
                      />
                      <button
                        type="submit"
                        className="w-full bg-secondary dark:bg-primary hover:bg-green-600 dark:hover:bg-primary-dark text-white px-4 py-2 rounded-full font-medium shadow-md transition flex items-center justify-center gap-2"
                        disabled={success}
                      >
                        <FaEnvelope /> {t('enroll_submit')}
                      </button>
                      {success && (
                        <p className="text-green-600 dark:text-green-400 text-center">
                          {t('enroll_thankyou')}
                        </p>
                      )}
                    </form>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Courses;