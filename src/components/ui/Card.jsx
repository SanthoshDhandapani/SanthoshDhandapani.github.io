import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = "", 
  hoverColor = "blue-500",
  delay = 0,
  ...props 
}) => {
  const baseClasses = `p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-${hoverColor} transition-all duration-300 hover:shadow-lg hover:shadow-${hoverColor}/10 cursor-default`;
  
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
