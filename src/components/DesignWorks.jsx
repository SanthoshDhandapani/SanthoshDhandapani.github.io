import React from "react";
import { motion } from "framer-motion";
import portfolioConfig from "../config/portfolioConfig";
import SectionContainer from "./ui/SectionContainer";

const DesignWorks = () => {
  const work = portfolioConfig.designWorks[0]; // Get the first (and only) design work

  return (
    <SectionContainer id="design-works" title="Design Works & Prototypes">
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">{work.title}</h3>
          
          {/* Full Image Display */}
          <div className="mb-8 py-8">
            <img 
              src={work.thumbnail} 
              alt={work.title}
              className="w-full h-auto max-w-full mx-auto rounded-lg shadow-2xl hover:shadow-white/60 transition-all duration-500 transform hover:scale-105 shadow-white/40"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.5))'
              }}
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
    </SectionContainer>
  );
};

export default DesignWorks;
