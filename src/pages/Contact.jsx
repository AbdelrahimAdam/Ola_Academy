// src/pages/Contact.jsx
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Card from '../components/Card';

const Contact = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: { name: '', email: '', message: '' },
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://formspree.io/f/xnngdgjq', {  // Replace with your form ID
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        alert(t('contact_success', { defaultValue: 'Thank you! Your message has been sent successfully. Our student services will contact you soon.' }));
        reset();
      } else {
        throw new Error(t('contact_error', { defaultValue: 'Failed to send message. Please try again later.' }));
      }
    } catch (error) {
      alert(error.message || t('contact_error'));
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('academy_name')} - {t('contact')}</title>
        <meta name="description" content={t('contact_description', { defaultValue: 'Get in touch with El Ola Academy for inquiries and support.' })} />
        <meta property="og:title" content={`${t('academy_name')} - ${t('contact')}`} />
        <meta property="og:description" content={t('contact_description', { defaultValue: 'Get in touch with El Ola Academy for inquiries and support.' })} />
        <meta property="og:image" content="https://via.placeholder.com/1200x400?text=El+Ola+Academy+Contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${t('academy_name')} - ${t('contact')}`} />
        <meta name="twitter:description" content={t('contact_description', { defaultValue: 'Get in touch with El Ola Academy for inquiries and support.' })} />
        <meta name="twitter:image" content="https://via.placeholder.com/1200x400?text=El+Ola+Academy+Contact" />
      </Helmet>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white font-serif"
          >
            {t('contact_title')}
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            <Card className="p-6 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300">
              <form
                action="https://formspree.io/f/xyznwlpo"  // Replace with your form ID
                method="POST"
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4"
                aria-label={t('contact_form_label', { defaultValue: 'Contact Form' })}
              >
                <div>
                  <input
                    {...register('name', { required: t('contact_required', { defaultValue: 'This field is required' }) })}
                    name="name"
                    placeholder={t('contact_form_name')}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white transition-colors duration-300"
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby="name-error"
                  />
                  {errors.name && <p id="name-error" className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <input
                    {...register('email', {
                      required: t('contact_required'),
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: t('contact_invalid_email', { defaultValue: 'Please enter a valid email address' }),
                      },
                    })}
                    name="email"
                    placeholder={t('contact_form_email')}
                    type="email"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white transition-colors duration-300"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby="email-error"
                  />
                  {errors.email && <p id="email-error" className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <textarea
                    {...register('message', { required: t('contact_required') })}
                    name="message"
                    placeholder={t('contact_form_message')}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white transition-colors duration-300 h-32 resize-none"
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby="message-error"
                  />
                  {errors.message && <p id="message-error" className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary text-white px-6 py-3 rounded-lg w-full hover:bg-indigo-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t('contact_submitting', { defaultValue: 'Submitting...' }) : t('contact_submit')}
                </button>
              </form>
            </Card>
            <Card className="p-6 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
              <div>
                <p className="text-gray-900 dark:text-gray-200 font-semibold text-lg mb-2">Phone: +249924357822</p>
                <p className="text-gray-900 dark:text-gray-200 font-semibold text-lg mb-4">Email: ola.academy1212@gmail.com</p>
                <a
                  href="https://wa.me/249924357822"
                  className="text-primary dark:text-indigo-400 hover:underline font-semibold text-lg"
                >
                  {t('contact_whatsapp')}
                </a>
              </div>
              <div className="mt-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=your-actual-embed-code-here"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title={t('contact_map', { defaultValue: 'Academy Location Map' })}
                  className="rounded-lg"
                  onError={() => console.log('Map iframe failed to load')}
                ></iframe>
              </div>
            </Card>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;