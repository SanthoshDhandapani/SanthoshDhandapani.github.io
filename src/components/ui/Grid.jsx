import React from 'react';

const Grid = ({ 
  children, 
  cols = "1 md:2 lg:3", 
  gap = "6",
  className = ""
}) => {
  // Map cols prop to proper Tailwind classes
  const getGridCols = (cols) => {
    switch (cols) {
      case "1 md:2 lg:3":
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
      case "1 md:2":
        return "grid-cols-1 md:grid-cols-2";
      case "1 md:3":
        return "grid-cols-1 md:grid-cols-3";
      case "2 lg:3":
        return "grid-cols-2 lg:grid-cols-3";
      case "2 lg:4":
        return "grid-cols-2 lg:grid-cols-4";
      default:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
    }
  };
  
  const getGap = (gap) => {
    switch (gap) {
      case "4":
        return "gap-4";
      case "6":
        return "gap-6";
      case "8":
        return "gap-8";
      default:
        return "gap-6";
    }
  };
  
  const gridClasses = `grid ${getGridCols(cols)} ${getGap(gap)} ${className}`;
  
  return (
    <div className={gridClasses}>
      {children}
    </div>
  );
};

export default Grid;
