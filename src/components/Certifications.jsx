import React from "react";
import portfolioConfig from "../config/portfolioConfig";
import SectionContainer from "./ui/SectionContainer";
import Card from "./ui/Card";
import Grid from "./ui/Grid";
import ExternalLink from "./ui/ExternalLink";
import Icon from "./ui/Icon";

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
              <Icon size="md">📜</Icon>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed mb-4">{cert.description}</p>
            
            {cert.credentialUrl && (
              <ExternalLink href={cert.credentialUrl} color="green">
                View Credential
              </ExternalLink>
            )}
          </Card>
        ))}
      </Grid>
    </SectionContainer>
  );
};

export default Certifications;
