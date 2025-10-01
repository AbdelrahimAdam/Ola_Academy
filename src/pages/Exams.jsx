// src/pages/Exams.jsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaCheckCircle } from 'react-icons/fa';
import Card from '../components/Card';

// Exams based on your academy's courses (add formUrl from Microsoft/Google Forms)
const sampleExams = [
  {
    id: 1,
    title: 'General English Placement Test',
    description: 'Test your English proficiency across grammar, vocabulary, and comprehension for all levels.',
    color: 'bg-blue-100 dark:bg-blue-900', // Soft blue
    formUrl: 'https://forms.office.com/Pages/DesignPageV2.aspx?origin=NeoPortalPage&subpage=design&id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__qGhCQZURjNRRlJOSUpKTlhHUllXNFJIV0I4STEwSi4u&topview=Preview', // Replace with actual link
    questions: [ // Optional fallback if no formUrl
      { id: 1, question: 'Choose the right answer: The Earth ————— around the Sun.', options: ['Moves', 'Moved', 'Has moved', 'Has been moving'], answer: 'Moves' },
      // Add more
    ],
  },
  {
    id: 2,
    title: 'Business English Assessment',
    description: 'Evaluate your business communication skills, including writing and professional terminology.',
    color: 'bg-green-100 dark:bg-green-900', // Soft green
    formUrl: 'https://forms.office.com/Pages/DesignPageV2.aspx?origin=NeoPortalPage&subpage=design&id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__qGhCQZUNUFWWjFWVVRTNDM1NUlUSDZBMlk2OFJLTy4u&topview=Preview', // Replace with actual link
    questions: [ // Optional fallback
      { id: 1, question: 'What does "CEO" stand for?', options: ['Chief Executive Officer', 'Chief Education Officer', 'Central Executive Officer', 'Chief Engineering Officer'], answer: 'Chief Executive Officer' },
      // Add more
    ],
  },
  {
    id: 3,
    title: 'IELTS Preparation Practice Test',
    description: 'Practice exam designed to simulate IELTS conditions with reading, writing, and listening sections.',
    color: 'bg-orange-100 dark:bg-orange-900', // Soft orange
    formUrl: 'https://forms.office.com/Pages/DesignPageV2.aspx?origin=NeoPortalPage&subpage=design&id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__qGhCQZUOTNXTTRYMkM5OTVKNDdWUDc4SEIxOFVSSC4u&topview=Preview', // Replace with actual link
    questions: [ // Optional fallback
      { id: 1, question: 'In IELTS Reading, skimming means:', options: ['Reading quickly for main ideas', 'Reading every word carefully', 'Skipping the passage', 'Only looking at questions'], answer: 'Reading quickly for main ideas' },
      // Add more
    ],
  },
  {
    id: 4,
    title: 'Kids English Fun Quiz',
    description: 'Engaging quiz to test basic English skills with fun, age-appropriate questions.',
    color: 'bg-pink-100 dark:bg-pink-900', // Soft pink
    formUrl: 'https://forms.cloud.microsoft/Pages/DesignPageV2.aspx?prevorigin=Marketing&origin=NeoPortalPage&subpage=design&id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__qGhCQZURDdOQkwxMkVPVVNKS1ZDMzlFMFNNOUtDTi4u&topview=Preview', // Replace with actual link
    questions: [ // Optional fallback
      { id: 1, question: 'Identify the noun in the sentence: I live in Amsterdam.', options: ['In', 'Live', 'Amsterdam', 'I'], answer: 'Amsterdam' },
      // Add more
    ],
  },
];

const Exams = () => {
  const { t } = useTranslation();
  const [selectedExam, setSelectedExam] = useState(null);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const startExam = (exam) => {
    if (exam.formUrl) {
      window.open(exam.formUrl, '_blank'); // Open external quiz in new tab
    } else {
      // Fallback to client-side if no formUrl
      setSelectedExam(exam);
      setAnswers({});
      setScore(null);
    }
  };

  const handleAnswer = (questionId, option) => {
    setAnswers({ ...answers, [questionId]: option });
  };

  const submitExam = () => {
    let correct = 0;
    selectedExam.questions.forEach((q) => {
      if (answers[q.id] === q.answer) correct++;
    });
    setScore(`${correct} / ${selectedExam.questions.length}`);
  };

  return (
    <>
      <Helmet>
        <title>{t('academy_name')} - {t('exams_title')}</title>
      </Helmet>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-12 bg-background dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            {t('exams_title')}
          </h1>

          {!selectedExam ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleExams.map((exam) => (
                <motion.div
                  key={exam.id}
                  whileHover={{ scale: 1.05 }}
                  className={`${exam.color} p-6 rounded-2xl shadow-lg flex flex-col justify-between transition-colors duration-300`}
                >
                  <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{exam.title}</h2>
                  <p className="mb-6 text-gray-700 dark:text-gray-300">{exam.description}</p>
                  <button
                    onClick={() => startExam(exam)}
                    className="mt-auto bg-primary dark:bg-secondary hover:bg-primary-dark dark:hover:bg-secondary-dark text-white px-5 py-3 rounded-full font-medium shadow-md transition"
                  >
                    {t('exams_start')}
                  </button>
                </motion.div>
              ))}
            </div>
          ) : (
            // Client-side fallback code (same as before)
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-3xl mx-auto"
            >
              <Card>
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{selectedExam.title}</h2>

                {selectedExam.questions.map((q) => (
                  <div key={q.id} className="mb-6 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm">
                    <p className="font-bold mb-3 text-gray-800 dark:text-gray-200">
                      {t('exam_question')} {q.id}: {q.question}
                    </p>
                    <div className="flex flex-col gap-2">
                      {q.options.map((opt) => (
                        <label
                          key={opt}
                          className={`cursor-pointer flex items-center gap-2 p-2 rounded-lg transition
                            ${
                              answers[q.id] === opt
                                ? 'bg-primary dark:bg-secondary text-white'
                                : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 hover:bg-primary/20 dark:hover:bg-secondary/20'
                            }`}
                        >
                          <input
                            type="radio"
                            name={`q${q.id}`}
                            value={opt}
                            className="hidden"
                            onChange={() => handleAnswer(q.id, opt)}
                            checked={answers[q.id] === opt}
                          />
                          {answers[q.id] === opt && <FaCheckCircle />}
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}

                <button
                  onClick={submitExam}
                  className="mt-4 bg-secondary dark:bg-primary hover:bg-green-600 dark:hover:bg-primary-dark text-white px-6 py-3 rounded-full font-medium shadow-md transition"
                >
                  {t('submit_answers')}
                </button>

                {score && (
                  <p className="mt-6 text-xl font-semibold text-center text-gray-900 dark:text-white">
                    {t('exams_score')}: {score}
                  </p>
                )}
              </Card>
            </motion.div>
          )}
        </div>
      </motion.section>
    </>
  );
};

export default Exams;