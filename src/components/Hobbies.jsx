import React from "react";
import portfolioConfig from "../config/portfolioConfig";
import SectionContainer from "./ui/SectionContainer";
import Card from "./ui/Card";
import Grid from "./ui/Grid";
import Icon from "./ui/Icon";

const Hobbies = () => {
  const { interests } = portfolioConfig;

  return (
    <SectionContainer id="hobbies" title="Interests & Hobbies">
      <Grid cols="1 md:2 lg:3">
        {interests.map((interest, index) => (
          <Card key={interest.name} hoverColor="blue-500" delay={index * 0.1}>
            <div className="text-center">
              <Icon size="xl" className="mb-4">{interest.icon}</Icon>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                {interest.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{interest.description}</p>
            </div>
          </Card>
        ))}
      </Grid>
    </SectionContainer>
  );
};

export default Hobbies;
