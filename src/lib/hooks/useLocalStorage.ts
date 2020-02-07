import { useState } from "react";

export const useLocalStorage = (
  key: string,
  initialValue?: string | number
) => {
  const [value, setStoredValue] = useState(() => {
    try {
      const item =
        typeof window !== "undefined" && window?.localStorage.getItem(key);
      return item ? JSON.parse(item) : (initialValue as string);
    } catch (error) {
      console.log(error);
      return initialValue as string;
    }
  });

  const setValue = (val: any) => {
    try {
      const valueToStore = val instanceof Function ? val(setStoredValue) : val;
      setStoredValue(valueToStore);
      typeof window !== "undefined" &&
        window &&
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return { value, setValue };
};
