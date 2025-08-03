import React, { useEffect, useRef, useState } from 'react';

const Card = ({ 
  children, 
  className = "", 
  hoverColor = "blue-500",
  delay = 0,
  ...props 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay * 1000);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, isVisible]);

  // Map hover colors to actual Tailwind classes
  const hoverColorMap = {
    'blue-500': 'hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-blue-500/10 dark:hover:shadow-blue-500/10',
    'green-500': 'hover:border-green-500 dark:hover:border-green-500 hover:shadow-green-500/10 dark:hover:shadow-green-500/10',
    'yellow-500': 'hover:border-yellow-500 dark:hover:border-yellow-500 hover:shadow-yellow-500/10 dark:hover:shadow-yellow-500/10',
    'purple-500': 'hover:border-purple-500 dark:hover:border-purple-500 hover:shadow-purple-500/10 dark:hover:shadow-purple-500/10',
    'red-500': 'hover:border-red-500 dark:hover:border-red-500 hover:shadow-red-500/10 dark:hover:shadow-red-500/10'
  };
  
  const hoverClasses = hoverColorMap[hoverColor] || hoverColorMap['blue-500'];
  const baseClasses = `p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl hover:-translate-y-2 ${hoverClasses} transition-all duration-300 cursor-default`;
  
  const animationClasses = isVisible 
    ? 'opacity-100 translate-y-0' 
    : 'opacity-0 translate-y-5';
  
  return (
    <div
      ref={cardRef}
      className={`group ${baseClasses} ${animationClasses} transition-all duration-600 ease-out ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
