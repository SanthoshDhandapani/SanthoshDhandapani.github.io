import React from "react";
import { motion } from "framer-motion";
import portfolioConfig from "../config/portfolioConfig";

const DesignWorksSection = () => {
  const work = portfolioConfig.designWorks[0]; // Get the first (and only) design work

  return (
    <section id="design-works" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
        >
          Design Works & Prototypes
        </motion.h2>
        
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">{work.title}</h3>
            
            {/* Full Image Display */}
            <div className="mb-8">
              <img 
                src={work.thumbnail} 
                alt={work.title}
                className="w-full h-auto max-w-full mx-auto rounded-lg shadow-2xl"
              />
            </div>
            
            <p className="text-lg text-gray-300 mb-6">
              {work.description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {work.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="text-gray-400 text-lg">
              {work.year}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DesignWorksSection;
