"use client";

import "client-only";
import { useEffect, useState } from "react";

function useLocalStorageItem(key) {
  const [item, setItem] = useState("");

  useEffect(() => {
    const storedItem = localStorage.getItem(key);

    setItem(
      storedItem && storedItem !== undefined ? JSON.parse(storedItem) : ""
    );
  }, [key]);

  return item;
}

export default useLocalStorageItem;
