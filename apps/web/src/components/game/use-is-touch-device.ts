import { useEffect, useState } from 'react';

export const useIsTouchDevice = () => {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(pointer: coarse)');
    setIsTouch(query.matches);

    const handleChange = (event: MediaQueryListEvent) =>
      setIsTouch(event.matches);
    query.addEventListener('change', handleChange);
    return () => query.removeEventListener('change', handleChange);
  }, []);

  return isTouch;
};
