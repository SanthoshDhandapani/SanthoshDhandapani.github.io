import React from "react";
import portfolioConfig from "../config/portfolioConfig";
import SectionContainer from "./ui/SectionContainer";
import Card from "./ui/Card";
import Grid from "./ui/Grid";

const Awards = () => {
  const { awards } = portfolioConfig;

  return (
    <SectionContainer id="awards" title="Awards & Recognition">
      <Grid cols="1 md:2 lg:3">
        {awards.map((award, index) => (
          <Card key={award.id} hoverColor="yellow-500" delay={index * 0.1}>
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3 cursor-auto select-none">{award.icon}</span>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors">
                  {award.title}
                </h3>
                <p className="text-blue-400 text-sm font-medium">{award.company}</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-3">{award.year}</p>
            <p className="text-gray-300 text-sm leading-relaxed">{award.description}</p>
          </Card>
        ))}
      </Grid>
    </SectionContainer>
  );
};

export default Awards;
