// src/pages/Blog.jsx
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet-async';
import Card from '../components/Card';
import blogPosts from '../data/blogPosts.json'; // Import JSON file

const Blog = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('academy_name')} - {t('blog')}</title>
        <meta name="description" content={t('blog_description')} />
        <meta property="og:title" content={`${t('academy_name')} - ${t('blog')}`} />
        <meta property="og:description" content={t('blog_description')} />
        <meta property="og:image" content="https://via.placeholder.com/1200x400?text=El+Ola+Academy+Blog" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${t('academy_name')} - ${t('blog')}`} />
        <meta name="twitter:description" content={t('blog_description')} />
        <meta name="twitter:image" content="https://via.placeholder.com/1200x400?text=El+Ola+Academy+Blog" />
      </Helmet>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-12 bg-gradient-to-br from-teal-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white font-serif">
            {t('blog_title')}
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto font-serif">
            {t('blog_subtitle')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => {
              const colorPairs = [
                { bg: 'bg-rose-100 dark:bg-rose-900', text: 'text-rose-900 dark:text-rose-100' },
                { bg: 'bg-lime-100 dark:bg-lime-900', text: 'text-lime-800 dark:text-lime-200' },
                { bg: 'bg-indigo-100 dark:bg-indigo-900', text: 'text-indigo-800 dark:text-indigo-200' },
                { bg: 'bg-amber-100 dark:bg-amber-900', text: 'text-amber-800 dark:text-amber-200' },
              ];
              const { bg: colorClass, text: textClass } = colorPairs[index % colorPairs.length];

              return (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card
                    className={`h-full flex flex-col rounded-2xl p-6 ${colorClass} shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform-gpu`}
                  >
                    <h2 className={`text-xl md:text-2xl font-bold mb-2 ${textClass} font-serif`}>
                      {t(post.title, { defaultValue: `Post ${index + 1}` })}
                    </h2>
                    <p className={`text-base font-bold ${textClass} font-serif`}>
                      {t('blog_date')} {post.date}
                    </p>
                    <p className={`flex-1 mt-2 text-base font-bold ${textClass} font-serif leading-relaxed`}>
                      {t(post.content, { defaultValue: 'No content available for this post.' })}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Blog;