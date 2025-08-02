import React from "react";
import { CardContainer, CardBody, CardItem } from "./ui/ThreeDCard";
import portfolioConfig from "../config/portfolioConfig";
import SectionContainer from "./ui/SectionContainer";

const PersonalWorks = () => {
  const works = portfolioConfig.personalWorks;

  return (
    <SectionContainer id="personal-works" title="Personal Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {works.map((work, index) => (
          <CardContainer key={work.id}>
            <CardBody className="bg-gray-900 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white"
              >
                {work.title}
              </CardItem>
              
              <CardItem
                as="div"
                translateZ="40"
                className="flex items-center gap-2 mt-2 mb-3"
              >
                <span className="text-xs px-2 py-1 bg-blue-900 bg-opacity-50 text-blue-300 rounded">
                  {work.category}
                </span>
                <span className="text-xs text-gray-500">{work.year}</span>
              </CardItem>
              
              <CardItem
                as="p"
                translateZ="60"
                className="text-gray-400 text-sm max-w-sm mt-2"
              >
                {work.description}
              </CardItem>
              
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={work.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={work.title}
                />
              </CardItem>
              
              {/* Technologies */}
              <CardItem translateZ="30" className="mt-4">
                <div className="flex flex-wrap gap-1">
                  {work.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardItem>
              
              <CardItem translateZ="20" className="flex justify-between items-center mt-6 mb-2 w-full pr-2">
                <div className="flex">
                  {work.githubUrl && (
                    <a
                      href={work.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold hover:bg-gray-200 transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                </div>
                <div className="flex pr-2">
                  <a
                    href={work.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-xs font-normal text-white hover:text-blue-400 transition-colors"
                  >
                    View Live →
                  </a>
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </SectionContainer>
  );
};

export default PersonalWorks;
