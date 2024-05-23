"use client";

import "client-only";
import { useEffect, useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue !== null) {
      try {
        setValue(JSON.parse(storedValue));
      } catch (error) {
        console.error("Error parsing localStorage value:", error);
      }
    }
  }, [key]);

  const updateValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, updateValue];
}

export default useLocalStorage;
