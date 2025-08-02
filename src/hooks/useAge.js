import { useMemo } from 'react';

export const useAge = (birthDate) => {
  const age = useMemo(() => {
    const today = new Date();
    const birth = new Date(birthDate);
    
    let calculatedAge = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    // If birthday hasn't occurred this year yet, subtract 1
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      calculatedAge--;
    }
    
    return calculatedAge;
  }, [birthDate]);

  return age;
};
