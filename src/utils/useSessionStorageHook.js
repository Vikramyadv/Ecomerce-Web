"use client";

import "client-only";
import { useEffect, useState } from "react";

function useSessionStorage(key, initialValue) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const storedValue = sessionStorage.getItem(key);
    if (storedValue !== null) {
      try {
        setValue(JSON.parse(storedValue));
      } catch (error) {
        console.error("Error parsing sessionStorage value:", error);
      }
    }
  }, [key]);

  const updateValue = (newValue) => {
    setValue(newValue);
    sessionStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, updateValue];
}

export default useSessionStorage;
