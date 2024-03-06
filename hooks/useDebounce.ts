//hooks that delay and fetches song only when there is a pause in user input. After 500 milliseconds
import { useEffect, useState } from "react";

function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay || 500);

    return () => {
      clearTimeout(timer);
      //prevent overflow
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
