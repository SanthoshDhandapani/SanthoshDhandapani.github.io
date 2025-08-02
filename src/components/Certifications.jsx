import React from "react";
import { motion } from "framer-motion";
import portfolioConfig from "../config/portfolioConfig";

const Certifications = () => {
  const { certifications } = portfolioConfig;

  return (
    <section id="certifications" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-center text-white mb-16">Certifications</h2>
          
          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white group-hover:text-green-400 transition-colors mb-2">
                        {cert.title}
                      </h3>
                      <p className="text-blue-400 font-medium mb-1">{cert.issuer}</p>
                      <p className="text-gray-400 text-sm mb-3">{cert.date}</p>
                    </div>
                    <span className="text-2xl">📜</span>
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
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
