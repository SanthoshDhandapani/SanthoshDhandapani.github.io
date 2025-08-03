import React from 'react';
import { motion } from 'framer-motion';

const SectionContainer = ({ 
  id, 
  title, 
  children, 
  className = "py-20 bg-gray-50 dark:bg-black transition-colors duration-300",
  titleClassName = "text-4xl md:text-6xl font-bold text-center text-gray-900 dark:text-white mb-16 transition-colors duration-300",
  containerClassName = "max-w-6xl mx-auto px-4"
}) => {
  return (
    <section id={id} className={className}>
      <div className={containerClassName}>
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={titleClassName}
          >
            {title}
          </motion.h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
