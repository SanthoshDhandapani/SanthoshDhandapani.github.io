import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const WorkExperience = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const experiences = [
    {
      id: 1,
      period: "2021 - Present",
      title: "Campus (Mobile & Desktop)",
      company: "Walmart Global Tech India",
      description: "One application for all associates managing onboarding, careers, finances, learnings, profile, team management and much more.",
      achievements: ["Engineering Excellence Award 2023", "Multiple Operational Excellence Awards 2022"]
    },
    {
      id: 2,
      period: "2020 - 2021",
      title: "Sam's Club - Frontend Lead",
      company: "Walmart",
      description: "Membership & Marketing, Safety & Emergency mobile applications. Lead the frontend team to build cloud central web application using React.",
      achievements: ["Team performance recognition", "Successfully led frontend team"]
    },
    {
      id: 3,
      period: "2018 - 2020",
      title: "Connected Cars SDK Developer",
      company: "Renault Nissan Technology Center",
      description: "Core development of connected cars (connected-mobility) SDK in Android for alliance-2022 (Renault-Nissan-Mitsubishi).",
      achievements: ["Best Performer Award 2018-2019"]
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
        >
          Work Experience
        </motion.h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  <p className="text-blue-400">{exp.company}</p>
                  <p className="text-gray-400 text-sm">{exp.period}</p>
                </div>
                <button
                  onClick={() => setExpandedItem(expandedItem === exp.id ? null : exp.id)}
                  className="text-gray-400 hover:text-white"
                >
                  {expandedItem === exp.id ? <ChevronUp /> : <ChevronDown />}
                </button>
              </div>

              <p className="text-gray-300 mb-4">{exp.description}</p>

              {expandedItem === exp.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="border-t border-gray-700 pt-4"
                >
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
