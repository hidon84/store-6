import { useEffect, useState } from 'react';

const useDebounce = <T>(value: T, delayTime: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delayTime);

    return () => clearTimeout(handler);
  }, [value, delayTime]);

  return debouncedValue;
};

export default useDebounce;
