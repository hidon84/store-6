import { useCallback, useEffect, useState } from 'react';

const useScrollPoint = (targetPoint: number): boolean => {
  const [isScrollPoint, setIsScrollPoint] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrollPoint(window.pageYOffset > targetPoint);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isScrollPoint;
};

export default useScrollPoint;
