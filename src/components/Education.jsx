import React from "react";
import { TracingBeam } from "./ui/TracingBeam";
import portfolioConfig from "../config/portfolioConfig";
import SectionContainer from "./ui/SectionContainer";
import ExternalLink from "./ui/ExternalLink";

const EducationCard = ({ edu }) => (
  <div className="mb-10">
    <div className="p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-blue-500 transition-colors">
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-1">{edu.degree}</h3>
          <p className="text-blue-400 font-medium mb-2">{edu.institution}</p>
          <p className="text-gray-400 text-sm mb-1">{edu.year}</p>
          <p className="text-gray-400 text-sm mb-3">{edu.location}</p>
          <p className="text-gray-300 leading-relaxed mb-4">{edu.description}</p>
          {edu.website && (
            <ExternalLink href={edu.website} color="blue" showIcon={false}>
              Visit Institution →
            </ExternalLink>
          )}
        </div>
      </div>
    </div>
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
            {education.map((edu) => (
              <EducationCard key={edu.id} edu={edu} />
            ))}
          </div>
        </div>
      </TracingBeam>
    </SectionContainer>
  );
};

export default Education;
