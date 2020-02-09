import { useState, useEffect } from "react";
import cookie from "js-cookie";

export const useCookie = (key: string, initialValue?: string) => {
  const [value, setInnerValue] = useState<string | undefined>(
    () => cookie.get(key) || initialValue
  );

  const setValue = (value: string, options?: any) => {
    setInnerValue(value);
    cookie.set(key, value, options);
  };

  useEffect(() => {
    const getCookie = cookie.get(key);
    setInnerValue(getCookie);
  });

  return { value, setValue };
};
