import React from 'react';

const ExternalLink = ({ 
  href, 
  children, 
  className = "", 
  color = "blue",
  showIcon = true,
  ...props 
}) => {
  const colorClasses = {
    blue: "text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300",
    green: "text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300",
    yellow: "text-yellow-600 hover:text-yellow-700 dark:text-yellow-400 dark:hover:text-yellow-300",
    purple: "text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
  };

  const baseClasses = `inline-flex items-center text-sm font-medium transition-colors group-hover:underline ${colorClasses[color]}`;

  return (
    <a 
      href={href}
      target="_blank" 
      rel="noopener noreferrer"
      className={`${baseClasses} ${className}`}
      {...props}
    >
      {children}
      {showIcon && (
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      )}
    </a>
  );
};

export default ExternalLink;
