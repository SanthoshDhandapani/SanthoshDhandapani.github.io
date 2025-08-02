import React from 'react';

const Icon = ({ 
  children, 
  size = "md", 
  className = "",
  ...props 
}) => {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl", 
    lg: "text-3xl",
    xl: "text-4xl"
  };

  const baseClasses = `cursor-auto select-none ${sizeClasses[size]}`;

  return (
    <span className={`${baseClasses} ${className}`} {...props}>
      {children}
    </span>
  );
};

export default Icon;
