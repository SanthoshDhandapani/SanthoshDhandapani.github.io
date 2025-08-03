import React from "react";
import { motion } from "framer-motion";
import portfolioConfig from "../config/portfolioConfig";

const Skills = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
        >
          How I Work
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {portfolioConfig.workflowSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-blue-500 transition-colors"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
              <h4 className="text-blue-400 text-sm mb-3">{step.subtitle}</h4>
              <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Technologies & Skills</h3>
          <p className="text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
            Expertise across the full technology stack with focus on modern development practices
          </p>
          
          {/* Skills organized by categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {Object.entries(portfolioConfig.skills).map(([categoryKey, category], categoryIndex) => {
              // Define category-specific styles
              const categoryStyles = {
                frontend: { icon: '🎨' },
                backend: { icon: '⚙️' },
                mobile: { icon: '📱' },
                tools: { icon: '🛠️' },
                database: { icon: '🗄️' },
                design: { icon: '🎯' },
                other: { icon: '💡' }
              };
              
              const style = categoryStyles[categoryKey] || categoryStyles.frontend;
              
              return (
                <motion.div
                  key={categoryKey}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.15, duration: 0.6 }}
                  className="relative group bg-gray-900 rounded-lg border border-gray-800 hover:border-blue-500 transition-colors p-6 min-h-[280px] flex flex-col"
                >
                  {/* Category header */}
                  <div className="relative z-10 mb-6">
                    <div className="flex items-center justify-center mb-3">
                      <span className="text-3xl mr-3">{style.icon}</span>
                      <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {category.title}
                      </h4>
                    </div>
                  </div>
                  
                  {/* Technology tags */}
                  <div className="relative z-10 flex flex-wrap gap-2 justify-center">
                    {category.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (categoryIndex * 0.15) + (techIndex * 0.05), duration: 0.4 }}
                        className="px-3 py-1 bg-blue-900 bg-opacity-30 hover:bg-blue-800 hover:bg-opacity-50 text-blue-300 hover:text-blue-100 text-sm rounded-full transition-all duration-300 cursor-default border border-blue-500 hover:border-blue-400 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
                        title={`${tech.description} (${tech.level})`}
                      >
                        {tech.name}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>


        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
