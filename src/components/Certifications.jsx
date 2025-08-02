import React from "react";
import portfolioConfig from "../config/portfolioConfig";
import SectionContainer from "./ui/SectionContainer";
import Card from "./ui/Card";
import Grid from "./ui/Grid";

const Certifications = () => {
  const { certifications } = portfolioConfig;

  return (
    <SectionContainer id="certifications" title="Certifications">
      <Grid cols="1 md:2">
        {certifications.map((cert, index) => (
          <Card key={cert.id} hoverColor="green-500" delay={index * 0.1}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white group-hover:text-green-400 transition-colors mb-2">
                  {cert.title}
                </h3>
                <p className="text-blue-400 font-medium mb-1">{cert.issuer}</p>
                <p className="text-gray-400 text-sm mb-3">{cert.date}</p>
              </div>
              <span className="text-2xl cursor-auto select-none">📜</span>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed mb-4">{cert.description}</p>
            
            {cert.credentialUrl && (
              <a 
                href={cert.credentialUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-green-400 hover:text-green-300 text-sm font-medium transition-colors group-hover:underline"
              >
                View Credential
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </Card>
        ))}
      </Grid>
    </SectionContainer>
  );
};

export default Certifications;
