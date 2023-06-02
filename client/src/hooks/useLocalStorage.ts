import { useState, useEffect } from "react";

const getLocalValue = (key: string, initValue: boolean | (() => void)) => {
  if (typeof window === "undefined") return initValue;

  const localValue = JSON.parse(localStorage.getItem(key) as string);
  if (localValue) return localValue;

  if (initValue instanceof Function) return initValue();

  return initValue;
};

export const useLocalStorage = (key: string, initValue: boolean) => {
  const [value, setValue] = useState(() => {
    return getLocalValue(key, initValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
