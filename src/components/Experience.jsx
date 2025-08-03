import React from "react";
import { TracingBeam } from "./ui/TracingBeam";
import portfolioConfig from "../config/portfolioConfig";
import SectionContainer from "./ui/SectionContainer";
import Card from "./ui/Card";

const ExperienceCard = ({ exp, index }) => (
  <div className="mb-10">
    <Card hoverColor="blue-500" delay={index * 0.1}>
      <div className="flex items-start space-x-4">
        <img 
          src={exp.logo} 
          alt={exp.company} 
          className="w-16 h-16 rounded-lg object-contain bg-white p-2"
        />
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{exp.title}</h3>
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 transition-colors duration-300">{exp.company}</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-3 transition-colors duration-300">{exp.date}</p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 transition-colors duration-300">{exp.description}</p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-blue-50 dark:bg-blue-900 dark:bg-opacity-30 border border-blue-200 dark:border-blue-500 rounded-full text-blue-700 dark:text-blue-300 text-xs font-medium transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  </div>
);

const Experience = () => {
  const { experience } = portfolioConfig;

  return (
    <SectionContainer 
      id="experience" 
      title="Work Experience"
      containerClassName="max-w-4xl mx-auto px-4"
    >
      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          <div className="mb-10">
            {experience.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </TracingBeam>
    </SectionContainer>
  );
};

export default Experience;
