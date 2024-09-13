import { useEffect, useRef, useState } from 'react';

export function useHover() {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  function mouse() {
    setHovered((prevState) => !prevState);
  }

  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener('mouseover', mouse);
      element.addEventListener('mouseleave', mouse);
    }
    return () => {
      if (element) {
        element.removeEventListener('mouseover', mouse);
        element.removeEventListener('mouseleave', mouse);
      }
    };
  }, []);

  return { hovered, ref };
}
