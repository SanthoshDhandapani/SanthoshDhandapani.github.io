import React from "react";
import { TracingBeam } from "./ui/TracingBeam";
import portfolioConfig from "../config/portfolioConfig";
import SectionContainer from "./ui/SectionContainer";

const ExperienceCard = ({ exp }) => (
  <div className="mb-10">
    <div className="flex items-start space-x-4 p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-blue-500 transition-colors">
      <img 
        src={exp.logo} 
        alt={exp.company} 
        className="w-16 h-16 rounded-lg object-contain bg-white p-2"
      />
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
        <p className="text-blue-400 font-medium mb-2">{exp.company}</p>
        <p className="text-gray-400 text-sm mb-3">{exp.date}</p>
        <p className="text-gray-300 leading-relaxed mb-4">{exp.description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {exp.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-900 bg-opacity-30 border border-blue-500 rounded-full text-blue-300 text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
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
            {experience.map((exp) => (
              <ExperienceCard key={exp.id} exp={exp} />
            ))}
          </div>
        </div>
      </TracingBeam>
    </SectionContainer>
  );
};

export default Experience;
