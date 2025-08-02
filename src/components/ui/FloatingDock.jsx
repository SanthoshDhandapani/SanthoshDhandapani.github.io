import React, { useState } from "react";
import { motion, AnimatePresence, useSpring, useMotionValue } from "framer-motion";
import { cn } from "../../utils/cn";

export const FloatingDock = ({ items, desktopClassName, mobileClassName }) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockDesktop = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const springValue = useSpring(50, { stiffness: 300, damping: 30 });
  
  return (
    <motion.div
      className={cn(
        "mx-auto hidden md:flex h-16 gap-4 items-end rounded-2xl bg-gray-50 dark:bg-neutral-900 px-4 pb-3",
        className
      )}
    >
      {items.map((item, idx) => (
        <motion.div
          key={item.title}
          className="aspect-square w-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          whileHover={{ y: -10 }}
        >
          <div className="h-4 w-4">{item.icon}</div>
          <AnimatePresence mode="wait">
            {hoveredIndex === idx && (
              <motion.div
                initial={{ opacity: 0, y: 10, x: "-50%" }}
                animate={{ opacity: 1, y: 0, x: "-50%" }}
                exit={{ opacity: 0, y: 2, x: "-50%" }}
                className="px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
              >
                {item.title}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </motion.div>
  );
};

const FloatingDockMobile = ({ items, className }) => {
  return (
    <div className={cn("relative flex md:hidden h-16 gap-4 items-end w-full", className)}>
      <div className="flex justify-center items-center gap-4">
        {items.map((item, idx) => (
          <div
            key={item.title}
            className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-900"
          >
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
};
