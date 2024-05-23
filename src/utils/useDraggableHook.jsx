"use client";

import { useState, useEffect } from "react";

const useDrag = (ref, deps = [], options) => {
  const {
    onPointerDown = () => {},
    onPointerUp = () => {},
    onPointerMove = () => {},
    onDrag = () => {},
  } = options;

  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = (e) => {
    setIsDragging(true);

    onPointerDown(e);
  };

  const handlePointerUp = (e) => {
    setIsDragging(false);

    onPointerUp(e);
  };

  const handlePointerMove = (e) => {
    onPointerMove(e);

    if (isDragging) {
      onDrag(e);
    }
  };

  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener("pointerdown", handlePointerDown);
      element.addEventListener("pointerup", handlePointerUp);
      element.addEventListener("pointermove", handlePointerMove);

      return () => {
        element.removeEventListener("mousedown", handlePointerDown);
        element.removeEventListener("mouseup", handlePointerUp);
        element.removeEventListener("mousemove", handlePointerMove);
      };
    }

    return () => {};
  }, [
    ...deps,
    isDragging,
    handlePointerDown,
    handlePointerUp,
    handlePointerMove,
  ]);

  return { isDragging };
};

export default useDrag;
