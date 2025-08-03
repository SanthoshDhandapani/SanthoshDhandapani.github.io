import React from "react";
import { motion } from "framer-motion";
import portfolioConfig from "../config/portfolioConfig";
import Card from "./ui/Card";

const Skills = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-16 transition-colors duration-300"
        >
          How I Work
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {portfolioConfig.workflowSteps.map((step, index) => (
            <Card
              key={step.title}
              hoverColor="blue-500"
              delay={index * 0.1}
              className="text-center"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{step.title}</h3>
              <h4 className="text-blue-600 dark:text-blue-400 text-sm mb-3 transition-colors duration-300">{step.subtitle}</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors duration-300">{step.description}</p>
            </Card>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Technologies & Skills</h3>
          <p className="text-gray-500 dark:text-gray-400 text-lg mb-16 max-w-2xl mx-auto transition-colors duration-300">
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
                <Card
                  key={categoryKey}
                  hoverColor="blue-500"
                  delay={categoryIndex * 0.15}
                  className="min-h-[280px] flex flex-col"
                >
                  {/* Category header */}
                  <div className="relative z-10 mb-6">
                    <div className="flex items-center justify-center mb-3">
                      <span className="text-3xl mr-3">{style.icon}</span>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {category.title}
                      </h4>
                    </div>
                  </div>
                  
                  {/* Technology tags */}
                  <div className="relative z-10 flex flex-wrap gap-2 justify-center">
                    {category.technologies.map((tech, techIndex) => (
                      <span
                        key={tech.name}
                        className="px-3 py-1 bg-blue-50 dark:bg-blue-900 dark:bg-opacity-30 hover:bg-blue-100 dark:hover:bg-blue-800 dark:hover:bg-opacity-50 text-blue-700 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-100 text-sm rounded-full transition-all duration-300 cursor-default border border-blue-200 dark:border-blue-500 hover:border-blue-300 dark:hover:border-blue-400 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
                        title={`${tech.description} (${tech.level})`}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
