import { useEffect, useState } from 'react';

const DEFAULT_WIDTH = 1280;

export const useViewportWidth = () => {
  const [width, setWidth] = useState(DEFAULT_WIDTH);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};
