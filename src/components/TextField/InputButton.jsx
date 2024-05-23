"use client";
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

const style = {
  textField: {
    width: "80%",
    py: "3%",
    paddingLeft: "3%",
    maxWidth: "614px",
    marginY: "2rem",
    color: "#8A8A8A",
    // fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "1.5rem",
    alignItems: "center",
    boxShadow:
      "0px 3.02px 3.15px 0px #00000002, 0px 13.28px 6.52px 0px #00000004, 0px 32.6px 13px 0px #00000005, 0px 62.79px 25.48px 0px #00000006, 0px 105.65px 46.85px 0px #00000008, 0px 163px 80px 0px #0000000A",
  },
};

const InputButton = ({ value, placeholder }) => {
  const [email, setEmail] = useState(placeholder);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <Box
      sx={style.textField}
      onChange={() => {
        handleEmail();
      }}
    >
      {email}
    </Box>
  );
};

export default InputButton;
