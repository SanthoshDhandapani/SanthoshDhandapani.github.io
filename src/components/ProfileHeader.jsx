import React from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { BackgroundBeams } from "./ui/BackgroundBeams";
import { useAge } from "../hooks/useAge";
import portfolioConfig from "../config/portfolioConfig";

const ProfileHeader = () => {
  const age = useAge(portfolioConfig.personal.dateOfBirth);
  return (
    <div className="relative min-h-screen flex items-center justify-center py-20 bg-black overflow-hidden">
      <BackgroundBeams />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-8 mb-8"
        >
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-500 mb-4">
            <img 
              src={portfolioConfig.personal.profileImage} 
              alt={`${portfolioConfig.personal.name} Profile`} 
              className="w-full h-full object-cover"

            />
          </div>
        </motion.div>

        <TextGenerateEffect 
          words={`Hi, I'm ${portfolioConfig.personal.name.split(' ')[0]}`}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        />
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-xl md:text-2xl text-blue-400 mb-6"
        >
          {portfolioConfig.personal.title}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          {portfolioConfig.summary.content}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-8 flex justify-center gap-8 text-sm"
        >          
          <div className="text-gray-400 text-center">
            <span className="text-blue-400">Experience:</span> Since Aug 2012
          </div>
          <div className="text-gray-400 text-center">
            <span className="text-blue-400">Location:</span> {portfolioConfig.personal.location}
          </div>
          <div className="text-gray-400 text-center">
            <span className="text-blue-400">Age:</span> {age} years
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="mt-8 flex flex-col items-center space-y-6"
        >
          {(() => {
            // Filter social links once and reuse
            const downloadCVLinks = portfolioConfig.socialLinks.filter(link => link.name === "Download CV");
            const otherSocialLinks = portfolioConfig.socialLinks.filter(link => link.name !== "Download CV");
            
            return (
              <>
                {/* Download CV Button - Prominent First */}
                <div className="mb-2">
                  {downloadCVLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 border border-blue-500 rounded-lg transition-all duration-300 group shadow-lg hover:shadow-blue-500/25"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                      </svg>
                      <span className="text-white font-medium">
                        {link.name}
                      </span>
                    </a>
                  ))}
                </div>
                
                {/* Other Social Links - Horizontal Row */}
                <div className="flex justify-center space-x-4">
                  {otherSocialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg hover:border-blue-500 hover:bg-gray-800 transition-all duration-300 group"
                >
                  {link.name === "LinkedIn" && (
                    <svg className="w-5 h-5 text-blue-400 group-hover:text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  )}
                  {link.name === "GitHub" && (
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  )}
                  <span className="text-gray-300 group-hover:text-white text-sm font-medium">
                    {link.name}
                  </span>
                </a>
              ))}
                </div>
              </>
            );
          })()}
        </motion.div>
      </div>
    </div>
  );
};

export default ProfileHeader;
