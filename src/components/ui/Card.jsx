import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = "", 
  hoverColor = "blue-500",
  delay = 0,
  ...props 
}) => {
  // Map hover colors to actual Tailwind classes
  const hoverColorMap = {
    'blue-500': 'hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-blue-500/10 dark:hover:shadow-blue-500/10',
    'green-500': 'hover:border-green-500 dark:hover:border-green-500 hover:shadow-green-500/10 dark:hover:shadow-green-500/10',
    'yellow-500': 'hover:border-yellow-500 dark:hover:border-yellow-500 hover:shadow-yellow-500/10 dark:hover:shadow-yellow-500/10',
    'purple-500': 'hover:border-purple-500 dark:hover:border-purple-500 hover:shadow-purple-500/10 dark:hover:shadow-purple-500/10',
    'red-500': 'hover:border-red-500 dark:hover:border-red-500 hover:shadow-red-500/10 dark:hover:shadow-red-500/10'
  };
  
  const hoverClasses = hoverColorMap[hoverColor] || hoverColorMap['blue-500'];
  const baseClasses = `p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl hover:-translate-y-2 ${hoverClasses} transition-all duration-300 cursor-default`;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={`group ${baseClasses} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
