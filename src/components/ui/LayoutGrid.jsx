import React, { useState } from "react";
import { motion } from "framer-motion";

export const LayoutGrid = ({ cards }) => {
  const [selected, setSelected] = useState(null);
  const [lastSelected, setLastSelected] = useState(null);

  const handleClick = (card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={card.className}>
          <motion.div
            onClick={() => handleClick(card)}
            className={`relative overflow-hidden ${
              card.className
            } rounded-xl cursor-pointer`}
            layout
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ImageComponent card={card} />
            <SelectedCard selected={selected} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={`absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10 ${
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        }`}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

const ImageComponent = ({ card }) => {
  return (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      height="500"
      width="500"
      className="object-cover object-top absolute inset-0 h-full w-full transition duration-200"
      alt={card.content?.title || "Design work"}
    />
  );
};

const SelectedCard = ({ selected }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: selected?.id ? 0.6 : 0,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: selected?.id ? 1 : 0,
          y: selected?.id ? 0 : 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected?.content && (
          <>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              {selected.content.title}
            </h3>
            <p className="text-gray-300 text-sm md:text-base mb-4">
              {selected.content.description}
            </p>
            {selected.content.category && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-1 bg-blue-900 bg-opacity-50 text-blue-300 rounded">
                  {selected.content.category}
                </span>
                {selected.content.year && (
                  <span className="text-xs text-gray-400">{selected.content.year}</span>
                )}
              </div>
            )}
            {selected.content.technologies && (
              <div className="flex flex-wrap gap-1">
                {selected.content.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </>
        )}
      </motion.div>
    </div>
  );
};
