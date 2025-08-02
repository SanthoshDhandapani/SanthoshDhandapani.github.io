import React from "react";
import { motion } from "framer-motion";
import portfolioConfig from "../config/portfolioConfig";

const Skills = () => {
  // Extract all technology names from portfolio config skills
  const getAllTechnologies = () => {
    const allTechs = [];
    Object.values(portfolioConfig.skills).forEach(category => {
      if (category.technologies) {
        category.technologies.forEach(tech => {
          allTechs.push(tech.name);
        });
      }
    });
    return allTechs;
  };

  const technologies = getAllTechnologies();

  return (
    <section className="bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
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
          <h3 className="text-2xl font-bold text-white mb-8">Technologies & Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 bg-blue-900 bg-opacity-20 border border-blue-500 rounded-full text-blue-400 text-sm font-medium hover:bg-blue-500 hover:text-white transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
