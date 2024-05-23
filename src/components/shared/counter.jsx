"use client";
import React, { useState } from "react";
import { Box } from "@mui/material";

const CounterBox = ({ styles }) => {
  const [count, setCount] = useState(1);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <Box
        sx={{
          width: "119px",
          height: "41.3px",
          border: "1px solid #8A8A8A",
          display: "flex",
          borderRadius: "3.5px",
          ...styles,
        }}
      >
        <Box sx={{ margin: "auto", display: "flex" }}>
          <button
            onClick={decrement}
            style={{
              background: "none",
              border: "none",
              marginLeft: "4px",
            }}
          >
            -
          </button>
          <p style={{ margin: "0 10px" }}>0{count}</p>
          <button
            onClick={increment}
            style={{ background: "none", border: "none" }}
          >
            +
          </button>
        </Box>
      </Box>
    </>
  );
};

export default CounterBox;
