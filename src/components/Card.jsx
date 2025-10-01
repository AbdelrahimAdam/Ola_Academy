// src/components/Card.jsx (Reusable card component)
import { motion } from 'framer-motion';

const Card = ({ children, className = '' }) => {
  return (
    <motion.div
      className={`bg-white rounded-lg shadow-soft p-6 hover:shadow-lg transition-transform duration-300 hover:scale-105 ${className}`}
      whileHover={{ y: -5 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;