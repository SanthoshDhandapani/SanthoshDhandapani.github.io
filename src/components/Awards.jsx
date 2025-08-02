import React from "react";
import { motion } from "framer-motion";
import portfolioConfig from "../config/portfolioConfig";

const Awards = () => {
  const { awards } = portfolioConfig;

  return (
    <section id="awards" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-center text-white mb-16">Awards & Recognition</h2>
          
          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-yellow-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{award.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors">
                        {award.title}
                      </h3>
                      <p className="text-blue-400 text-sm font-medium">{award.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">{award.year}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{award.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
