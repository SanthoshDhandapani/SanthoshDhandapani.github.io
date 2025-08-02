import React from "react";
import portfolioConfig from "../config/portfolioConfig";
import SectionContainer from "./ui/SectionContainer";
import Card from "./ui/Card";
import Grid from "./ui/Grid";

const Hobbies = () => {
  const { interests } = portfolioConfig;

  return (
    <SectionContainer id="hobbies" title="Interests & Hobbies">
      <Grid cols="1 md:2 lg:3">
        {interests.map((interest, index) => (
          <Card key={interest.name} hoverColor="blue-500" delay={index * 0.1}>
            <div className="text-center">
              <div className="text-4xl mb-4 cursor-auto select-none">{interest.icon}</div>
              <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
                {interest.name}
              </h3>
              <p className="text-gray-400 text-sm">{interest.description}</p>
            </div>
          </Card>
        ))}
      </Grid>
    </SectionContainer>
  );
};

export default Hobbies;
