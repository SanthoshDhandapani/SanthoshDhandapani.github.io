import React from 'react';
import { motion } from 'framer-motion';

const SectionContainer = ({ 
  id, 
  title, 
  children, 
  className = "py-20 bg-black",
  titleClassName = "text-4xl md:text-6xl font-bold text-center text-white mb-16",
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
