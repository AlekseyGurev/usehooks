import { useEffect, useState } from 'react';

export function useViewportSize() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const setResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', setResize);
    return () => window.removeEventListener('resize', setResize);
  }, []);

  return { height, width };
}
