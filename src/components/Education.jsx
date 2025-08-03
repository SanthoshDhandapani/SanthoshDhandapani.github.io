import React from "react";
import { TracingBeam } from "./ui/TracingBeam";
import portfolioConfig from "../config/portfolioConfig";
import SectionContainer from "./ui/SectionContainer";
import ExternalLink from "./ui/ExternalLink";
import Card from "./ui/Card";

const EducationCard = ({ edu, index }) => (
  <div className="mb-10">
    <Card hoverColor="blue-500" delay={index * 0.1}>
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{edu.degree}</h3>
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 transition-colors duration-300">{edu.institution}</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-1 transition-colors duration-300">{edu.year}</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-3 transition-colors duration-300">{edu.location}</p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 transition-colors duration-300">{edu.description}</p>
          {edu.website && (
            <ExternalLink href={edu.website} color="blue" showIcon={false}>
              Visit Institution →
            </ExternalLink>
          )}
        </div>
      </div>
    </Card>
  </div>
);

const Education = () => {
  const { education } = portfolioConfig;

  return (
    <SectionContainer 
      id="education" 
      title="Education"
      containerClassName="max-w-4xl mx-auto px-4"
    >
      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          <div className="mb-10">
            {education.map((edu, index) => (
              <EducationCard key={edu.id} edu={edu} index={index} />
            ))}
          </div>
        </div>
      </TracingBeam>
    </SectionContainer>
  );
};

export default Education;
