import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export const TextGenerateEffect = ({ words, className }) => {
  const [scope, setScope] = useState(null);
  const wordsArray = words.split(" ");

  useEffect(() => {
    if (scope) {
      const elements = scope.querySelectorAll(".word");
      elements.forEach((element, idx) => {
        setTimeout(() => {
          element.classList.add("opacity-100");
          element.classList.remove("opacity-0");
        }, idx * 150);
      });
    }
  }, [scope]);

  const renderWords = () => {
    return (
      <motion.div ref={setScope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="word opacity-0 transition-opacity duration-500"
              style={{
                filter: "blur(10px)",
              }}
              animate={{
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1,
                delay: idx * 0.1,
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
