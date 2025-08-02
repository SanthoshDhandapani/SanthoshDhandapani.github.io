import React from "react";
import { TracingBeam } from "./ui/TracingBeam";
import portfolioConfig from "../config/portfolioConfig";

const ExperienceTimeline = () => {
  const { experience, education, awards, certifications } = portfolioConfig;

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <TracingBeam className="px-6">
          <div className="max-w-2xl mx-auto antialiased pt-4 relative">
            <div className="mb-10">
              <h2 className="text-4xl md:text-6xl font-bold text-center text-white mb-16">Professional Journey</h2>
              
              {/* Work Experience */}
              {experience.map((exp) => (
                <div key={exp.id} className="mb-10">
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
              ))}

              {/* Education */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
                {education.map((edu, index) => (
                  <div key={edu.id} className="mb-6 p-6 bg-gray-900 rounded-lg border border-gray-800">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                        <p className="text-blue-400 font-medium">{edu.institution}</p>
                        <p className="text-gray-400 text-sm">{edu.year}</p>
                        <p className="text-gray-400 text-sm">{edu.location}</p>
                        <p className="text-gray-300 mt-2">{edu.description}</p>
                        {edu.website && (
                          <a 
                            href={edu.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 text-sm mt-2 inline-block"
                          >
                            Visit Institution →
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Awards & Recognition */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-white mb-6">Awards & Recognition</h3>
                {awards.map((award, index) => (
                  <div key={award.id} className="mb-4 p-4 bg-gray-900 rounded-lg border border-gray-800">
                    <h4 className="text-lg font-semibold text-white">{award.title}</h4>
                    <p className="text-blue-400 text-sm">{award.organization} • {award.year}</p>
                    <p className="text-gray-300 mt-2">{award.description}</p>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-white mb-6">Certifications</h3>
                {certifications.map((cert, index) => (
                  <div key={cert.id} className="mb-4 p-4 bg-gray-900 rounded-lg border border-gray-800">
                    <h4 className="text-lg font-semibold text-white">{cert.title}</h4>
                    <p className="text-blue-400 text-sm">{cert.issuer} • {cert.date}</p>
                    <p className="text-gray-300 mt-2">{cert.description}</p>
                    {cert.credentialUrl && (
                      <a 
                        href={cert.credentialUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 text-sm mt-2 inline-block"
                      >
                        View Credential →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TracingBeam>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
