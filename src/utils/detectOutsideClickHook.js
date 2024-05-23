"use client";

import { useEffect } from "react";

const useDetectOutsideClick = (ref, handler, buttonRef) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef?.current?.contains(event.target)) return;

      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, handler]);
};

export default useDetectOutsideClick;
