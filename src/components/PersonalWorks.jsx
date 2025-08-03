import React from "react";
import { CardContainer, CardBody, CardItem } from "./ui/ThreeDCard";
import portfolioConfig from "../config/portfolioConfig";
import SectionContainer from "./ui/SectionContainer";

const PersonalWorks = () => {
  const works = portfolioConfig.personalWorks;

  return (
    <SectionContainer id="personal-works" title="Personal Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
        {works.map((work, index) => (
          <CardContainer key={work.id}>
            <CardBody className="bg-white dark:bg-gray-900 relative group/card hover:shadow-xl dark:hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-emerald-500/[0.1] border-gray-200 dark:border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border transition-all duration-300">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300"
              >
                {work.title}
              </CardItem>
              
              <CardItem
                as="div"
                translateZ="40"
                className="flex items-center gap-2 mt-2 mb-3"
              >
                <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 dark:bg-opacity-50 text-blue-700 dark:text-blue-300 rounded transition-colors duration-300">
                  {work.category}
                </span>
                <span className="text-xs text-gray-600 dark:text-gray-400 transition-colors duration-300">{work.year}</span>
              </CardItem>
              
              <CardItem
                as="p"
                translateZ="60"
                className="text-gray-700 dark:text-gray-400 text-sm max-w-sm mt-2 transition-colors duration-300"
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
                      className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardItem>
              
              <CardItem translateZ="80" className="flex flex-col items-center gap-3 mt-6 mb-2 w-full relative z-10">
                {work.githubUrl && (
                  <a
                    href={work.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-black text-xs font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300"
                  >
                    GitHub
                  </a>
                )}
                <a
                  href={work.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-300 border border-blue-600 dark:border-blue-400 hover:border-blue-500 dark:hover:border-blue-300 hover:bg-blue-50 dark:hover:bg-blue-400/10"
                >
                  View Live →
                </a>
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </SectionContainer>
  );
};

export default PersonalWorks;
